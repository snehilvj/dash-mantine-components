import json
import gzip
import base64
from urllib.parse import quote, urlencode
import os
from github import Github
from datetime import datetime

files = []
code = ''
reqs = {}
for root, dirs, filenames in os.walk('PRs'):
    for f in filenames:
        file_path = os.path.join(root, f)
        if f not in ['app.py', 'requirements.txt']:
            with open(file_path, 'rb') as file:
                files.append(
                    {
                        "name": os.path.relpath(file_path, 'PRs'),
                        "content": base64.b64encode(file.read()).decode("utf8"),
                        "encoding": "base64"
                    }
                )
        elif f == 'app.py':
            with open(file_path, 'r') as file:
                code = file.read()
        elif f == 'requirements.txt':
            with open(file_path, 'r') as file:
                reqs = {
                    'name': os.path.relpath(file_path, 'PRs'),
                    'content': file.read()
                }

new_package = f'{os.getenv("PACKAGE_NAME")} @ https://py.cafe/gh/artifact/{os.getenv("GITHUB_REPOSITORY")}/{os.getenv("ARTIFACT_ID")}/{os.getenv("FILE_FULLNAME")}'
if os.getenv("PACKAGE_NAME") in reqs['content']:
    reqs['content'] = reqs['content'].replace(os.getenv("PACKAGE_NAME"), new_package)
else:
    reqs['content'] += f'\n{new_package}'

def generate_link(files, code):
    json_object = {
        "requirements": reqs['content'],
        "code": code,
        "files": files,
    }
    json_text = json.dumps(json_object)
    # gzip -> base64
    compressed_json_text = gzip.compress(json_text.encode("utf8"))
    base64_text = base64.b64encode(compressed_json_text).decode("utf8")
    query = urlencode({"c": base64_text}, quote_via=quote)
    base_url = "https://py.cafe"
    type = "dash"  # replace by dash, or streamlit
    return f"{base_url}/snippet/{type}/v1?{query}"

# Generate the link
link = generate_link(files, code)

GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
REPO_NAME = os.getenv('GITHUB_REPOSITORY')
PR_NUMBER = int(os.getenv('PR_NUMBER'))

# Initialize Github object
g = Github(GITHUB_TOKEN)

# Get the repository
repo = g.get_repo(REPO_NAME)

# Get the pull request
pull_request = repo.get_pull(PR_NUMBER)

# Post the link as a comment on the pull request
def post_comment(link):
    # Find existing comments by the bot
    comments = pull_request.get_issue_comments()
    bot_comment = None

    for comment in comments:
        if comment.body.startswith("Test Environment for ["):
            bot_comment = comment
            break

    # Get current UTC datetime
    current_utc_time = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')

    # Define the comment body with datetime
    comment_body = f"Test Environment for [{REPO_NAME}-{PR_NUMBER}]({link})\nUpdated on: {current_utc_time}"

    # Update the existing comment or create a new one
    if bot_comment:
        bot_comment.edit(comment_body)
        print("Comment updated on the pull request.")
    else:
        pull_request.create_issue_comment(comment_body)
        print("Comment added to the pull request.")

# Create deployment message for a status
def create_deployment_message(link):
    # Create a deployment
    deployment = repo.create_deployment(
        ref=pull_request.head.sha,
        task='deploy',
        auto_merge=False,
        required_contexts=[],
        payload={},
        environment='staging',
        description=f'Deploying PR #{PR_NUMBER} to PyCafe',
        transient_environment=True,
        production_environment=False
    )

    # Update the deployment status
    deployment.create_status(
        state='success',
        target_url='https://py.cafe/',
        description='Deployment to staging succeeded!',
        environment_url=link,
        auto_inactive=True
    )

    print(f'Deployment message added to PR #{PR_NUMBER}')

post_comment(link)
create_deployment_message(link)
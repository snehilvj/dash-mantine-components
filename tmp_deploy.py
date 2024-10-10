import json
import gzip
import base64
from urllib.parse import quote, urlencode
import os
from github import Github

files = []
code = ''
reqs = {}
for f in os.listdir('PRs'):
    file_path = os.path.join('PRs', f)
    if f not in ['app.py','requirements.txt']:
        with open(file_path, 'rb') as file:
                files.append(
                    {
                        "name": f,
                        "content": base64.b64encode(file.read()).decode("utf8"),
                        "encoding": "base64"
                    }
                )
    elif f == 'app.py':
        with open(file_path, 'r') as file:
            code = file.read()
    else:
        with open(file_path, 'r') as file:
            reqs = {
                'name': f,
                'content': file.read()
            }

# Find the last modified tar.gz file in the 'dist' directory
dist_path = 'dist'
latest_tar_gz = None
latest_time = 0

for f in os.listdir(dist_path):
    if f.endswith('.tar.gz'):
        file_path = os.path.join(dist_path, f)
        modified_time = os.path.getmtime(file_path)
        if modified_time > latest_time:
            latest_time = modified_time
            latest_tar_gz = file_path

reqs['content'] += f'\n{os.getenv("ARTIFACT_URL")}'
files.append(reqs)

def generate_link(files, code):
    json_object = {
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

# Post the link as a comment on the pull request
def post_comment(link):
    # Get environment variables
    GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
    REPO_NAME = os.getenv('GITHUB_REPOSITORY')
    PR_NUMBER = int(os.getenv('PR_NUMBER'))

    # Initialize Github object
    g = Github(GITHUB_TOKEN)

    # Get the repository
    repo = g.get_repo(REPO_NAME)

    # Get the pull request
    pull_request = repo.get_pull(PR_NUMBER)

    # Add a comment to the pull request
    comment_body = f"Generated link: [{REPO_NAME}-{PR_NUMBER}]({link})"
    pull_request.create_issue_comment(comment_body)

    print("Comment added to the pull request.")

# Call the function to post the comment
post_comment(link)

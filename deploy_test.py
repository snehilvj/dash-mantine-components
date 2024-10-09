import json
import gzip
import base64
from urllib.parse import quote, urlencode
import os

files = []
code = ''
for f in os.listdir('PRs'):
    file_path = os.path.join('PRs', f)
    if f != 'app.py':
        with open(file_path, 'rb') as file:
                files.append(
                    {
                        "name": f,
                        "content": base64.b64encode(file.read()).decode("utf8"),
                        "encoding": "base64"
                    }
                )
    else:
        with open(file_path, 'r') as file:
            code = file.read()

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

print(generate_link(files, code))
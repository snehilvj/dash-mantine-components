"""
This script makes the metadata.json file smaller in order to reduce the package size
"""

import json

file_path = 'dash_mantine_components/metadata.json'

with open(file_path, 'r') as file:
    data = json.load(file)

# Write the compact version (no spaces or line breaks) back to the file
with open(file_path, 'w') as file:
    json.dump(data, file, separators=(',', ':'))

print("JSON file has been compacted.")

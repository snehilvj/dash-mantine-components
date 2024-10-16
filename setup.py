import json
import io
from setuptools import setup


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

def read_req_file(req_type):
    with open(f"requires-{req_type}.txt", encoding="utf-8") as fp:
        requires = (line.strip() for line in fp)
        return [req for req in requires if req and not req.startswith("#")]

setup(
    name=package_name,
    url=package["homepage"],
    version=package["version"],
    author=package["author"],
    author_email="snehilvj@outlook.com",
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    install_requires=read_req_file("install"),
    extras_require={
        "dev": read_req_file("dev"),
    },
    classifiers=[
        "Framework :: Dash",
        "Framework :: Flask",
    ],
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
)

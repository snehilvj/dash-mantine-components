import json
import io
from setuptools import setup


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

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
    install_requires=[],
    classifiers=[
        "Framework :: Dash",
        "Framework :: Flask",
    ],
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
)

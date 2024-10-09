
# Dash Mantine Components Contributing Guide

Dash Mantine welcomes community contributions!

If you have identified a bug or have an idea for a new feature, it's best to start with a GitHub issue. First look at existing issues at https://github.com/plotly/dash-ag-grid/issues to make sure this is not a duplicate. Then create a new issue. Bug reports should be accompanied by a small example app that someone else can copy and run to reproduce the problem.

If you have questions, please ask on the [Dash Community Forum](https://community.plotly.com/). rather than using GitHub issues.


### Developing in this repo

Make sure you have Dash installed with dev and testing extras:
```
pip install dash[dev,testing]
```
Build the component (from the root of this repo):
```
npm i
npm run build
```
Now install the component in development mode:
```
$ pip install -e .
```
In development mode, Python uses the files in this directory when you import the package. So you can write a testing app in another folder, and whenever you change some code and rebuild the component here it will update in your testing app.

### Create a production build

Update the package version in `package.json` and `CHANGELOG.md` and ensure the changelog lists all the important updates. Then reinstall (so `package-lock.json` gets the new version) and rebuild:
```
npm i
npm run build
```

Commit this - either via a PR or directly to the main branch. Then you can create source and wheel distributions in the generated `dist/` folder, after emptying out any previous builds:
```
npm run dist
```
See [PyPA](https://packaging.python.org/guides/distributing-packages-using-setuptools/#packaging-your-project)
for more information. At this point you can test the build. The best way is to make a virtual env in another directory, install the wheel you just built, and run one of the demo apps, something like:
```
cd ../my_test
python -m venv venv
. venv/bin/activate
pip install -e ".[dev]"
```

And run the tests:
```
pytest
```

Create a new distribution with:
```
npm run dist
```

It doesn't need to be tested extensively, just enough to know that the grid loads with no errors and you've built the right version of the code. If the app looks good, use [`twine`](https://pypi.org/project/twine/) to upload these to PyPI:
```
# back in the dash-mantine-components directory
twine upload dist/*
```
Now you can go back to the test directory, install from PyPI, ensure you get the expected version, and test again:
```
pip uninstall dash-mantine-components
pip install dash-mantine-components
python app.py
```

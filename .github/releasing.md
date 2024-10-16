

### Before release:

- [ ] Update Mantine dependency in `package.json`
- [ ] Update Mantine dependency for optional stylesheets in `styles.py`
- [ ] Remove usage/demo apps used for testing
- [ ] `npm install` to install the new dependencies
- [ ] `npm run build` and push updated `package-lock.json`
- [ ] Review and update changelog - include PR numbers and contributor's GitHub username


### Release

On the Master branch:

1. Clean up dist - removes old and temp tarballs:
```
$ rm -rf dist
```

2. Build source distribution.  Note this will exclude metadata.json file which reduces the package size
```
npm run dist

```
3. Test your tarball by copying it into a new environment and installing it locally, for example:
```
pip install dash-mantine-components-0.14.5.tar.gz
```

4. Run the docs with the new release locally

4. Prepare release on the GitHub UI - For more information see [Managing Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
4. When in doubt, do an alpha release first

5. Publish on PyPI
```
$ twine upload dist/*
```

6. Publish on NPM 
```
$ npm publish
```


### After release:

 - [ ] Update dmc-docs.  When the version changes, be sure to run `poetry update` and push the new `poetry.lock` file. The docs deploy automatically on Render
 - [ ] Include new contributors in the docs
 - [ ] Make announcement on Plotly forum and dmc Discord
 
 

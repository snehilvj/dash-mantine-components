

### Before release:

- [ ] Update Mantine dependency in `package.json`
- [ ] Update Mantine dependancy for optional stylesheets in `styles.py`
- [ ] Remove usage/demo apps used for testing
- [ ] `npm run build` and push updated `package-lock.json`
- [ ] Review and update changelog - include PR numbers and contributor's GitHub username


### Release

On the Master branch:

Add tag
```
$ git tag -a 0.14.5 -m "version 0.14.5"
$ git push origin tag 0.14.5
```


1. Clean up dist - removes old and temp tarballs:
```
$ rm -rf dist
```

2. Build source distribution
```
 $ python3 -m build --sdist --wheel

```
3. Test your tarball by copying it into a new environment and installing it locally, for example:
```
pip install dash-mantine-components-0.14.5.tar.gz
```

4. Publish on PyPI
```
$ twine upload dist/*
```

5. Publish on NPM 
```
$ npm publish
```


### After release:

 - [ ] Update docs
 - [ ] Include new contributors in the docs
 - [ ] Make announcement on Plotly forum and dmc Discord
 
 

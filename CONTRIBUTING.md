# Releasing lib

```bash
python setup.py sdist bdist_wheel

twine upload dist/*

rm -rf dist
```

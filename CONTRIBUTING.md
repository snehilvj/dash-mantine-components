
# Contributing to Dash Mantine Components


## Getting Started

### 1. Fork and Clone the Repository

[Fork](https://help.github.com/articles/fork-a-repo/) the project, then clone your fork and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/dash-mantine-components.git

# Navigate to the newly cloned directory
cd dash-mantine-components

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/snehilvj/dash-mantine-components.git
```

### 2. Set Up the Virtual Environment

Set up a Python virtual environment for the project:

```bash
python -m venv venv
source venv/bin/activate  
```

### 3. Install Dependencies

#### Python Development Dependencies

Install the necessary Python packages for development:

```bash
pip install -r requires-dev.txt
pip install -e .
```

#### JavaScript Dependencies

Install the necessary JavaScript dependencies for building components:

```bash
npm install
```

---

## Building the Components

After setting up the environment, you can build the components (for Python, R, and Julia) with:

```bash
npm run build
```

When you add a new component in `src/lib/components`, be sure to **include it in** the `src/lib/index.js` file so it’s exported.

After making changes, build the components again using:

```bash
npm run build
```

---

## Submitting a Pull Request (PR)

1. **Add Your Changes**: 
   - Implement your new feature or bug fix.
   - Ensure your component works by including an example.
   
2. **Raise a PR**:
   - Submit your pull request with a clear description of the changes and how to reproduce them.
   - Make sure to exclude `package-lock.json` and `yarn.lock` unless you have made dependency changes.

3. **Contribution Guidelines**: 
   - Ensure your code follows the existing style and patterns of the project -- unless you would like to suggest a better way!.
   - Keep your PR focused and avoid unrelated changes.
   - Add appropriate tests for your changes.

---

## Testing

We use **Selenium** and **Google Chrome** for testing via [ChromeDriver](https://chromedriver.chromium.org/getting-started). Make sure to install ChromeDriver for your operating system:

- [Mac Instructions](https://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/)
- [Windows Instructions](http://jonathansoma.com/lede/foundations-2018/classes/selenium/selenium-windows-install/)

### Running Tests

We use [pytest](https://docs.pytest.org/en/latest/) for testing. You can run all tests with:

```bash
pytest
```

Or, use `-k` to run tests that match part of a test case name:

```bash
pytest -k <test_case_name>
```

For more details, check out the [Dash Testing Documentation](https://dash.plotly.com/testing) for test case conventions and naming.

### Example Tests

You can find examples in:
- [Dash Mantine Components Tests](https://github.com/snehilvj/dash-mantine-components/tree/master/tests)
- [Dash Core Components Tests](https://github.com/plotly/dash/tree/dev/components/dash-core-components/tests/integration)

---

## Contribution Tips

- **Start Small**: If you’re new to the project, try fixing a bug or improving the documentation to get familiar with the codebase.
- **Communication**: Feel free to comment on issues or PRs to clarify details or discuss new ideas.
- **Collaborate**: Join our [Discord](https://discord.gg/KuJkh4Pyq5) or visit the [Plotly Dash Community Forum](https://community.plotly.com/) to collaborate with the community.

Thank you for contributing to Dash Mantine Components! 🙌

<p align="center">
    <img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-components/master/assets/logo.png" alt="logo" width=300 >
</p>
<p align="center">
    <img src="https://badgen.net/pypi/license/dash-mantine-components">
    <a href="https://pypi.org/project/dash-mantine-components/">
    <img src="https://badgen.net/pypi/v/dash-mantine-components">
    </a>
    <a href="https://discord.gg/KuJkh4Pyq5">
    <img src="https://img.shields.io/badge/Chat%20on-Discord-%235865f2">
    </a>
    <img src="https://static.pepy.tech/personalized-badge/dash-mantine-components?period=total&units=international_system&left_color=grey&right_color=brightgreen&left_text=Downloads">
</p>

Dash Mantine Components is an extensive (70+) Dash components library based on [Mantine](https://mantine.dev/) React Components Library. It makes it easier to create good quality dashboards with very well designed components out of the box.

[Documentation](https://dash-mantine-components.herokuapp.com)

<p align="center">
    <img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-components/master/assets/datepicker.gif">
</p>

### Table of contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [Contributing](#contributing)
- [TODO](#todo)

## Installation

```bash
pip install dash-mantine-components
```

## Quickstart

```python
import dash_mantine_components as dmc
from dash import Dash, Input, Output

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.DatePicker(id="datepicker", format="dddd, MMMM D, YYYY"),
        dmc.Text(id="text"),
        dmc.Button("Click Me!")
    ]
)


@app.callback(Output("text", "children"), Input("datepicker", "date"))
def datepicker(date):
    return date


if __name__ == "__main__":
    app.run_server(debug=True)
```

## Contributing

1. Join our [Discord](https://discord.gg/KuJkh4Pyq5) community.

2. Install virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

3. Install npm dependencies

    ```bash
    npm install
    ```

4. Add your new component in `src/lib/components`. Make sure to include it in the `src/lib/index.js` as well.

5. Ensure that component props are sorted in ascending order. Refer to existing components.

6. Add a line in the CHANGELOG.md under one of these: Added, Changed, Deprecated, Removed, Fixed.

7. Raise a PR, including an example to reproduce the changes contributed by the PR.

## TODO

1. Add more components from Mantine library and enhance already added ones.
2. Add contributing guide.
3. Add testing.
4. Enhance docs.
5. Add lazy loading to the components.

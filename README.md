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

Dash Mantine Components is an extensive (90+) Dash components library based on [Mantine](https://mantine.dev/) React Components Library. It makes it easier to create good quality dashboards with very well designed components out of the box.

[Documentation](https://dash-mantine-components.com)

<p align="center">
    <img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-components/master/assets/datepicker.gif">
</p>

### Table of contents

-   [Installation](#installation)
-   [Quickstart](#quickstart)
-   [Sponsors](#sponsors)
-   [Contributing](#contributing)

## Installation

```bash
pip install dash-mantine-components
```

## Quickstart

```python
from datetime import date

from dash import Dash, Input, Output, callback, html
from dash.exceptions import PreventUpdate

import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.DatePicker(
            id="date-picker",
            label="Start Date",
            description="You can also provide a description",
            minDate=date(2020, 8, 5),
            value=None,
            w=200
        ),
        dmc.Space(h=10),
        dmc.Text(id="selected-date"),
    ]
)


@callback(Output("selected-date", "children"), Input("date-picker", "value"))
def update_output(d):
    prefix = "You have selected: "
    if d:
        return prefix + d
    else:
        raise PreventUpdate


if __name__ == "__main__":
    app.run_server(debug=True)
```

## Sponsors

Thanks to the following people for supporting my efforts on dash-mantine-components.

2. [Ann Marie Ward](https://github.com/AnnMarieW)

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

5. Build the components with the command: `npm run build`.

6. Raise a PR, including an example to reproduce the changes contributed by the PR.

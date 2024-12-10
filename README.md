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


<p align="center">
    <img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-components/master/assets/datepicker.gif">
</p>


## Installation

```bash
pip install dash-mantine-components
```

## Quickstart

```python
from datetime import date

import dash
from dash import Dash, Input, Output, callback, html
from dash.exceptions import PreventUpdate

import dash_mantine_components as dmc

dash._dash_renderer._set_react_version('18.2.0')

app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

app.layout = dmc.MantineProvider(
    [
        dmc.DatePickerInput(
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

## 📚 Documentation 

For detailed information on how to use this project, check out the [Documentation](https://dash-mantine-components.com). You'll find guides, API references, and examples to help you get started!

## 🛠️ Contributing

We welcome all contributions! Feel free to open issues for any bugs or feature requests, and don't hesitate to
comment on existing issues or pull requests. PRs are encouraged! For more details, please check out our [Contributing Guide.](https://github.com/snehilvj/dash-mantine-components/blob/master/CONTRIBUTING.md)

Join our [Discord](https://discord.gg/KuJkh4Pyq5) to connect with other contributors, or visit the [Plotly Dash Community Forum](https://community.plotly.com/)
for discussions and support.


## 📝 Contributing to the Docs

We :heart: contributions to our documentation! It's a fantastic opportunity for first-time contributors since the
project is simply a Dash app built with `dash-mantine-components`. For more details, check out the [dmc-docs GitHub.](https://github.com/snehilvj/dmc-docs)


## 💖 Sponsors

A huge thank you to our current sponsors for supporting this project! 🙏 Your contributions help drive development and improvements.

If you’d like to support this project and help ensure its continued success, consider [becoming a sponsor](https://github.com/sponsors/snehilvj). Your support
is greatly appreciated and helps keep the project growing and thriving!


## ⭐️ Support by Starring the Project
If you find this project helpful, consider giving it a star on GitHub! ⭐️ It helps others discover the project and
motivates us to keep improving it. Your support is greatly appreciated!
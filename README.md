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
import dash
from dash import Dash, Input, Output, callback, html, no_update

import dash_mantine_components as dmc

app = Dash()

app.layout = dmc.MantineProvider(
    [
        dmc.DatePickerInput(
            id="date-picker",
            label="Start Date",
            description="You can also provide a description",
            minDate='2022-08-05',
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
        return no_update


if __name__ == "__main__":
    app.run_server(debug=True)
```

## DataList

Use `DataList` to display label-value pairs with semantic `dl`, `dt`, and `dd`
elements. Compose each `DataListItem` from a `DataListItemLabel` and a
`DataListItemValue`; both accept text or Dash components:

```python
dmc.DataList(
    [
        dmc.DataListItem([
            dmc.DataListItemLabel("Name"),
            dmc.DataListItemValue("John Doe"),
        ]),
        dmc.DataListItem([
            dmc.DataListItemLabel("Email"),
            dmc.DataListItemValue(
                dmc.Anchor("john@example.com", href="mailto:john@example.com")
            ),
        ]),
        dmc.DataListItem([
            dmc.DataListItemLabel("Role"),
            dmc.DataListItemValue(dmc.Badge("Software Engineer")),
        ]),
    ],
    size="sm",
    orientation="horizontal",
    withDivider=True,
    gap="sm",
    labelWidth=120,
)
```

Place the list inside a `MantineProvider`. Set `orientation="vertical"` to stack
labels above values. `size` accepts `"xs"` through `"xl"` (default `"sm"`).
`gap` accepts theme spacing keys, numbers, or CSS lengths (default `"sm"`), and
`labelWidth` accepts a number in pixels or a CSS length (default `120`).
Dividers are off by default. All four components support standard style props,
`className`, `classNames`, `styles`, and `unstyled`. The Styles API selectors are
`root`, `item`, `itemLabel`, and `itemValue`.

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
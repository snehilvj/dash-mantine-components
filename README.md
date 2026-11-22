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

## FloatingWindow

`FloatingWindow` renders a draggable, fixed-position panel. Place it inside a
`MantineProvider`:

```python
dmc.FloatingWindow(
    [
        dmc.Text("Drag this header", className="window-header", fw=700),
        dmc.Text("Floating dashboard content"),
        dmc.FloatingWindowResizeHandle(
            "Resize", pos="absolute", bottom=0, right=0, p=4,
            style={"cursor": "nwse-resize"},
        ),
    ],
    id="floating-window",
    initialPosition={"top": 80, "left": 80},
    dragHandleSelector=".window-header",
    constrainToViewport=True,
    constrainOffset=16,
    dimensions={
        "initialWidth": 320, "initialHeight": 200,
        "minWidth": 200, "minHeight": 120,
        "maxWidth": 600, "maxHeight": 400,
    },
    p="md",
    shadow="md",
    withBorder=True,
)
```

- Set `enabled=False` to disable dragging, or `axis="x"` / `"y"` to lock movement.
- Use `excludeDragHandleSelector` to exclude buttons or inputs from dragging.
- Set `position` from a callback to move the window, for example
  `{"bottom": 20, "right": 20}`. `initialPosition` sets its starting position.
- Read `currentPosition` (`{"x": ..., "y": ...}`) after dragging or a programmatic
  move. Read `currentSize` (`{"width": ..., "height": ...}`) after pointer resizing or
  each keyboard resize. These are output props, not position/size controls.
- `dragging` and `resizing` report pointer interaction start/end. Position and size
  are reported on release to avoid a server callback on every pointer movement.
- The resize handle requires `dimensions` with width and/or height settings.
  Arrow keys resize by 10 pixels; Home/End select minimum/maximum dimensions.
  Resize also respects viewport constraints. The handle is unstyled: provide
  its content, position, and appearance.
- `withinPortal=False` renders inline instead of in a portal. `portalProps`
  accepts a CSS selector `target` and `reuseTargetNode`. The default `zIndex` is
  400. Standard Box, Paper, and Styles API props are supported.

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
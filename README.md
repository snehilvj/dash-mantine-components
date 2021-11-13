# Dash Mantine Components

Dash Mantine Components is a Dash component library based on [Mantine](https://mantine.dev/) React Components Library. It makes it easier to create good quality dashboards with very well designed components out of the box.

## Installation

```
pip install dash-mantine-components
```

## Quickstart

```python
import dash_mantine_components as dmc
from dash import Dash, Input, Output
from datetime import datetime, timedelta

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.DatePicker(
            id="datepicker", format="dddd, MMMM D, YYYY", style={"width": "250px"}
        ),
        dmc.Space(h=20),
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

## TODO:

1. Add more components from Mantine library and enhance already added ones.
2. Create documentation.
3. Support dark theme.
4. Create more examples.
5. Add contributing guide.

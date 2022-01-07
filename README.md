<h1 align="center">dmc</h1>
<h3 align="center">Dash Mantine Components</h3>

<br/>

dash-mantine-components is an extensive (40+) Dash components library based on [Mantine](https://mantine.dev/) React Components Library. It makes it easier to create good quality dashboards with very well designed components out of the box.

[Documentation](https://dash-mantine-components.herokuapp.com)

https://user-images.githubusercontent.com/91216500/144928311-a62db8df-9780-4fa5-95fe-d2593acd3707.mp4

## Table of contents
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Contributing](#contributing)
- [TODO](#todo)

## Installation

```
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
1. Install virtual environment:
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Install npm dependencies
```bash
npm install
```


## TODO

1. Add more components from Mantine library and enhance already added ones.
2. Support dark theme.
3. Add contributing guide.
4. Add testing.

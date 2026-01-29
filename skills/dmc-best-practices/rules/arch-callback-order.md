---
title: Define Callbacks Before app.run()
impact: CRITICAL
impactDescription: Callbacks silently ignored if defined after run()
tags: callbacks, order, setup, app, initialization
---

## Define Callbacks Before app.run()

All callbacks must be registered before calling `app.run()`. Callbacks defined after the server starts will be silently ignored.

**Incorrect (callback after app.run()):**

```python
from dash import Dash, Input, Output, callback
import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = dmc.MantineProvider([
    dmc.Button("Click", id="btn"),
    dmc.Text(id="output"),
])

if __name__ == "__main__":
    app.run(debug=True)  # Server starts here

# This callback is NEVER registered - defined too late
@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    return f"Clicked {n} times"
```

**Correct (callback before app.run()):**

```python
from dash import Dash, Input, Output, callback
import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = dmc.MantineProvider([
    dmc.Button("Click", id="btn"),
    dmc.Text(id="output"),
])

# Callback registered BEFORE app.run()
@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    return f"Clicked {n or 0} times"

if __name__ == "__main__":
    app.run(debug=True)  # Server starts after callbacks registered
```

**Multi-file pattern:**

```python
# app.py
from dash import Dash
from layouts import layout
from callbacks import register_callbacks  # Import callback registration

app = Dash(__name__)
app.layout = layout

register_callbacks(app)  # Register all callbacks

if __name__ == "__main__":
    app.run(debug=True)
```

Reference: <https://dash.plotly.com/basic-callbacks>

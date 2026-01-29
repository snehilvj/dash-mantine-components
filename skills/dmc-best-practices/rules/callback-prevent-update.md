---
title: PreventUpdate vs no_update
impact: HIGH
impactDescription: Wrong choice causes unnecessary updates or blocks needed ones
tags: callbacks, prevent, no_update, outputs, conditional
---

## PreventUpdate vs no_update

`PreventUpdate` blocks ALL outputs from updating. `no_update` selectively skips specific outputs while updating others. Use the right one for your use case.

**Incorrect (PreventUpdate when only some outputs should skip):**

```python
from dash import Input, Output, callback
from dash.exceptions import PreventUpdate

@callback(
    Output("status", "children"),
    Output("data", "children"),
    Input("btn", "n_clicks"),
)
def update(n):
    if not n:
        raise PreventUpdate  # Blocks BOTH outputs

    if n % 2 == 0:
        raise PreventUpdate  # Wanted to skip status, but blocks data too

    return "Updated", fetch_data()
```

**Correct (no_update for selective skipping):**

```python
from dash import Input, Output, callback, no_update

@callback(
    Output("status", "children"),
    Output("data", "children"),
    Input("btn", "n_clicks"),
)
def update(n):
    if not n:
        return no_update, no_update  # Skip both initially

    if n % 2 == 0:
        return no_update, fetch_data()  # Skip status, update data

    return "Updated", fetch_data()  # Update both
```

**When to use PreventUpdate:**

```python
from dash.exceptions import PreventUpdate

@callback(Output("result", "children"), Input("btn", "n_clicks"))
def update(n):
    # Use PreventUpdate when callback should do nothing at all
    if not n:
        raise PreventUpdate

    return process()
```

**When to use no_update:**

```python
from dash import no_update

@callback(
    Output("chart", "figure"),
    Output("error", "children"),
    Input("submit", "n_clicks"),
    State("data", "value"),
)
def update(n, data):
    if not n:
        return no_update, no_update

    try:
        return create_chart(data), no_update  # Update chart, keep error clear
    except Exception as e:
        return no_update, str(e)  # Keep chart, show error
```

**Summary:**

| Scenario | Use |
| --- | --- |
| Skip callback entirely | `raise PreventUpdate` |
| Skip all outputs but cleaner syntax | `return no_update, no_update, ...` |
| Update some outputs, skip others | `return value, no_update, value` |
| Conditional output selection | `no_update` |

Reference: <https://dash.plotly.com/advanced-callbacks#prevent-callback-execution>

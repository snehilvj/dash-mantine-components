---
title: Use State for Non-Triggering Values
impact: CRITICAL
impactDescription: Using Input when State needed causes unwanted callback executions
tags: callbacks, input, state, triggering, performance
---

## Use State for Non-Triggering Values

`Input` triggers the callback when its value changes. `State` reads the current value without triggering. Using Input when you should use State causes unnecessary callback executions and can create circular dependencies.

**Incorrect (Input for form values):**

```python
from dash import Input, Output, callback
import dash_mantine_components as dmc

# PROBLEM: Callback fires on EVERY keystroke in BOTH inputs
@callback(
    Output("result", "children"),
    Input("name", "value"),      # Triggers on every keystroke
    Input("email", "value"),     # Also triggers on every keystroke
    Input("submit", "n_clicks"),
)
def submit_form(name, email, n):
    # This runs hundreds of times while user types
    return process_form(name, email)
```

**Correct (State for form values, Input for submit):**

```python
from dash import Input, Output, State, callback
import dash_mantine_components as dmc

# Only fires when submit button clicked
@callback(
    Output("result", "children"),
    Input("submit", "n_clicks"),   # Only trigger
    State("name", "value"),        # Read without triggering
    State("email", "value"),       # Read without triggering
    prevent_initial_call=True,
)
def submit_form(n, name, email):
    # Only runs when user clicks submit
    return process_form(name, email)
```

**When to use Input vs State:**

| Scenario | Use |
| --- | --- |
| Button clicks | `Input("btn", "n_clicks")` |
| Dropdown selection that should update immediately | `Input("dropdown", "value")` |
| Form fields submitted via button | `State("input", "value")` |
| Reading current value without triggering | `State("component", "prop")` |
| Slider that updates chart in real-time | `Input("slider", "value")` |
| Slider value read only on button click | `State("slider", "value")` |

**Combined pattern:**

```python
@callback(
    Output("chart", "figure"),
    Input("update-btn", "n_clicks"),    # Trigger: button click
    Input("auto-refresh", "checked"),   # Trigger: toggle change
    State("date-range", "value"),       # Read: date selection
    State("filters", "value"),          # Read: filter settings
    prevent_initial_call=True,
)
def update_chart(n, auto_refresh, dates, filters):
    # Only runs on button click or auto-refresh toggle
    return build_chart(dates, filters)
```

Reference: <https://dash.plotly.com/basic-callbacks#state>

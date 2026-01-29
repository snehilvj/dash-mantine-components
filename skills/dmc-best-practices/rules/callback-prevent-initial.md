---
title: Use prevent_initial_call Appropriately
impact: MEDIUM
impactDescription: Skip unnecessary callback on page load
tags: callbacks, initial, prevent, page-load, optimization
---

## Use prevent_initial_call Appropriately

`prevent_initial_call=True` skips callback execution on page load. Use it when the callback should only run in response to user interaction, not on initial render.

**Incorrect (runs on page load unnecessarily):**

```python
from dash import Input, Output, callback

@callback(
    Output("result", "children"),
    Input("submit-btn", "n_clicks"),
)
def submit(n):
    # Runs on page load with n=None
    # May cause errors or show unwanted "submitted" message
    return f"Form submitted {n} times"
# Shows "Form submitted None times" on load
```

**Correct (prevent initial call):**

```python
from dash import Input, Output, callback

@callback(
    Output("result", "children"),
    Input("submit-btn", "n_clicks"),
    prevent_initial_call=True,  # Skip on page load
)
def submit(n):
    # Only runs when button actually clicked
    return f"Form submitted {n} times"
# Shows nothing until user clicks
```

**When to use prevent_initial_call:**

| Scenario | Use prevent_initial_call |
| --- | --- |
| Form submission | Yes |
| Delete/reset actions | Yes |
| Button-triggered operations | Yes |
| Initial data display | No |
| Default selections | No |
| Page initialization | No |

**Without prevent_initial_call (data loading):**

```python
@callback(
    Output("chart", "figure"),
    Input("date-picker", "value"),
)
def update_chart(date):
    # Should run on load to show initial chart
    # Don't use prevent_initial_call here
    return create_chart(date or default_date)
```

**Required with allow_duplicate:**

```python
from dash import Input, Output, callback

# First callback (normal)
@callback(Output("output", "children"), Input("btn-1", "n_clicks"))
def callback1(n):
    return f"Button 1: {n}"

# Second callback targeting same output
@callback(
    Output("output", "children", allow_duplicate=True),
    Input("btn-2", "n_clicks"),
    prevent_initial_call=True,  # REQUIRED with allow_duplicate
)
def callback2(n):
    return f"Button 2: {n}"
```

**Handle None values even with prevent_initial_call:**

```python
@callback(
    Output("result", "children"),
    Input("btn", "n_clicks"),
    prevent_initial_call=True,
)
def update(n):
    # Still good practice to handle None
    # In case callback is somehow triggered without click
    if not n:
        return ""
    return f"Clicked {n} times"
```

Reference: <https://dash.plotly.com/advanced-callbacks#prevent-initial-callback>

---
title: Use ctx.triggered_id Correctly
impact: MEDIUM-HIGH
impactDescription: Determine which input fired the callback
tags: callbacks, context, triggered, inputs, multi-input
---

## Use ctx.triggered_id Correctly

When a callback has multiple inputs, use `ctx.triggered_id` to determine which input triggered the callback. This enables different behavior based on the trigger source.

**Incorrect (not checking trigger source):**

```python
from dash import Input, Output, callback

@callback(
    Output("output", "children"),
    Input("btn-add", "n_clicks"),
    Input("btn-subtract", "n_clicks"),
)
def update(add_clicks, sub_clicks):
    # Can't tell which button was clicked
    # Both inputs provided, unclear which triggered
    return f"Add: {add_clicks}, Sub: {sub_clicks}"
```

**Correct (using ctx.triggered_id):**

```python
from dash import Input, Output, callback, ctx

@callback(
    Output("counter", "children"),
    Input("btn-add", "n_clicks"),
    Input("btn-subtract", "n_clicks"),
    prevent_initial_call=True,
)
def update(add_clicks, sub_clicks):
    triggered = ctx.triggered_id

    if triggered == "btn-add":
        return f"Added! Total adds: {add_clicks}"
    elif triggered == "btn-subtract":
        return f"Subtracted! Total subs: {sub_clicks}"

    return "Unknown trigger"
```

**Handle initial load:**

```python
@callback(
    Output("result", "children"),
    Input("btn-1", "n_clicks"),
    Input("btn-2", "n_clicks"),
)
def update(n1, n2):
    # On initial load, ctx.triggered is empty list
    if not ctx.triggered:
        return "Click a button"

    triggered = ctx.triggered_id
    # Now handle the actual trigger
```

**Pattern-matching callbacks:**

```python
from dash import Input, Output, callback, ctx, ALL

@callback(
    Output("output", "children"),
    Input({"type": "item-btn", "index": ALL}, "n_clicks"),
)
def update(clicks):
    if not ctx.triggered:
        return "No item selected"

    # triggered_id is a dict for pattern-matching
    triggered = ctx.triggered_id  # {"type": "item-btn", "index": 3}
    item_index = triggered["index"]

    return f"Item {item_index} clicked"
```

**Multiple properties from same component:**

```python
@callback(
    Output("result", "children"),
    Input("input", "value"),
    Input("input", "n_blur"),  # Same component, different prop
)
def update(value, n_blur):
    # ctx.triggered_prop_ids gives full info
    # Returns dict like {"input.value": value} or {"input.n_blur": n_blur}
    prop_id = list(ctx.triggered_prop_ids.keys())[0]

    if ".value" in prop_id:
        return f"Value changed: {value}"
    elif ".n_blur" in prop_id:
        return f"Input blurred with value: {value}"
```

**ctx attributes:**

| Attribute | Description |
| --- | --- |
| `ctx.triggered_id` | ID of component that triggered (str or dict) |
| `ctx.triggered` | List of triggered props with values |
| `ctx.triggered_prop_ids` | Dict of triggered prop IDs to values |
| `ctx.inputs` | All input values |
| `ctx.states` | All state values |

Reference: <https://dash.plotly.com/advanced-callbacks#determining-which-input-changed>

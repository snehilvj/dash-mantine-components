---
title: Prevent Circular Callbacks
impact: CRITICAL
impactDescription: Causes infinite loops, crashes browser/server
tags: callbacks, circular, infinite-loop, outputs, inputs
---

## Prevent Circular Callbacks

When a callback output feeds back as an input to the same callback (directly or through a chain), it creates an infinite loop that crashes the browser or server.

**Incorrect (direct circular reference):**

```python
from dash import Input, Output, callback
import dash_mantine_components as dmc

# INFINITE LOOP: counter output feeds back as input
@callback(
    Output("counter", "children"),
    Input("counter", "children"),  # Same as output - CIRCULAR
    Input("btn", "n_clicks"),
)
def update(current, n):
    return int(current or 0) + 1
# Browser freezes, server overwhelmed
```

**Incorrect (indirect circular chain):**

```python
# Callback A: input-a -> output-b
@callback(Output("output-b", "children"), Input("input-a", "value"))
def callback_a(val):
    return val

# Callback B: output-b -> input-a (CIRCULAR CHAIN)
@callback(Output("input-a", "value"), Input("output-b", "children"))
def callback_b(val):
    return val
# A triggers B, B triggers A, infinite loop
```

**Correct (use State for non-triggering values):**

```python
from dash import Input, Output, State, callback
import dash_mantine_components as dmc

@callback(
    Output("counter", "children"),
    Input("btn", "n_clicks"),
    State("counter", "children"),  # State reads without triggering
)
def update(n, current):
    if not n:
        return "0"
    return str(int(current or 0) + 1)
```

**Correct (use dcc.Store for shared state):**

```python
from dash import Input, Output, State, callback, dcc
import dash_mantine_components as dmc

# Layout includes store
dcc.Store(id="shared-data", data={"count": 0})

# Callback 1: updates store
@callback(Output("shared-data", "data"), Input("btn", "n_clicks"))
def update_store(n):
    return {"count": n or 0}

# Callback 2: reads store (no circular dependency)
@callback(Output("display", "children"), Input("shared-data", "data"))
def display_count(data):
    return f"Count: {data['count']}"
```

Reference: <https://dash.plotly.com/advanced-callbacks>

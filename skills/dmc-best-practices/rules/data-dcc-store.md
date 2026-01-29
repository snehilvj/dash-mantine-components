---
title: Use dcc.Store for Client-Side Data
impact: HIGH
impactDescription: Proper data sharing between callbacks without global variables
tags: data, store, client-side, callbacks, state
---

## Use dcc.Store for Client-Side Data

dcc.Store provides client-side data storage for sharing data between callbacks. It's the correct way to maintain state without global variables.

**Incorrect (global variable for shared state):**

```python
# Global variable - DANGEROUS
shared_data = {}

@callback(Output("output1", "children"), Input("btn1", "n_clicks"))
def update1(n):
    shared_data["value"] = n  # Modifies global
    return f"Set: {n}"

@callback(Output("output2", "children"), Input("btn2", "n_clicks"))
def update2(n):
    return f"Got: {shared_data.get('value')}"  # Reads global
# Breaks in production with multiple workers
```

**Correct (dcc.Store for shared state):**

```python
from dash import dcc, Input, Output, State, callback

# Add Store to layout
dcc.Store(id="shared-store", data={"value": None})

@callback(
    Output("shared-store", "data"),
    Output("output1", "children"),
    Input("btn1", "n_clicks"),
    State("shared-store", "data"),
)
def update1(n, store):
    store["value"] = n
    return store, f"Set: {n}"

@callback(
    Output("output2", "children"),
    Input("shared-store", "modified_timestamp"),  # Trigger on store change
    State("shared-store", "data"),
)
def update2(ts, store):
    return f"Got: {store.get('value')}"
```

**Storage types:**

```python
# Memory - cleared on page refresh (default)
dcc.Store(id="memory-store", storage_type="memory")

# Session - cleared when browser tab closes
dcc.Store(id="session-store", storage_type="session")

# Local - persists across sessions (2MB limit)
dcc.Store(id="local-store", storage_type="local")
```

**Pattern: modified_timestamp as Input:**

```python
# Use modified_timestamp to trigger when store updates
@callback(
    Output("display", "children"),
    Input("data-store", "modified_timestamp"),  # Triggers on ANY change
    State("data-store", "data"),  # Read actual data
)
def display_data(ts, data):
    if not data:
        return "No data"
    return format_data(data)
```

**Store size limits:**

- ~2MB in most browsers
- Use server-side caching for larger datasets
- Consider compression for medium datasets

```python
import json
import gzip
import base64

def compress_data(data):
    json_str = json.dumps(data)
    compressed = gzip.compress(json_str.encode())
    return base64.b64encode(compressed).decode()

def decompress_data(compressed):
    decoded = base64.b64decode(compressed)
    decompressed = gzip.decompress(decoded)
    return json.loads(decompressed)
```

Reference: <https://dash.plotly.com/dash-core-components/store>

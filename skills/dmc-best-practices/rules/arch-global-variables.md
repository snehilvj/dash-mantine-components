---
title: Never Modify Global Variables in Callbacks
impact: CRITICAL
impactDescription: Breaks multi-worker deployments, causes data leaks between users
tags: global, variables, state, multi-user, workers, production
---

## Never Modify Global Variables in Callbacks

Modifying global variables in callbacks works in development but breaks in production with multiple workers. Each worker has its own copy of global state, causing inconsistent behavior and potential data leaks between users.

**Incorrect (modifying global variable):**

```python
from dash import Dash, Input, Output, callback
import dash_mantine_components as dmc

app = Dash(__name__)

# Global variable - DANGEROUS
click_count = 0

@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    global click_count
    click_count += 1  # Modifies global state
    return f"Total clicks: {click_count}"
# In production with 4 workers:
# - User A clicks: worker 1 shows 1
# - User B clicks: worker 2 shows 1 (different worker, different state)
# - User A clicks: worker 3 shows 1 (yet another worker)
# - Data inconsistent, users may see each other's data
```

**Correct (use dcc.Store for client-side state):**

```python
from dash import Dash, Input, Output, State, callback, dcc
import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = dmc.MantineProvider([
    dcc.Store(id="click-store", data={"count": 0}),  # Per-user state
    dmc.Button("Click", id="btn"),
    dmc.Text(id="output"),
])

@callback(
    Output("click-store", "data"),
    Output("output", "children"),
    Input("btn", "n_clicks"),
    State("click-store", "data"),
)
def update(n, store):
    if not n:
        return store, f"Total: {store['count']}"
    new_count = store["count"] + 1
    return {"count": new_count}, f"Total: {new_count}"
# Each user has their own store, isolated from others
```

**Correct (use server-side caching with session isolation):**

```python
from flask_caching import Cache
import uuid

cache = Cache(config={"CACHE_TYPE": "redis"})

def get_session_id():
    # Get or create session-specific ID
    if "session_id" not in flask.session:
        flask.session["session_id"] = str(uuid.uuid4())
    return flask.session["session_id"]

@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    session_id = get_session_id()
    cache_key = f"clicks_{session_id}"  # Session-isolated key

    count = cache.get(cache_key) or 0
    count += 1
    cache.set(cache_key, count)

    return f"Total: {count}"
```

Reference: <https://dash.plotly.com/sharing-data-between-callbacks>

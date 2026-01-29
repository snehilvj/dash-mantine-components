---
title: Use Server-Side Caching for Large Data
impact: HIGH
impactDescription: Handles datasets too large for client-side storage
tags: data, caching, server, flask-caching, redis, performance
---

## Use Server-Side Caching for Large Data

For datasets larger than 2MB or expensive computations, use server-side caching with Flask-Caching. Redis is recommended for production multi-worker deployments.

**Incorrect (large data in dcc.Store):**

```python
import pandas as pd
from dash import dcc, callback, Output, Input

# 50MB DataFrame - TOO LARGE for client storage
@callback(Output("store", "data"), Input("load-btn", "n_clicks"))
def load_data(n):
    df = pd.read_csv("large_file.csv")  # 50MB
    return df.to_dict("records")  # Exceeds 2MB limit, fails silently
```

**Correct (server-side caching):**

```python
from flask_caching import Cache
from dash import Dash, callback, Output, Input
import pandas as pd

app = Dash(__name__)

# Configure cache (filesystem for development)
cache = Cache(app.server, config={
    "CACHE_TYPE": "filesystem",
    "CACHE_DIR": ".cache",
    "CACHE_DEFAULT_TIMEOUT": 300,
})

@cache.memoize()
def get_large_dataframe():
    """Cached data loading - runs once, result cached."""
    return pd.read_csv("large_file.csv")

@callback(Output("chart", "figure"), Input("filter", "value"))
def update_chart(filter_val):
    df = get_large_dataframe()  # Returns cached data
    filtered = df[df["category"] == filter_val]
    return create_figure(filtered)
```

**Production setup (Redis):**

```python
cache = Cache(app.server, config={
    "CACHE_TYPE": "redis",
    "CACHE_REDIS_URL": "redis://localhost:6379/0",
    "CACHE_DEFAULT_TIMEOUT": 3600,
})
```

**Cache with parameters:**

```python
@cache.memoize()
def get_filtered_data(category, date_range):
    """Cache key includes all parameters."""
    df = pd.read_csv("data.csv")
    return df[
        (df["category"] == category) &
        (df["date"].between(*date_range))
    ]

@callback(Output("results", "children"), Input("category", "value"), Input("dates", "value"))
def update(category, dates):
    # Each unique (category, dates) combination cached separately
    data = get_filtered_data(category, tuple(dates))
    return format_results(data)
```

**Clear cache programmatically:**

```python
# Clear specific cached function
cache.delete_memoized(get_large_dataframe)

# Clear all cache
cache.clear()
```

**Background data loading:**

```python
from dash.long_callback import DiskcacheLongCallbackManager
import diskcache

cache = diskcache.Cache(".cache")
long_callback_manager = DiskcacheLongCallbackManager(cache)

@app.long_callback(
    Output("results", "children"),
    Input("load-btn", "n_clicks"),
    manager=long_callback_manager,
    running=[(Output("load-btn", "disabled"), True, False)],
)
def load_expensive_data(n):
    # Runs in background, doesn't block server
    return process_large_dataset()
```

Reference: <https://dash.plotly.com/sharing-data-between-callbacks>

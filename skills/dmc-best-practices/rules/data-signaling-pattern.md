---
title: Use Signaling Pattern for Expensive Operations
impact: MEDIUM-HIGH
impactDescription: Compute once, retrieve cached results in multiple callbacks
tags: data, signaling, caching, performance, expensive
---

## Use Signaling Pattern for Expensive Operations

When multiple callbacks need the same expensive computation, use the signaling pattern: one callback computes and caches, others retrieve from cache triggered by a signal.

**Incorrect (duplicate expensive operations):**

```python
from dash import Input, Output, callback

@callback(Output("chart1", "figure"), Input("filters", "value"))
def update_chart1(filters):
    data = expensive_query(filters)  # Runs expensive query
    return create_chart1(data)

@callback(Output("chart2", "figure"), Input("filters", "value"))
def update_chart2(filters):
    data = expensive_query(filters)  # Same expensive query again!
    return create_chart2(data)

@callback(Output("table", "data"), Input("filters", "value"))
def update_table(filters):
    data = expensive_query(filters)  # And again!
    return data
# Query runs 3 times for the same filters
```

**Correct (signaling pattern):**

```python
from dash import dcc, Input, Output, State, callback
from flask_caching import Cache

cache = Cache(config={"CACHE_TYPE": "filesystem", "CACHE_DIR": ".cache"})

# Layout includes signal store
dcc.Store(id="data-signal")

# Step 1: Compute and cache, then signal completion
@callback(
    Output("data-signal", "data"),
    Input("filters", "value"),
)
def compute_data(filters):
    cache_key = f"data_{hash(tuple(filters))}"

    # Compute expensive operation once
    data = expensive_query(filters)
    cache.set(cache_key, data)

    # Return signal with cache key
    return {"cache_key": cache_key, "timestamp": time.time()}

# Step 2: Retrieve from cache when signaled
@callback(
    Output("chart1", "figure"),
    Input("data-signal", "data"),
)
def update_chart1(signal):
    if not signal:
        return {}
    data = cache.get(signal["cache_key"])
    return create_chart1(data)

@callback(
    Output("chart2", "figure"),
    Input("data-signal", "data"),
)
def update_chart2(signal):
    if not signal:
        return {}
    data = cache.get(signal["cache_key"])
    return create_chart2(data)

@callback(
    Output("table", "data"),
    Input("data-signal", "data"),
)
def update_table(signal):
    if not signal:
        return []
    data = cache.get(signal["cache_key"])
    return data
# Query runs once, all callbacks get cached result
```

**Simpler version with memoize:**

```python
@cache.memoize(timeout=300)
def get_filtered_data(filters_tuple):
    """Memoized - returns cached result for same input."""
    return expensive_query(list(filters_tuple))

@callback(Output("chart1", "figure"), Input("filters", "value"))
def update_chart1(filters):
    data = get_filtered_data(tuple(filters))  # Cached after first call
    return create_chart1(data)

@callback(Output("chart2", "figure"), Input("filters", "value"))
def update_chart2(filters):
    data = get_filtered_data(tuple(filters))  # Returns cached
    return create_chart2(data)
# Second callback reuses cached result from first
```

**When to use signaling:**

| Scenario | Pattern |
| --- | --- |
| Same data, multiple views | Signaling |
| Sequential dependency | Signaling |
| Independent computations | Separate caching |
| Real-time updates | Avoid heavy caching |

Reference: <https://dash.plotly.com/sharing-data-between-callbacks#example-3-caching-and-signaling>

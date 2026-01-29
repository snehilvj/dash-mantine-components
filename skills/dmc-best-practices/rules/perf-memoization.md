---
title: Memoize Expensive Functions
impact: MEDIUM-HIGH
impactDescription: Cache repeated computations to avoid redundant work
tags: performance, memoization, caching, lru_cache, optimization
---

## Memoize Expensive Functions

Use `@lru_cache` or `@cache.memoize()` to cache results of expensive functions. This avoids redundant computation when the same inputs are used multiple times.

**Incorrect (no memoization):**

```python
from dash import Input, Output, callback
import pandas as pd

def process_data(category, year):
    """Expensive: loads file, filters, aggregates."""
    df = pd.read_csv("large_file.csv")  # 100MB file
    filtered = df[(df["category"] == category) & (df["year"] == year)]
    return filtered.groupby("month").sum()

@callback(Output("chart", "figure"), Input("category", "value"), Input("year", "value"))
def update(category, year):
    # Same category+year combination recomputes everything
    data = process_data(category, year)
    return create_chart(data)
```

**Correct (with lru_cache):**

```python
from functools import lru_cache
from dash import Input, Output, callback
import pandas as pd

@lru_cache(maxsize=128)
def process_data(category, year):
    """Cached: returns stored result for same inputs."""
    df = pd.read_csv("large_file.csv")
    filtered = df[(df["category"] == category) & (df["year"] == year)]
    return filtered.groupby("month").sum().to_dict()  # Must be hashable

@callback(Output("chart", "figure"), Input("category", "value"), Input("year", "value"))
def update(category, year):
    # Same inputs return cached result instantly
    data = process_data(category, year)
    return create_chart(pd.DataFrame(data))
```

**With Flask-Caching:**

```python
from flask_caching import Cache

cache = Cache(config={"CACHE_TYPE": "filesystem", "CACHE_DIR": ".cache"})

@cache.memoize(timeout=3600)  # Cache for 1 hour
def process_data(category, year):
    """Works with non-hashable returns."""
    df = pd.read_csv("large_file.csv")
    filtered = df[(df["category"] == category) & (df["year"] == year)]
    return filtered.groupby("month").sum()  # DataFrame OK
```

**Memoization requirements:**

| Requirement | lru_cache | cache.memoize |
| --- | --- | --- |
| Hashable args | Yes | Yes (converted) |
| Hashable return | Yes | No |
| TTL support | No | Yes |
| Persistent | No | Yes (with Redis) |
| Multi-worker | No | Yes (with Redis) |

**Convert unhashable args:**

```python
@lru_cache(maxsize=64)
def filter_data(filters_tuple):  # Tuple is hashable
    filters = dict(filters_tuple)  # Convert back to dict
    return process(filters)

# Call with converted args
result = filter_data(tuple(filters.items()))
```

**Clear cache when needed:**

```python
# lru_cache
process_data.cache_clear()

# Flask-Caching
cache.delete_memoized(process_data)
cache.delete_memoized(process_data, "category1", 2024)  # Specific args
```

**Monitor cache effectiveness:**

```python
# lru_cache stats
info = process_data.cache_info()
print(f"Hits: {info.hits}, Misses: {info.misses}, Size: {info.currsize}")
```

Reference: <https://docs.python.org/3/library/functools.html#functools.lru_cache>

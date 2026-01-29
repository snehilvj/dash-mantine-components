---
title: Isolate Cache by Session ID
impact: HIGH
impactDescription: Without isolation, users may see each other's data
tags: data, session, cache, multi-user, security, isolation
---

## Isolate Cache by Session ID

In multi-user applications, cache keys must be isolated by session to prevent data leaks between users. Without isolation, User A may see User B's cached data.

**Incorrect (shared cache key):**

```python
from flask_caching import Cache

cache = Cache(config={"CACHE_TYPE": "redis"})

@cache.memoize()
def get_user_dashboard():
    """DANGEROUS: Same cache key for all users."""
    return fetch_dashboard_data()

@callback(Output("dashboard", "children"), Input("refresh", "n_clicks"))
def refresh(n):
    return get_user_dashboard()  # User A sees User B's dashboard!
```

**Correct (session-isolated cache key):**

```python
from flask_caching import Cache
from flask import session
import uuid

cache = Cache(config={"CACHE_TYPE": "redis"})

def get_session_id():
    """Get or create session-specific identifier."""
    if "session_id" not in session:
        session["session_id"] = str(uuid.uuid4())
    return session["session_id"]

def get_user_dashboard(session_id):
    """Session ID as parameter creates unique cache key."""
    cache_key = f"dashboard_{session_id}"

    cached = cache.get(cache_key)
    if cached:
        return cached

    data = fetch_dashboard_data()
    cache.set(cache_key, data, timeout=300)
    return data

@callback(Output("dashboard", "children"), Input("refresh", "n_clicks"))
def refresh(n):
    session_id = get_session_id()
    return get_user_dashboard(session_id)  # Each user gets own cache
```

**Using memoize with session:**

```python
@cache.memoize()
def get_user_data(session_id, filters):
    """Session ID as first param ensures isolation."""
    # Cache key: get_user_data(session_id, filters)
    return query_database(filters)

@callback(Output("data", "children"), Input("filters", "value"))
def update(filters):
    session_id = get_session_id()
    # Each user's filters cached separately
    return get_user_data(session_id, tuple(filters))
```

**Alternative: User ID from authentication:**

```python
from flask_login import current_user

def get_user_id():
    """Use authenticated user ID if available."""
    if current_user.is_authenticated:
        return str(current_user.id)
    return get_session_id()  # Fallback for anonymous users

@cache.memoize()
def get_personalized_data(user_id):
    return fetch_user_specific_data(user_id)
```

**Clear user-specific cache:**

```python
def clear_user_cache(session_id):
    """Clear all cache entries for a specific user."""
    # With Redis, use pattern matching
    pattern = f"*_{session_id}*"
    for key in cache.cache._read_client.keys(pattern):
        cache.delete(key)
```

**Enable Flask sessions:**

```python
from dash import Dash
import os

app = Dash(__name__)
app.server.secret_key = os.environ.get("SECRET_KEY", os.urandom(24))
```

Reference: <https://dash.plotly.com/sharing-data-between-callbacks#example-3-caching-and-signaling>

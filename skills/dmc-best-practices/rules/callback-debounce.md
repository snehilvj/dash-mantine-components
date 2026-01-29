---
title: Debounce Text Inputs
impact: HIGH
impactDescription: Without debounce, callbacks fire on every keystroke causing server overload
tags: callbacks, debounce, text, input, performance
---

## Debounce Text Inputs

Text inputs trigger callbacks on every keystroke by default. Use debounce to limit callback frequency and reduce server load.

**Incorrect (no debounce):**

```python
from dash import Input, Output, callback
import dash_mantine_components as dmc

dmc.TextInput(id="search", placeholder="Search...")

@callback(Output("results", "children"), Input("search", "value"))
def search(query):
    # Fires on EVERY keystroke: "h", "he", "hel", "hell", "hello"
    # 5 API calls for typing "hello"
    return api_search(query)
```

**Correct (with debounce):**

```python
from dash import Input, Output, callback
import dash_mantine_components as dmc

dmc.TextInput(
    id="search",
    placeholder="Search...",
    debounce=300,  # Wait 300ms after typing stops
)

@callback(Output("results", "children"), Input("search", "value"))
def search(query):
    # Only fires 300ms after user stops typing
    # 1 API call for typing "hello"
    return api_search(query)
```

**Textarea with debounce:**

```python
dmc.Textarea(
    id="content",
    debounce=500,  # 500ms for longer text input
    minRows=4,
)
```

**Debounce values by use case:**

| Use Case | Debounce (ms) |
| --- | --- |
| Search/autocomplete | 200-300 |
| Form validation | 300-500 |
| Long text editing | 500-1000 |
| Real-time preview | 100-200 |

**Alternative: Submit button pattern:**

```python
# No debounce needed - only fires on button click
dmc.TextInput(id="search", placeholder="Search...")
dmc.Button("Search", id="search-btn")

@callback(
    Output("results", "children"),
    Input("search-btn", "n_clicks"),
    State("search", "value"),  # State, not Input
    prevent_initial_call=True,
)
def search(n, query):
    return api_search(query)
```

**NumberInput debounce:**

```python
dmc.NumberInput(
    id="quantity",
    debounce=200,
    min=0,
    max=100,
)
```

Reference: <https://www.dash-mantine-components.com/components/textinput>

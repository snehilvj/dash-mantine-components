---
title: Return JSON-Serializable Values Only
impact: CRITICAL
impactDescription: Non-serializable returns crash callbacks silently
tags: callbacks, json, serialization, return, types
---

## Return JSON-Serializable Values Only

Callbacks must return JSON-serializable values: dict, list, str, int, float, bool, None. Returning Python objects like datetime, Decimal, or custom classes causes silent failures.

**Incorrect (returning datetime):**

```python
from dash import Input, Output, callback
from datetime import datetime

@callback(Output("timestamp", "children"), Input("btn", "n_clicks"))
def update(n):
    return datetime.now()  # NOT JSON-serializable
# Callback fails silently, output never updates
```

**Correct (convert to string):**

```python
from dash import Input, Output, callback
from datetime import datetime

@callback(Output("timestamp", "children"), Input("btn", "n_clicks"))
def update(n):
    return datetime.now().isoformat()  # String is serializable
```

**Incorrect (returning Decimal):**

```python
from decimal import Decimal

@callback(Output("price", "children"), Input("qty", "value"))
def calculate(qty):
    price = Decimal("19.99") * qty
    return price  # Decimal not serializable
```

**Correct (convert Decimal to float or string):**

```python
from decimal import Decimal

@callback(Output("price", "children"), Input("qty", "value"))
def calculate(qty):
    price = Decimal("19.99") * qty
    return float(price)  # Or str(price) for precision
```

**Incorrect (returning pandas DataFrame):**

```python
import pandas as pd

@callback(Output("store", "data"), Input("btn", "n_clicks"))
def fetch_data(n):
    df = pd.read_csv("data.csv")
    return df  # DataFrame not serializable
```

**Correct (convert DataFrame to dict):**

```python
import pandas as pd

@callback(Output("store", "data"), Input("btn", "n_clicks"))
def fetch_data(n):
    df = pd.read_csv("data.csv")
    return df.to_dict("records")  # List of dicts is serializable
```

**Serializable types:**

| Type | Example |
| --- | --- |
| dict | `{"key": "value"}` |
| list | `[1, 2, 3]` |
| str | `"hello"` |
| int | `42` |
| float | `3.14` |
| bool | `True` / `False` |
| None | `None` |

**Non-serializable (convert first):**

| Type | Conversion |
| --- | --- |
| datetime | `.isoformat()` |
| Decimal | `float()` or `str()` |
| DataFrame | `.to_dict("records")` |
| numpy array | `.tolist()` |
| set | `list()` |
| custom class | `asdict()` or `.__dict__` |

Reference: <https://dash.plotly.com/basic-callbacks>

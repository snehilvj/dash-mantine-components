# DMC Best Practices - Complete Reference

> This document is optimized for AI agents and LLMs. It contains the complete, compiled reference for Dash Mantine Components best practices.

## Table of Contents

1. [Architecture (CRITICAL)](#1-architecture-critical)
   - [Wrap Layout in MantineProvider](#wrap-layout-in-mantineprovider)
   - [Define Callbacks Before app.run()](#define-callbacks-before-apprun)
   - [Prevent Circular Callbacks](#prevent-circular-callbacks)
   - [Never Modify Global Variables](#never-modify-global-variables-in-callbacks)

2. [Callbacks (CRITICAL/HIGH)](#2-callbacks-criticalhigh)
   - [Use State for Non-Triggering Values](#use-state-for-non-triggering-values)
   - [Return JSON-Serializable Values Only](#return-json-serializable-values-only)
   - [PreventUpdate vs no_update](#preventupdate-vs-no_update)
   - [Debounce Text Inputs](#debounce-text-inputs)
   - [Use ctx.triggered_id Correctly](#use-ctxtriggered_id-correctly)
   - [Use prevent_initial_call Appropriately](#use-prevent_initial_call-appropriately)

3. [Styling (HIGH/MEDIUM)](#3-styling-highmedium)
   - [Use Static Selectors Only](#use-static-selectors-only)
   - [Limit Style Props to 3-4 Per Component](#limit-style-props-to-3-4-per-component)
   - [Use CSS Media Queries for Responsive](#use-css-media-queries-for-responsive-design)
   - [Prefer CSS Variables Over Hardcoded](#prefer-css-variables-over-hardcoded-values)
   - [Use classNames Over styles Prop](#use-classnames-over-styles-prop)

4. [Data Management (HIGH)](#4-data-management-high)
   - [Use dcc.Store for Client-Side Data](#use-dccstore-for-client-side-data)
   - [Use Server-Side Caching for Large Data](#use-server-side-caching-for-large-data)
   - [Isolate Cache by Session ID](#isolate-cache-by-session-id)
   - [Use Signaling Pattern for Expensive Ops](#use-signaling-pattern-for-expensive-operations)

5. [Performance (MEDIUM-HIGH)](#5-performance-medium-high)
   - [Use Clientside Callbacks for Frequent Updates](#use-clientside-callbacks-for-frequent-updates)
   - [Memoize Expensive Functions](#memoize-expensive-functions)
   - [Use WebGL for Large Scatter Plots](#use-webgl-for-large-scatter-plots)

6. [Forms & Validation (MEDIUM)](#6-forms--validation-medium)
   - [Validate Early, Fail Fast](#validate-early-fail-fast)
   - [Return User-Friendly Error Messages](#return-user-friendly-error-messages)

7. [Theming (MEDIUM)](#7-theming-medium)
   - [Custom Colors Need 10 Shades](#custom-colors-need-10-shades)
   - [Test Both Light and Dark Modes](#test-both-light-and-dark-modes)
   - [Set Component Defaults in Theme](#set-component-defaults-in-theme)

8. [DMC v2.x Migrations (MEDIUM)](#8-dmc-v2x-migrations-medium)
   - [DMC v2.x Breaking Changes](#dmc-v2x-breaking-changes)
   - [Use NotificationContainer Not Provider](#use-notificationcontainer-not-notificationprovider)

9. [Accessibility (MEDIUM)](#9-accessibility-medium)
   - [Always Provide Labels for Inputs](#always-provide-labels-for-form-inputs)

---

## 1. Architecture (CRITICAL)

### Wrap Layout in MantineProvider

**Impact:** CRITICAL - App fails to render without it

All Dash Mantine Components require a MantineProvider wrapper at the root of your layout.

**Incorrect:**

```python
app.layout = dmc.Container([
    dmc.Title("My App"),
    dmc.Button("Click me"),
])
# Error: MantineProvider is required
```

**Correct:**

```python
app.layout = dmc.MantineProvider([
    dmc.Container([
        dmc.Title("My App"),
        dmc.Button("Click me"),
    ])
])
```

---

### Define Callbacks Before app.run()

**Impact:** CRITICAL - Callbacks silently ignored if defined after run()

All callbacks must be registered before calling `app.run()`.

**Incorrect:**

```python
if __name__ == "__main__":
    app.run(debug=True)

# Callback defined AFTER app.run() - NEVER REGISTERED
@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    return f"Clicked {n} times"
```

**Correct:**

```python
@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    return f"Clicked {n or 0} times"

if __name__ == "__main__":
    app.run(debug=True)
```

---

### Prevent Circular Callbacks

**Impact:** CRITICAL - Causes infinite loops, crashes browser/server

When a callback output feeds back as an input, it creates an infinite loop.

**Incorrect:**

```python
@callback(
    Output("counter", "children"),
    Input("counter", "children"),  # Same as output - CIRCULAR
    Input("btn", "n_clicks"),
)
def update(current, n):
    return int(current or 0) + 1
```

**Correct:**

```python
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

---

### Never Modify Global Variables in Callbacks

**Impact:** CRITICAL - Breaks multi-worker deployments, causes data leaks

Each worker has its own copy of global state, causing inconsistent behavior.

**Incorrect:**

```python
click_count = 0  # Global variable

@callback(Output("output", "children"), Input("btn", "n_clicks"))
def update(n):
    global click_count
    click_count += 1  # DANGEROUS
    return f"Total: {click_count}"
```

**Correct:**

```python
# Use dcc.Store instead
dcc.Store(id="click-store", data={"count": 0})

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
```

---

## 2. Callbacks (CRITICAL/HIGH)

### Use State for Non-Triggering Values

**Impact:** CRITICAL - Using Input when State needed causes unwanted executions

`Input` triggers the callback when its value changes. `State` reads without triggering.

**Incorrect:**

```python
@callback(
    Output("result", "children"),
    Input("name", "value"),      # Triggers on every keystroke
    Input("email", "value"),     # Also triggers
    Input("submit", "n_clicks"),
)
def submit_form(name, email, n):
    return process_form(name, email)  # Runs hundreds of times
```

**Correct:**

```python
@callback(
    Output("result", "children"),
    Input("submit", "n_clicks"),   # Only trigger
    State("name", "value"),        # Read without triggering
    State("email", "value"),
    prevent_initial_call=True,
)
def submit_form(n, name, email):
    return process_form(name, email)  # Runs only on submit
```

---

### Return JSON-Serializable Values Only

**Impact:** CRITICAL - Non-serializable returns crash callbacks silently

Callbacks must return: dict, list, str, int, float, bool, None.

**Incorrect:**

```python
from datetime import datetime

@callback(Output("timestamp", "children"), Input("btn", "n_clicks"))
def update(n):
    return datetime.now()  # NOT serializable
```

**Correct:**

```python
@callback(Output("timestamp", "children"), Input("btn", "n_clicks"))
def update(n):
    return datetime.now().isoformat()  # String is serializable
```

**Conversions:**

- datetime → `.isoformat()`
- Decimal → `float()` or `str()`
- DataFrame → `.to_dict("records")`
- numpy array → `.tolist()`

---

### PreventUpdate vs no_update

**Impact:** HIGH - Wrong choice causes unnecessary updates or blocks needed ones

`PreventUpdate` blocks ALL outputs. `no_update` selectively skips specific outputs.

**Incorrect:**

```python
from dash.exceptions import PreventUpdate

@callback(Output("status", "children"), Output("data", "children"), Input("btn", "n_clicks"))
def update(n):
    if n % 2 == 0:
        raise PreventUpdate  # Blocks BOTH outputs
```

**Correct:**

```python
from dash import no_update

@callback(Output("status", "children"), Output("data", "children"), Input("btn", "n_clicks"))
def update(n):
    if n % 2 == 0:
        return no_update, fetch_data()  # Skip status, update data
    return "Updated", fetch_data()
```

---

### Debounce Text Inputs

**Impact:** HIGH - Without debounce, callbacks fire on every keystroke

**Incorrect:**

```python
dmc.TextInput(id="search")

@callback(Output("results", "children"), Input("search", "value"))
def search(query):
    return api_search(query)  # 5 API calls for typing "hello"
```

**Correct:**

```python
dmc.TextInput(id="search", debounce=300)  # Wait 300ms

@callback(Output("results", "children"), Input("search", "value"))
def search(query):
    return api_search(query)  # 1 call after typing stops
```

---

### Use ctx.triggered_id Correctly

**Impact:** MEDIUM-HIGH - Determine which input fired the callback

**Correct:**

```python
from dash import ctx

@callback(
    Output("counter", "children"),
    Input("btn-add", "n_clicks"),
    Input("btn-subtract", "n_clicks"),
    prevent_initial_call=True,
)
def update(add_clicks, sub_clicks):
    triggered = ctx.triggered_id
    if triggered == "btn-add":
        return f"Added! Total: {add_clicks}"
    elif triggered == "btn-subtract":
        return f"Subtracted! Total: {sub_clicks}"
```

---

### Use prevent_initial_call Appropriately

**Impact:** MEDIUM - Skip unnecessary callback on page load

**Correct for button-triggered actions:**

```python
@callback(
    Output("result", "children"),
    Input("submit-btn", "n_clicks"),
    prevent_initial_call=True,  # Skip on page load
)
def submit(n):
    return f"Submitted {n} times"
```

**Don't use for initial data loading:**

```python
@callback(Output("chart", "figure"), Input("date-picker", "value"))
def update_chart(date):
    # Should run on load for initial chart
    return create_chart(date or default_date)
```

---

## 3. Styling (HIGH/MEDIUM)

### Use Static Selectors Only

**Impact:** CRITICAL - Dynamic class selectors break on library updates

**Incorrect:**

```css
.m_77c9d27d { background-color: red; }  /* Breaks on update */
```

**Correct:**

```css
.mantine-Button-root { background-color: red; }  /* Stable */
.mantine-Button-root[data-disabled="true"] { opacity: 0.5; }
```

---

### Limit Style Props to 3-4 Per Component

**Impact:** HIGH - Excessive style props reduce readability

**Incorrect:**

```python
dmc.Card(p="xl", m="md", w=400, h=300, bg="gray.1", c="dark.9", radius="lg", shadow="md")
```

**Correct:**

```python
dmc.Card(p="xl", radius="lg", className="feature-card")
```

```css
.feature-card { width: 400px; height: 300px; /* ... */ }
```

---

### Use CSS Media Queries for Responsive Design

**Impact:** HIGH - More performant than responsive style props

**Incorrect:**

```python
dmc.SimpleGrid(cols={"base": 1, "sm": 2, "md": 3, "lg": 4})
```

**Correct:**

```python
dmc.SimpleGrid(className="responsive-grid")
```

```css
.responsive-grid { grid-template-columns: 1fr; }
@media (min-width: 48em) { .responsive-grid { grid-template-columns: repeat(2, 1fr); } }
```

---

### Prefer CSS Variables Over Hardcoded Values

**Impact:** MEDIUM - Maintains consistency and enables theme changes

**Incorrect:**

```css
.my-card { background-color: #f8f9fa; padding: 16px; }
```

**Correct:**

```css
.my-card {
    background-color: var(--mantine-color-gray-0);
    padding: var(--mantine-spacing-md);
}
```

---

### Use classNames Over styles Prop

**Impact:** MEDIUM - Better maintainability and CSS specificity

**Incorrect:**

```python
dmc.Button("Submit", styles={"root": {"minWidth": "200px"}})
```

**Correct:**

```python
dmc.Button("Submit", classNames={"root": "submit-button"})
```

```css
.submit-button { min-width: 200px; }
.submit-button:hover { background-color: var(--mantine-color-green-7); }
```

---

## 4. Data Management (HIGH)

### Use dcc.Store for Client-Side Data

**Impact:** HIGH - Proper data sharing between callbacks

**Correct:**

```python
dcc.Store(id="shared-store", data={"value": None})

@callback(Output("shared-store", "data"), Input("btn", "n_clicks"), State("shared-store", "data"))
def update(n, store):
    store["value"] = n
    return store

@callback(Output("display", "children"), Input("shared-store", "modified_timestamp"), State("shared-store", "data"))
def display(ts, store):
    return f"Value: {store.get('value')}"
```

---

### Use Server-Side Caching for Large Data

**Impact:** HIGH - Handles datasets too large for client-side

**Correct:**

```python
from flask_caching import Cache

cache = Cache(app.server, config={"CACHE_TYPE": "filesystem", "CACHE_DIR": ".cache"})

@cache.memoize()
def get_large_dataframe():
    return pd.read_csv("large_file.csv")

@callback(Output("chart", "figure"), Input("filter", "value"))
def update(filter_val):
    df = get_large_dataframe()  # Cached
    return create_figure(df[df["category"] == filter_val])
```

---

### Isolate Cache by Session ID

**Impact:** HIGH - Required for multi-user deployments

**Correct:**

```python
def get_session_id():
    if "session_id" not in session:
        session["session_id"] = str(uuid.uuid4())
    return session["session_id"]

def get_user_data(session_id, filters):
    cache_key = f"data_{session_id}_{hash(tuple(filters))}"
    # Each user's data isolated
```

---

### Use Signaling Pattern for Expensive Operations

**Impact:** MEDIUM-HIGH - Compute once, retrieve cached results

**Correct:**

```python
dcc.Store(id="data-signal")

@callback(Output("data-signal", "data"), Input("filters", "value"))
def compute(filters):
    data = expensive_query(filters)
    cache.set(f"data_{hash(tuple(filters))}", data)
    return {"cache_key": f"data_{hash(tuple(filters))}"}

@callback(Output("chart", "figure"), Input("data-signal", "data"))
def update_chart(signal):
    data = cache.get(signal["cache_key"])
    return create_chart(data)
```

---

## 5. Performance (MEDIUM-HIGH)

### Use Clientside Callbacks for Frequent Updates

**Impact:** HIGH - Eliminates server round-trips

**Correct:**

```python
clientside_callback(
    """
    function(n_clicks) {
        if (!n_clicks) return window.dash_clientside.no_update;
        const current = document.documentElement.getAttribute('data-mantine-color-scheme');
        return current === 'light' ? 'dark' : 'light';
    }
    """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle", "n_clicks"),
)
```

---

### Memoize Expensive Functions

**Impact:** MEDIUM-HIGH - Cache repeated computations

**Correct:**

```python
from functools import lru_cache

@lru_cache(maxsize=128)
def process_data(category, year):
    df = pd.read_csv("large_file.csv")
    return df[(df["category"] == category) & (df["year"] == year)].to_dict()
```

---

### Use WebGL for Large Scatter Plots

**Impact:** MEDIUM - Required for 100k+ data points

**Correct:**

```python
import plotly.express as px

fig = px.scatter(df, x="x", y="y", render_mode="webgl")
# Or use go.Scattergl instead of go.Scatter
```

---

## 6. Forms & Validation (MEDIUM)

### Validate Early, Fail Fast

**Impact:** MEDIUM - Collect all errors, show clear feedback

**Correct:**

```python
@callback(
    Output("result", "children"),
    Output("email", "error"),
    Output("password", "error"),
    Input("submit", "n_clicks"),
    State("email", "value"),
    State("password", "value"),
    prevent_initial_call=True,
)
def submit(n, email, password):
    errors = []
    email_error = password_error = ""

    if not email or "@" not in email:
        email_error = "Valid email required"
        errors.append(email_error)
    if not password or len(password) < 8:
        password_error = "Password must be 8+ characters"
        errors.append(password_error)

    if errors:
        return dmc.Alert(children=errors, color="red"), email_error, password_error

    return dmc.Alert("Success!", color="green"), "", ""
```

---

### Return User-Friendly Error Messages

**Impact:** MEDIUM - Log technical details, show helpful messages

**Correct:**

```python
import logging
logger = logging.getLogger(__name__)

@callback(Output("result", "children"), Input("btn", "n_clicks"), prevent_initial_call=True)
def process(n):
    try:
        return dmc.Alert(f"Success: {process_data()}", color="green")
    except ConnectionError as e:
        logger.error(f"API failed: {e}", exc_info=True)
        return dmc.Alert("Unable to connect. Try again later.", color="red")
```

---

## 7. Theming (MEDIUM)

### Custom Colors Need 10 Shades

**Impact:** HIGH - Incomplete palettes cause runtime errors

**Correct:**

```python
theme = {
    "colors": {
        "brand": [
            "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5",
            "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1",
        ],  # Exactly 10 shades (0-9)
    },
    "primaryColor": "brand",
}
```

---

### Test Both Light and Dark Modes

**Impact:** MEDIUM - Ensures consistent appearance

**Correct:**

```python
dmc.MantineProvider(id="mantine-provider", defaultColorScheme="light", children=[...])

# CSS for both modes:
# [data-mantine-color-scheme="dark"] .my-component { ... }
```

---

### Set Component Defaults in Theme

**Impact:** MEDIUM - Centralize styling for consistency

**Correct:**

```python
theme = {
    "components": {
        "Button": {"defaultProps": {"size": "md", "radius": "md"}},
        "TextInput": {"defaultProps": {"size": "md", "radius": "sm"}},
    },
}
# Now all Buttons get size="md" by default
```

---

## 8. DMC v2.x Migrations (MEDIUM)

### DMC v2.x Breaking Changes

**Key changes from v1.x to v2.x:**

| Change | v1.x | v2.x |
| --- | --- | --- |
| DateTimePicker | `timeInputProps={}` | `timePickerProps={}` |
| Carousel | `loop=True` | `emblaOptions={"loop": True}` |
| Image | `flex: 0` default | Add `flex=0` explicitly |
| DatesProvider | `timezone` supported | `timezone` removed |
| Popover.hideDetached | `False` | `True` |

---

### Use NotificationContainer Not NotificationProvider

**Impact:** MEDIUM - NotificationProvider is deprecated

**Incorrect:**

```python
dmc.NotificationProvider(position="top-right")  # DEPRECATED
```

**Correct:**

```python
dmc.NotificationContainer(position="top-right")  # v2.x
```

---

## 9. Accessibility (MEDIUM)

### Always Provide Labels for Form Inputs

**Impact:** MEDIUM - Required for screen readers

**Incorrect:**

```python
dmc.TextInput(id="email", placeholder="Enter email")  # No label
```

**Correct:**

```python
dmc.TextInput(
    id="email",
    label="Email Address",
    placeholder="Enter your email",
    description="We'll never share your email",
    required=True,
)
```

---

## Quick Reference: Top 10 Rules

1. **Wrap layout in MantineProvider** - All DMC components require it
2. **Never modify global variables** in callbacks - Breaks multi-worker deployments
3. **Use State not Input** for values that shouldn't trigger callbacks
4. **Define callbacks before app.run()** - Registration must happen first
5. **Prevent circular callbacks** - Outputs feeding inputs cause infinite loops
6. **Return JSON-serializable values** - Only dict, list, str, number, bool, None
7. **Use static CSS selectors** - Never target `.m_*` dynamic classes
8. **Custom colors need 10 shades** - Exactly 10 (0=lightest, 9=darkest)
9. **Use dcc.Store for client data** - Not global variables
10. **Debounce text inputs** - Limit callback firing on rapid changes

---
title: Use Clientside Callbacks for Frequent Updates
impact: HIGH
impactDescription: Eliminates server round-trips for UI-only operations
tags: performance, clientside, callbacks, javascript, latency
---

## Use Clientside Callbacks for Frequent Updates

Clientside callbacks run in the browser, eliminating server round-trips. Use them for frequent UI updates like theme toggles, form state, and animations.

**Incorrect (server callback for theme toggle):**

```python
from dash import Input, Output, callback

@callback(
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle", "n_clicks"),
)
def toggle_theme(n):
    # Round-trip to server just to toggle a boolean
    return "dark" if n and n % 2 else "light"
# Adds 50-200ms latency on each click
```

**Correct (clientside callback):**

```python
from dash import Input, Output, clientside_callback

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
# Instant response, no server communication
```

**When to use clientside callbacks:**

| Use Case | Why Clientside |
| --- | --- |
| Theme/color scheme toggle | UI-only, frequent |
| Show/hide elements | No data processing |
| Form field validation | Instant feedback |
| Tab switching | No server data needed |
| Animation triggers | Real-time response |
| Counter/timer display | High frequency updates |

**Clientside with multiple outputs:**

```python
clientside_callback(
    """
    function(checked) {
        return [
            checked ? 'block' : 'none',
            checked ? 'Settings visible' : 'Settings hidden'
        ];
    }
    """,
    Output("settings-panel", "style"),
    Output("status-text", "children"),
    Input("show-settings", "checked"),
)
```

**Access callback context:**

```python
clientside_callback(
    """
    function(n1, n2) {
        const triggered = dash_clientside.callback_context.triggered_id;
        if (triggered === 'btn-1') return 'Button 1 clicked';
        if (triggered === 'btn-2') return 'Button 2 clicked';
        return dash_clientside.no_update;
    }
    """,
    Output("output", "children"),
    Input("btn-1", "n_clicks"),
    Input("btn-2", "n_clicks"),
)
```

**Prevent update in clientside:**

```python
clientside_callback(
    """
    function(value) {
        if (!value) {
            return window.dash_clientside.no_update;
        }
        return value.toUpperCase();
    }
    """,
    Output("output", "children"),
    Input("input", "value"),
)
```

**Keep complex logic server-side:**

- Database queries
- Authentication
- Heavy computation
- File I/O
- API calls

Reference: <https://dash.plotly.com/clientside-callbacks>

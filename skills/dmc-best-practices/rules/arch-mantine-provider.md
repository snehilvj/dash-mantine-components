---
title: Wrap Layout in MantineProvider
impact: CRITICAL
impactDescription: App fails to render without it
tags: mantine, provider, layout, setup, required
---

## Wrap Layout in MantineProvider

All Dash Mantine Components require a MantineProvider wrapper at the root of your layout. Without it, components will fail to render or display incorrect styles.

**Incorrect (missing MantineProvider):**

```python
from dash import Dash
import dash_mantine_components as dmc

app = Dash(__name__)

# Components placed directly in layout - WILL FAIL
app.layout = dmc.Container([
    dmc.Title("My App"),
    dmc.Button("Click me"),
])
# Error: MantineProvider is required
```

**Correct (wrapped in MantineProvider):**

```python
from dash import Dash
import dash_mantine_components as dmc

app = Dash(__name__)

# All components wrapped in MantineProvider
app.layout = dmc.MantineProvider([
    dmc.Container([
        dmc.Title("My App"),
        dmc.Button("Click me"),
    ])
])
```

**With theme configuration:**

```python
app.layout = dmc.MantineProvider(
    id="mantine-provider",
    children=[
        dmc.Container([...])
    ],
    theme={
        "primaryColor": "blue",
        "fontFamily": "Inter, sans-serif",
    },
    defaultColorScheme="light",
)
```

Reference: <https://www.dash-mantine-components.com/components/mantineprovider>

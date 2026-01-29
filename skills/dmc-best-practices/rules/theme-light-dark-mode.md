---
title: Test Both Light and Dark Modes
impact: MEDIUM
impactDescription: Ensures consistent appearance across color schemes
tags: theme, light, dark, color-scheme, testing
---

## Test Both Light and Dark Modes

Always test your application in both light and dark modes. Colors, contrasts, and custom styles may look correct in one mode but broken in the other.

**Incorrect (only tested in light mode):**

```python
import dash_mantine_components as dmc

dmc.Card(
    style={"backgroundColor": "#ffffff"},  # Hardcoded white
    children=[
        dmc.Text("Content", style={"color": "#333333"}),  # Hardcoded dark
    ]
)
# In dark mode: white card on dark background looks jarring
# Text might be invisible on some backgrounds
```

**Correct (theme-aware colors):**

```python
import dash_mantine_components as dmc

dmc.Card(
    children=[
        dmc.Text("Content"),  # Uses theme text color automatically
    ]
)
# Automatically adapts to light/dark mode
```

**Setting color scheme:**

```python
# Default to light, allow switching
dmc.MantineProvider(
    id="mantine-provider",
    defaultColorScheme="light",  # Default only
    children=[...]
)

# Force specific scheme (no switching)
dmc.MantineProvider(
    forceColorScheme="dark",  # Always dark
    children=[...]
)
```

**Theme toggle implementation:**

```python
from dash import clientside_callback, Input, Output
import dash_mantine_components as dmc

# Toggle button
dmc.ActionIcon(
    dmc.DashIconify(icon="tabler:sun"),
    id="theme-toggle",
    variant="default",
)

# Clientside callback for instant toggle
clientside_callback(
    """
    function(n) {
        if (!n) return window.dash_clientside.no_update;
        const html = document.documentElement;
        const current = html.getAttribute('data-mantine-color-scheme') || 'light';
        return current === 'light' ? 'dark' : 'light';
    }
    """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle", "n_clicks"),
)
```

**CSS for color scheme:**

```css
/* Target specific color scheme */
[data-mantine-color-scheme="dark"] .my-component {
    border-color: var(--mantine-color-dark-4);
}

[data-mantine-color-scheme="light"] .my-component {
    border-color: var(--mantine-color-gray-3);
}

/* Modern CSS light-dark() function */
.my-component {
    background: light-dark(
        var(--mantine-color-white),
        var(--mantine-color-dark-7)
    );
}
```

**Testing checklist:**

- [ ] Text readable in both modes
- [ ] Sufficient contrast ratios
- [ ] Custom backgrounds adapt
- [ ] Borders visible in both modes
- [ ] Icons/images appropriate for both
- [ ] Charts/graphs readable
- [ ] Form inputs styled correctly
- [ ] Error states visible

**Common issues:**

| Issue | Light Mode | Dark Mode | Fix |
| --- | --- | --- | --- |
| Invisible text | OK | Text disappears | Use theme colors |
| Low contrast | OK | Hard to read | Check contrast ratios |
| Harsh colors | OK | Too bright | Use dimmed variants |
| Lost borders | OK | Border invisible | Use theme border color |

Reference: <https://mantine.dev/theming/color-schemes/>

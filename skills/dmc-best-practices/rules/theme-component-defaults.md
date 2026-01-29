---
title: Set Component Defaults in Theme
impact: MEDIUM
impactDescription: Centralize styling for consistency across the app
tags: theme, defaults, components, consistency, maintainability
---

## Set Component Defaults in Theme

Configure default props for components in the theme instead of repeating them on every instance. This ensures consistency and simplifies maintenance.

**Incorrect (repeating props everywhere):**

```python
import dash_mantine_components as dmc

# Same props repeated on every button
dmc.Button("Save", size="md", radius="md", variant="filled")
dmc.Button("Cancel", size="md", radius="md", variant="outline")
dmc.Button("Delete", size="md", radius="md", variant="filled", color="red")

# Same props on every input
dmc.TextInput(label="Name", size="md", radius="md")
dmc.TextInput(label="Email", size="md", radius="md")
dmc.TextInput(label="Phone", size="md", radius="md")
# Tedious, error-prone, hard to change globally
```

**Correct (centralized theme defaults):**

```python
import dash_mantine_components as dmc

theme = {
    "components": {
        "Button": {
            "defaultProps": {
                "size": "md",
                "radius": "md",
            },
        },
        "TextInput": {
            "defaultProps": {
                "size": "md",
                "radius": "md",
            },
        },
        "Select": {
            "defaultProps": {
                "size": "md",
                "radius": "md",
                "searchable": True,
            },
        },
    },
}

dmc.MantineProvider(theme=theme, children=[
    # Now just use components without repeating defaults
    dmc.Button("Save"),  # Gets size="md", radius="md" automatically
    dmc.Button("Cancel", variant="outline"),  # Override only what differs
    dmc.TextInput(label="Name"),  # Gets defaults automatically
])
```

**Setting default styles:**

```python
theme = {
    "components": {
        "Button": {
            "defaultProps": {
                "size": "md",
            },
            "styles": {
                "root": {
                    "fontWeight": 600,
                },
                "label": {
                    "textTransform": "uppercase",
                },
            },
        },
    },
}
```

**Setting default classNames:**

```python
theme = {
    "components": {
        "Card": {
            "classNames": {
                "root": "app-card",
                "section": "app-card-section",
            },
        },
    },
}
```

```css
/* assets/styles.css */
.app-card {
    transition: transform 0.2s;
}
.app-card:hover {
    transform: translateY(-2px);
}
```

**Common defaults to set:**

```python
theme = {
    "components": {
        # Form inputs
        "TextInput": {"defaultProps": {"size": "md", "radius": "sm"}},
        "Select": {"defaultProps": {"size": "md", "searchable": True}},
        "Textarea": {"defaultProps": {"size": "md", "autosize": True}},

        # Buttons
        "Button": {"defaultProps": {"size": "md", "radius": "md"}},
        "ActionIcon": {"defaultProps": {"variant": "subtle"}},

        # Layout
        "Card": {"defaultProps": {"radius": "md", "withBorder": True}},
        "Modal": {"defaultProps": {"centered": True, "radius": "md"}},

        # Feedback
        "Notification": {"defaultProps": {"radius": "md"}},
        "Alert": {"defaultProps": {"radius": "md"}},
    },
}
```

**Override defaults when needed:**

```python
# Theme sets Button radius="md" by default
# Override for specific instance
dmc.Button("Pill Button", radius="xl")  # This instance uses xl
```

Reference: <https://mantine.dev/theming/default-props/>

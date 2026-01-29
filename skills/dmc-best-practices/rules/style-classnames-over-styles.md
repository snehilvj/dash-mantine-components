---
title: Use classNames Over styles Prop
impact: MEDIUM
impactDescription: Better maintainability and CSS specificity control
tags: styling, classnames, styles, css, maintainability
---

## Use classNames Over styles Prop

The `classNames` prop is preferred over `styles` for component customization. It provides better maintainability, CSS specificity control, and enables hover/focus states.

**Incorrect (inline styles prop):**

```python
import dash_mantine_components as dmc

dmc.Button(
    "Submit",
    styles={
        "root": {
            "backgroundColor": "var(--mantine-color-green-6)",
            "minWidth": "200px",
        },
        "label": {
            "fontWeight": 700,
            "textTransform": "uppercase",
        },
    },
)
# Inline styles can't handle :hover, :focus, media queries
# Harder to maintain, duplicated across components
```

**Correct (classNames with CSS):**

```python
import dash_mantine_components as dmc

dmc.Button(
    "Submit",
    classNames={
        "root": "submit-button",
        "label": "submit-button-label",
    },
)
```

```css
/* assets/styles.css */
.submit-button {
    background-color: var(--mantine-color-green-6);
    min-width: 200px;
}

.submit-button:hover {
    background-color: var(--mantine-color-green-7);
}

.submit-button:active {
    transform: translateY(1px);
}

.submit-button-label {
    font-weight: 700;
    text-transform: uppercase;
}
```

**Component element names:**

```python
# Button elements
classNames={
    "root": "...",       # Outer wrapper
    "inner": "...",      # Inner container
    "label": "...",      # Text content
    "section": "...",    # Left/right sections
    "loader": "...",     # Loading indicator
}

# TextInput elements
classNames={
    "root": "...",       # Outer wrapper
    "wrapper": "...",    # Input wrapper
    "input": "...",      # Actual input element
    "label": "...",      # Label text
    "description": "...", # Description text
    "error": "...",      # Error message
}
```

**When styles prop is acceptable:**

```python
# Dynamic styles based on state
dmc.Box(
    style={"backgroundColor": selected_color},  # Dynamic value
)

# One-off positioning
dmc.Tooltip(
    styles={"tooltip": {"maxWidth": 300}},  # Unique to this instance
)
```

**Global component styling via theme:**

```python
dmc.MantineProvider(
    theme={
        "components": {
            "Button": {
                "classNames": {
                    "root": "app-button",
                    "label": "app-button-label",
                },
            },
        },
    },
)
# All Buttons get these classes automatically
```

**Benefits of classNames:**

| Feature | classNames | styles |
| --- | --- | --- |
| Hover/focus states | Yes | No |
| Media queries | Yes | No |
| CSS animations | Yes | Limited |
| Browser caching | Yes | No |
| Dev tools inspection | Easy | Harder |
| Code reuse | Yes | No |

Reference: <https://mantine.dev/styles/styles-api/>

---
title: Limit Style Props to 3-4 Per Component
impact: HIGH
impactDescription: Excessive style props reduce readability and maintainability
tags: styling, props, css, maintainability, code-quality
---

## Limit Style Props to 3-4 Per Component

Mantine style props (m, p, w, h, c, bg, etc.) are convenient for quick styling, but excessive use reduces code readability. Use CSS files for complex styling.

**Incorrect (too many style props):**

```python
import dash_mantine_components as dmc

dmc.Card(
    children=[...],
    p="xl",
    m="md",
    w=400,
    h=300,
    bg="gray.1",
    c="dark.9",
    radius="lg",
    shadow="md",
    withBorder=True,
    style={"borderColor": "var(--mantine-color-blue-5)"},
    # Hard to read, hard to maintain
)
```

**Correct (limit style props, use CSS for complex styling):**

```python
import dash_mantine_components as dmc

# Component with limited style props
dmc.Card(
    children=[...],
    p="xl",
    radius="lg",
    className="feature-card",  # Complex styles in CSS
)
```

```css
/* assets/styles.css */
.feature-card {
    width: 400px;
    height: 300px;
    background-color: var(--mantine-color-gray-1);
    color: var(--mantine-color-dark-9);
    box-shadow: var(--mantine-shadow-md);
    border: 1px solid var(--mantine-color-blue-5);
}
```

**Acceptable style prop usage (3-4 props):**

```python
# Spacing and sizing - OK
dmc.Container(children=[...], p="md", size="lg")

# Quick layout adjustments - OK
dmc.Group(children=[...], gap="sm", justify="space-between")

# Common patterns - OK
dmc.Button("Submit", size="lg", radius="md", fullWidth=True)
```

**When to use CSS instead:**

- More than 4 style props on one component
- Repeated styling patterns across components
- Complex hover/focus states
- Responsive breakpoints
- Animations and transitions

**Style props reference:**

| Prop | CSS Property | Example |
| --- | --- | --- |
| `m`, `mt`, `mb`, `ml`, `mr`, `mx`, `my` | margin | `m="md"` |
| `p`, `pt`, `pb`, `pl`, `pr`, `px`, `py` | padding | `p="xl"` |
| `w` | width | `w={300}` or `w="100%"` |
| `h` | height | `h={200}` |
| `c` | color | `c="blue.6"` |
| `bg` | background | `bg="gray.1"` |
| `fz` | font-size | `fz="lg"` |
| `fw` | font-weight | `fw={700}` |

Reference: <https://mantine.dev/styles/style-props/>

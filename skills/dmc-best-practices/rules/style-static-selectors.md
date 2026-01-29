---
title: Use Static Selectors Only
impact: CRITICAL
impactDescription: Dynamic class selectors break on library updates
tags: css, selectors, styling, classes, mantine
---

## Use Static Selectors Only

Mantine generates dynamic class names like `.m_77c9d27d` that change between versions. Always use static selectors (`.mantine-*`) or data attributes instead.

**Incorrect (targeting dynamic classes):**

```css
/* assets/styles.css */

/* BREAKS on any DMC update - hash changes */
.m_77c9d27d {
    background-color: red;
}

.m_8d3f4cd2 .m_1a2b3c4d {
    padding: 10px;
}
```

**Correct (using static Mantine selectors):**

```css
/* assets/styles.css */

/* Static selectors - stable across versions */
.mantine-Button-root {
    background-color: red;
}

.mantine-Card-root .mantine-Text-root {
    padding: 10px;
}

/* Component-specific selectors */
.mantine-TextInput-input {
    border-radius: 8px;
}

.mantine-Select-dropdown {
    max-height: 300px;
}
```

**Correct (using data attributes):**

```css
/* Target component states via data attributes */
.mantine-Button-root[data-disabled="true"] {
    opacity: 0.5;
}

.mantine-Button-root[data-loading="true"] {
    cursor: wait;
}

.mantine-Checkbox-input[data-indeterminate="true"] {
    background-color: var(--mantine-color-blue-light);
}
```

**Correct (using classNames prop):**

```python
import dash_mantine_components as dmc

# Add custom class via classNames prop
dmc.Button(
    "Submit",
    classNames={"root": "my-submit-btn", "label": "my-btn-label"}
)
```

```css
/* Target your custom class */
.my-submit-btn {
    min-width: 200px;
}

.my-btn-label {
    font-weight: bold;
}
```

**Finding static selectors:**

1. Inspect element in browser dev tools
2. Look for classes starting with `mantine-`
3. Pattern: `.mantine-{ComponentName}-{element}`

**Common static selectors:**

| Component | Selectors |
| --- | --- |
| Button | `.mantine-Button-root`, `.mantine-Button-label`, `.mantine-Button-inner` |
| TextInput | `.mantine-TextInput-root`, `.mantine-TextInput-input`, `.mantine-TextInput-label` |
| Select | `.mantine-Select-root`, `.mantine-Select-input`, `.mantine-Select-dropdown` |
| Card | `.mantine-Card-root`, `.mantine-Card-section` |
| Modal | `.mantine-Modal-root`, `.mantine-Modal-header`, `.mantine-Modal-body` |

Reference: <https://mantine.dev/styles/styles-api/>

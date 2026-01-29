---
title: Use CSS Media Queries for Responsive Design
impact: HIGH
impactDescription: CSS media queries are more performant than responsive style props
tags: responsive, css, media-queries, performance, breakpoints
---

## Use CSS Media Queries for Responsive Design

CSS media queries are more performant than responsive style props. Responsive props generate CSS for every breakpoint which increases bundle size.

**Incorrect (responsive style props for complex layouts):**

```python
import dash_mantine_components as dmc

dmc.SimpleGrid(
    children=[...],
    cols={"base": 1, "sm": 2, "md": 3, "lg": 4},  # Generates CSS for each
    spacing={"base": "sm", "md": "lg"},
)

dmc.Container(
    children=[...],
    p={"base": "xs", "sm": "sm", "md": "md", "lg": "xl"},  # More generated CSS
    size={"base": "100%", "md": "lg"},
)
# Adds significant CSS to bundle for each responsive prop
```

**Correct (CSS media queries):**

```python
import dash_mantine_components as dmc

dmc.SimpleGrid(
    children=[...],
    className="responsive-grid",
)
```

```css
/* assets/styles.css */
.responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--mantine-spacing-sm);
}

@media (min-width: 48em) {  /* sm: 768px */
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 62em) {  /* md: 992px */
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--mantine-spacing-lg);
    }
}

@media (min-width: 75em) {  /* lg: 1200px */
    .responsive-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

**When responsive props are OK:**

```python
# Simple cases with 1-2 breakpoints - acceptable
dmc.Stack(gap={"base": "sm", "md": "lg"})

# Built-in responsive components - designed for it
dmc.Container(size="lg")  # Responsive by default
```

**Mantine breakpoints:**

| Name | em | px |
| --- | --- | --- |
| xs | 36em | 576px |
| sm | 48em | 768px |
| md | 62em | 992px |
| lg | 75em | 1200px |
| xl | 88em | 1408px |

**Use em units in media queries:**

```css
/* Prefer em for better accessibility (respects user font size) */
@media (min-width: 48em) { ... }

/* Avoid px */
@media (min-width: 768px) { ... }
```

**Visibility helpers:**

```python
# Use hiddenFrom/visibleFrom for show/hide
dmc.Text("Mobile only", hiddenFrom="md")
dmc.Text("Desktop only", visibleFrom="md")
```

Reference: <https://mantine.dev/styles/responsive/>

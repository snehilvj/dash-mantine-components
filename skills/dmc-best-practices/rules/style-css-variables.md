---
title: Prefer CSS Variables Over Hardcoded Values
impact: MEDIUM
impactDescription: Maintains consistency and enables theme changes
tags: css, variables, theming, consistency, maintainability
---

## Prefer CSS Variables Over Hardcoded Values

Use Mantine's CSS variables (`--mantine-*`) instead of hardcoded values. This ensures consistency with the theme and enables automatic light/dark mode support.

**Incorrect (hardcoded values):**

```css
/* assets/styles.css */
.my-card {
    background-color: #f8f9fa;      /* Hardcoded gray */
    border: 1px solid #dee2e6;      /* Hardcoded border */
    border-radius: 8px;             /* Hardcoded radius */
    padding: 16px;                  /* Hardcoded spacing */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.my-button {
    background-color: #228be6;      /* Hardcoded blue */
    color: white;
}
/* Breaks in dark mode, inconsistent with theme changes */
```

**Correct (CSS variables):**

```css
/* assets/styles.css */
.my-card {
    background-color: var(--mantine-color-gray-0);
    border: 1px solid var(--mantine-color-gray-3);
    border-radius: var(--mantine-radius-md);
    padding: var(--mantine-spacing-md);
    box-shadow: var(--mantine-shadow-sm);
}

.my-button {
    background-color: var(--mantine-color-blue-6);
    color: var(--mantine-color-white);
}
/* Adapts to theme, consistent with other components */
```

**Common Mantine CSS variables:**

| Category | Variables |
| --- | --- |
| Colors | `--mantine-color-{name}-{0-9}` |
| Spacing | `--mantine-spacing-{xs,sm,md,lg,xl}` |
| Radius | `--mantine-radius-{xs,sm,md,lg,xl}` |
| Shadows | `--mantine-shadow-{xs,sm,md,lg,xl}` |
| Font sizes | `--mantine-font-size-{xs,sm,md,lg,xl}` |
| Line heights | `--mantine-line-height-{xs,sm,md,lg,xl}` |

**Light/dark mode with CSS variables:**

```css
/* Automatic dark mode support */
.my-component {
    /* Uses theme-appropriate colors automatically */
    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    border-color: var(--mantine-color-default-border);
}

/* Manual dark mode override if needed */
[data-mantine-color-scheme="dark"] .my-component {
    background-color: var(--mantine-color-dark-6);
}
```

**Primary color variables:**

```css
.accent-element {
    /* Uses theme's primary color */
    background-color: var(--mantine-primary-color-filled);
    color: var(--mantine-primary-color-contrast);
}

.accent-hover:hover {
    background-color: var(--mantine-primary-color-filled-hover);
}
```

**Spacing scale:**

| Variable | Default Value |
| --- | --- |
| `--mantine-spacing-xs` | 10px |
| `--mantine-spacing-sm` | 12px |
| `--mantine-spacing-md` | 16px |
| `--mantine-spacing-lg` | 20px |
| `--mantine-spacing-xl` | 32px |

Reference: <https://mantine.dev/styles/css-variables/>

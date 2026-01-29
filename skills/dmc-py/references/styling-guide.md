---
title: DMC Styling Guide
description: Style props, Styles API usage, and CSS best practices for DMC.
tags: styling, style-props, styles-api, css, theming, dmc
---

## DMC Styling Guide

> Complete guide to styling Dash Mantine Components

## Style Props Reference

### Overview

Style props add styles to the **root element** of a component. For nested elements, use **Styles API** instead.

**Basic Usage**:

```python
dmc.Box(
    mx="auto",      # margin-left/right: auto
    maw=400,        # max-width: 400px (converted to rem)
    c="blue.6",     # color: theme.colors.blue[6]
    bg="#fff"       # background: #fff
)
```

### Complete Style Props Table

| Prop | CSS Property | Values | Example |
| --- | --- | --- | --- |
| **Margin** | | | |
| `m` | `margin` | spacing, number, string | `m="md"`, `m={16}` |
| `my` | `margin-top` & `margin-bottom` | spacing, number, string | `my="lg"` |
| `mx` | `margin-left` & `margin-right` | spacing, number, string | `mx="auto"` |
| `mt` | `margin-top` | spacing, number, string | `mt="xs"` |
| `mb` | `margin-bottom` | spacing, number, string | `mb="xl"` |
| `ml` | `margin-left` | spacing, number, string | `ml="md"` |
| `mr` | `margin-right` | spacing, number, string | `mr="sm"` |
| **Padding** | | | |
| `p` | `padding` | spacing, number, string | `p="xl"` |
| `py` | `padding-top` & `padding-bottom` | spacing, number, string | `py="md"` |
| `px` | `padding-left` & `padding-right` | spacing, number, string | `px="lg"` |
| `pt` | `padding-top` | spacing, number, string | `pt="xs"` |
| `pb` | `padding-bottom` | spacing, number, string | `pb="md"` |
| `pl` | `padding-left` | spacing, number, string | `pl="sm"` |
| `pr` | `padding-right` | spacing, number, string | `pr="lg"` |
| **Size** | | | |
| `w` | `width` | number, string | `w={300}`, `w="100%"` |
| `h` | `height` | number, string | `h={200}`, `h="50vh"` |
| `miw` | `min-width` | number, string | `miw={100}` |
| `mih` | `min-height` | number, string | `mih={50}` |
| `maw` | `max-width` | number, string | `maw={600}` |
| `mah` | `max-height` | number, string | `mah={400}` |
| **Typography** | | | |
| `fz` | `font-size` | size (xs-xl), number, string | `fz="lg"`, `fz={18}` |
| `ff` | `font-family` | `text`, `monospace`, `heading`, string | `ff="monospace"` |
| `fw` | `font-weight` | number (100-900), string | `fw={700}`, `fw="bold"` |
| `lts` | `letter-spacing` | number, string | `lts="0.05em"` |
| `ta` | `text-align` | `left`, `center`, `right`, `justify` | `ta="center"` |
| `lh` | `line-height` | size (xs-xl), number, string | `lh="xl"`, `lh={1.5}` |
| `fs` | `font-style` | `normal`, `italic`, `oblique` | `fs="italic"` |
| `tt` | `text-transform` | `capitalize`, `uppercase`, `lowercase` | `tt="uppercase"` |
| `td` | `text-decoration` | `underline`, `line-through`, `none` | `td="underline"` |
| **Color** | | | |
| `c` | `color` | color, shade, CSS value | `c="blue.6"`, `c="#333"` |
| `bg` | `background` | color, shade, CSS value | `bg="gray.0"` |
| `bd` | `border` | border string with color | `bd="1px solid red.6"` |
| `opacity` | `opacity` | number (0-1) | `opacity={0.5}` |
| **Display** | | | |
| `display` | `display` | `block`, `flex`, `inline`, `none`, etc. | `display="flex"` |
| **Position** | | | |
| `pos` | `position` | `static`, `relative`, `absolute`, `fixed` | `pos="relative"` |
| `inset` | `top`, `right`, `bottom`, `left` | number, string | `inset={0}` |
| `top` | `top` | number, string | `top={10}` |
| `left` | `left` | number, string | `left={0}` |
| `bottom` | `bottom` | number, string | `bottom={20}` |
| `right` | `right` | number, string | `right={0}` |
| **Visibility** | | | |
| `hiddenFrom` | responsive hide | breakpoint (xs-xl) | `hiddenFrom="sm"` |
| `visibleFrom` | responsive show | breakpoint (xs-xl) | `visibleFrom="md"` |
| `lightHidden` | hide in light mode | boolean | `lightHidden=True` |
| `darkHidden` | hide in dark mode | boolean | `darkHidden=True` |

### Theme Value References

**Spacing** (m, p, and variants):

```python
dmc.Box(mt="xs")      # theme.spacing.xs
dmc.Box(mt="-md")     # theme.spacing.md * -1 (negative margin)
dmc.Box(mt="auto")    # margin-top: auto
dmc.Box(mt=16)        # 16px converted to rem (1rem)
dmc.Box(mt="5rem")    # 5rem (literal string)
```

**Colors** (c, bg, bd):

```python
dmc.Box(c="blue")           # theme.colors.blue[primaryShade]
dmc.Box(bg="orange.1")      # theme.colors.orange[1]
dmc.Box(bd="1px solid red.6")  # border with theme color
dmc.Box(c="dimmed")         # Special: dimmed text color
dmc.Box(c="bright")         # Special: bright text color
dmc.Box(bg="#EDFEFF")       # CSS color value
dmc.Box(bg="rgba(0, 34, 45, 0.6)")  # RGBA color
```

**Font Size** (fz):

```python
dmc.Text("Text", fz="lg")   # theme.fontSizes.lg
dmc.Text("Text", fz={18})   # 18px converted to rem
dmc.Text("Text", fz="h1")   # Use h1 heading size
```

**Font Family** (ff):

```python
dmc.Text("Text", ff="text")       # theme.fontFamily
dmc.Text("Code", ff="monospace")  # theme.fontFamilyMonospace
dmc.Text("Heading", ff="heading") # theme.headings.fontFamily
```

### Responsive Values

Use dictionaries with breakpoint keys for responsive styling:

```python
dmc.Box(
    w={"base": 200, "sm": 400, "lg": 500},
    py={"base": "xs", "sm": "md", "lg": "xl"},
    bg={"base": "blue.7", "sm": "red.7", "lg": "green.7"},
    c="#fff",
    ta="center"
)
```

**Breakpoint Keys**:

- `base` - Base value (all screen sizes)
- `xs` - 36em (576px) and up
- `sm` - 48em (768px) and up
- `md` - 62em (992px) and up
- `lg` - 75em (1200px) and up
- `xl` - 88em (1408px) and up

**Generated CSS**:

```css
.element {
  width: 12.5rem;  /* base: 200px */
}

@media (min-width: 48em) {  /* sm */
  .element {
    width: 25rem;  /* 400px */
  }
}

@media (min-width: 75em) {  /* lg */
  .element {
    width: 31.25rem;  /* 500px */
  }
}
```

**Note**: Responsive style props are less performant than CSS media queries. Use sparingly.

## Styles API

### Overview

Styles API allows styling **nested elements** inside components using `classNames`, `styles`, or `attributes` props.

### Component Selectors

Each component documents its selectors. Example for `Button`:

| Selector | Static Class | Description |
| --- | --- | --- |
| `root` | `.mantine-Button-root` | Root button element |
| `label` | `.mantine-Button-label` | Button text |
| `section` | `.mantine-Button-section` | Left/right sections |
| `inner` | `.mantine-Button-inner` | Inner container |
| `loader` | `.mantine-Button-loader` | Loading spinner |

### Using `classNames` Prop

Apply custom CSS classes to nested elements:

```python
dmc.Button(
    "Styled Button",
    classNames={
        "root": "my-button-root",
        "label": "my-button-label",
        "section": "my-button-section"
    }
)
```

**CSS File** (in `/assets`):

```css
.my-button-root {
    background-color: navy;
}

.my-button-label {
    color: gold;
    font-weight: 700;
}

.my-button-section {
    color: orange;
}
```

### Using `styles` Prop

Apply inline styles to nested elements:

```python
dmc.Button(
    "Styled Button",
    styles={
        "root": {"backgroundColor": "red", "borderRadius": "8px"},
        "label": {"color": "white", "fontSize": "18px"},
        "inner": {"padding": "8px 16px"}
    }
)
```

**Note**: Inline styles have higher specificity. Use `classNames` for better maintainability.

### Using `attributes` Prop

Add attributes (like `data-*` for testing):

```python
dmc.Button(
    "Test Button",
    attributes={
        "root": {"data-test-id": "submit-button"},
        "label": {"data-test-id": "button-label"}
    }
)
```

### Static CSS Selectors

Target components in CSS files using static selectors:

```css
/* Target all buttons */
.mantine-Button-root {
    font-weight: 500;
}

/* Target specific component */
.mantine-TextInput-input {
    border-color: var(--mantine-color-blue-6);
}

/* Combine with custom classes */
.my-form .mantine-TextInput-label {
    color: navy;
}
```

**Important**: Never use dynamic class names like `.m_77c9d27d` - these change between versions.

### Data Attributes

Components expose state via `data-*` attributes:

**Button Data Attributes**:

- `data-disabled` - When `disabled=True`
- `data-loading` - When `loading=True`
- `data-block` - When `fullWidth=True`
- `data-with-left-section` - When `leftSection` is set
- `data-with-right-section` - When `rightSection` is set

**CSS Targeting**:

```css
/* Style disabled buttons */
.mantine-Button-root[data-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Style loading buttons */
.mantine-Button-root[data-loading="true"] {
    background-color: gray;
}

/* Style left sections */
.mantine-Button-section[data-position="left"] {
    color: orange;
}
```

### Global Styling via Theme

Apply styles to all instances of a component:

```python
theme = {
    "components": {
        "Button": {
            "styles": {
                "root": {"fontWeight": 500},
                "label": {"textTransform": "uppercase"}
            },
            "classNames": {
                "root": "global-button-style"
            }
        },
        "TextInput": {
            "styles": {
                "input": {
                    "borderColor": "var(--mantine-color-blue-4)"
                }
            }
        }
    }
}

app.layout = dmc.MantineProvider(theme=theme, children=[...])
```

### Common Patterns

**Card with Custom Styling**:

```python
dmc.Card(
    [
        dmc.Text("Title", classNames={"root": "card-title"}),
        dmc.Text("Body text", c="dimmed")
    ],
    classNames={"root": "custom-card"},
    styles={"root": {"borderLeft": "4px solid blue"}}
)
```

**Input with Error State**:

```python
dmc.TextInput(
    label="Email",
    error="Invalid email",
    styles={
        "input": {"borderColor": "red"},
        "label": {"color": "red"},
        "error": {"fontSize": "12px"}
    }
)
```

**Dynamic Styling with Callbacks**:

```python
@callback(
    Output("my-input", "styles"),
    Input("submit-btn", "n_clicks"),
    State("my-input", "value")
)
def update_styles(n, value):
    if not value:
        return {
            "input": {"borderColor": "red"},
            "label": {"color": "red"}
        }
    return {
        "input": {"borderColor": "green"},
        "label": {"color": "green"}
    }
```

## CSS Variables

### Overview

All theme values are exposed as CSS variables prefixed with `--mantine-*`.

### Common CSS Variables

**Colors**:

```css
--mantine-color-blue-0        /* Lightest blue */
--mantine-color-blue-6        /* Default blue */
--mantine-color-blue-9        /* Darkest blue */
--mantine-color-white         /* #fff */
--mantine-color-black         /* #000 */
--mantine-color-text          /* Body text color */
--mantine-color-body          /* Body background */
--mantine-color-dimmed        /* Dimmed text */
--mantine-color-bright        /* Bright text */
```

**Typography**:

```css
--mantine-font-family         /* Main font */
--mantine-font-family-monospace  /* Code font */
--mantine-font-family-headings   /* Heading font */
--mantine-font-size-xs        /* 0.75rem */
--mantine-font-size-sm        /* 0.875rem */
--mantine-font-size-md        /* 1rem */
--mantine-font-size-lg        /* 1.125rem */
--mantine-font-size-xl        /* 1.25rem */
--mantine-line-height-xs      /* 1.4 */
--mantine-line-height-md      /* 1.55 */
```

**Spacing**:

```css
--mantine-spacing-xs          /* 0.625rem */
--mantine-spacing-sm          /* 0.75rem */
--mantine-spacing-md          /* 1rem */
--mantine-spacing-lg          /* 1.25rem */
--mantine-spacing-xl          /* 2rem */
```

**Radius**:

```css
--mantine-radius-xs           /* 0.125rem */
--mantine-radius-sm           /* 0.25rem */
--mantine-radius-md           /* 0.5rem */
--mantine-radius-lg           /* 1rem */
--mantine-radius-xl           /* 2rem */
--mantine-radius-default      /* theme.defaultRadius */
```

**Shadows**:

```css
--mantine-shadow-xs
--mantine-shadow-sm
--mantine-shadow-md
--mantine-shadow-lg
--mantine-shadow-xl
```

**Breakpoints**:

```css
--mantine-breakpoint-xs       /* 36em */
--mantine-breakpoint-sm       /* 48em */
--mantine-breakpoint-md       /* 62em */
--mantine-breakpoint-lg       /* 75em */
--mantine-breakpoint-xl       /* 88em */
```

**Primary Color**:

```css
--mantine-primary-color-0 through 9
--mantine-primary-color-filled
--mantine-primary-color-filled-hover
--mantine-primary-color-light
--mantine-primary-color-light-hover
--mantine-primary-color-light-color
```

**Headings**:

```css
--mantine-h1-font-size        /* 2.125rem */
--mantine-h1-line-height      /* 1.3 */
--mantine-h1-font-weight      /* 700 */
/* h2, h3, h4, h5, h6 similar */
```

### Using CSS Variables

**In CSS Files** (`/assets/*.css`):

```css
.my-card {
    background: var(--mantine-color-gray-0);
    color: var(--mantine-color-text);
    padding: var(--mantine-spacing-md);
    border-radius: var(--mantine-radius-md);
    font-family: var(--mantine-font-family);
}

.my-button {
    background: var(--mantine-color-blue-6);
    color: var(--mantine-color-white);
}

.my-heading {
    font-size: var(--mantine-h2-font-size);
    line-height: var(--mantine-h2-line-height);
}
```

**In Component `style` Prop**:

```python
dmc.Card(
    style={
        "backgroundColor": "var(--mantine-color-blue-1)",
        "color": "var(--mantine-color-blue-9)",
        "padding": "var(--mantine-spacing-lg)",
        "borderRadius": "var(--mantine-radius-md)"
    }
)
```

**In Component `styles` Prop**:

```python
dmc.Button(
    "Styled",
    styles={
        "root": {
            "backgroundColor": "var(--mantine-color-red-6)",
            "fontSize": "var(--mantine-font-size-lg)"
        }
    }
)
```

### Custom Color Variants

For each theme color, variant-specific variables are generated:

```css
/* Filled variant */
--mantine-color-blue-filled
--mantine-color-blue-filled-hover

/* Light variant */
--mantine-color-blue-light
--mantine-color-blue-light-hover
--mantine-color-blue-light-color

/* Outline variant */
--mantine-color-blue-outline
--mantine-color-blue-outline-hover
```

**Usage**:

```css
.custom-button {
    background: var(--mantine-color-blue-filled);
}

.custom-button:hover {
    background: var(--mantine-color-blue-filled-hover);
}
```

## Responsive Styling

### hiddenFrom / visibleFrom Props

Hide/show components at specific breakpoints:

```python
# Hidden on sm screens and larger
dmc.Button("Mobile Only", hiddenFrom="sm")

# Visible only on md screens and larger
dmc.Button("Desktop Only", visibleFrom="md")

# Complex responsive layout
dmc.Group([
    dmc.Button("Small", hiddenFrom="md"),
    dmc.Button("Medium", visibleFrom="md", hiddenFrom="lg"),
    dmc.Button("Large", visibleFrom="lg")
])
```

**CSS Classes** (for custom components):

```python
html.Div("Hidden from md", className="mantine-hidden-from-md")
html.Div("Visible from xl", className="mantine-visible-from-xl")
```

### Media Queries in CSS

```css
/* Base styles */
.responsive-card {
    padding: var(--mantine-spacing-sm);
    font-size: var(--mantine-font-size-sm);
}

/* Tablet and up */
@media (min-width: 48em) {  /* sm breakpoint */
    .responsive-card {
        padding: var(--mantine-spacing-md);
        font-size: var(--mantine-font-size-md);
    }
}

/* Desktop and up */
@media (min-width: 75em) {  /* lg breakpoint */
    .responsive-card {
        padding: var(--mantine-spacing-lg);
        font-size: var(--mantine-font-size-lg);
    }
}
```

**Use `em` units** for media queries (not `px` or `rem`) for better accessibility.

### Container Queries

Modern alternative to media queries:

```css
.container {
    container-type: inline-size;
}

.card {
    background: var(--mantine-color-blue-filled);
}

@container (max-width: 500px) {
    .card {
        background: var(--mantine-color-red-filled);
    }
}

@container (max-width: 300px) {
    .card {
        background: var(--mantine-color-green-filled);
    }
}
```

**Note**: CSS variables don't work in container queries; use `px` units instead.

## Advanced Styling Techniques

### Pseudo-classes and Pseudo-elements

Use CSS files for pseudo-selectors (not available in `styles` prop):

```css
.mantine-Button-root:hover {
    transform: scale(1.05);
}

.mantine-Button-root:active {
    transform: scale(0.95);
}

.mantine-TextInput-input:focus {
    border-color: var(--mantine-color-blue-6);
    box-shadow: 0 0 0 3px var(--mantine-color-blue-1);
}

.mantine-Card-root::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--mantine-color-blue-6);
}
```

### Combining Multiple Techniques

```python
# Component definition
dmc.Card(
    [
        dmc.Title("Card Title", order=3),
        dmc.Text("Card content", c="dimmed")
    ],
    id="my-card",
    className="feature-card",
    classNames={"root": "card-custom"},
    styles={
        "root": {
            "borderLeft": "4px solid var(--mantine-color-blue-6)"
        }
    },
    p="lg",
    radius="md",
    withBorder=True
)
```

**CSS**:

```css
/* Global card styles */
.mantine-Card-root {
    transition: all 0.2s;
}

/* Custom class */
.feature-card {
    max-width: 400px;
}

/* Styles API class */
.card-custom {
    box-shadow: var(--mantine-shadow-md);
}

.card-custom:hover {
    transform: translateY(-4px);
    box-shadow: var(--mantine-shadow-xl);
}
```

### Light/Dark Mode Styling

```css
/* Light mode */
.custom-element {
    background: var(--mantine-color-gray-0);
    color: var(--mantine-color-gray-9);
}

/* Dark mode */
[data-mantine-color-scheme='dark'] .custom-element {
    background: var(--mantine-color-dark-6);
    color: var(--mantine-color-dark-0);
}

/* Using light-dark() function (modern browsers) */
.element {
    background: light-dark(white, black);
    color: light-dark(#333, #f0f0f0);
}
```

## Best Practices

1. **Limit style props to 3-4 per component** - Use CSS files for complex styling
2. **Use `classNames` over `styles`** - Better maintainability and performance
3. **Leverage theme values** - Use spacing scale, colors, etc. for consistency
4. **Prefer CSS variables** - More flexible than hardcoded values
5. **Use static selectors** - Never target dynamic classes like `.m_77c9d27d`
6. **Responsive: CSS > Style Props** - Media queries are more performant
7. **Component defaults via theme** - Set global defaults in theme.components
8. **Data attributes for state** - Use `data-*` attributes for conditional styling
9. **Test both color schemes** - Ensure styles work in light and dark mode
10. **Keep specificity low** - Avoid `!important`, use proper selector hierarchy

## Common Styling Patterns

**Form Spacing**:

```python
dmc.Stack([
    dmc.TextInput(label="Name"),
    dmc.TextInput(label="Email"),
    dmc.Textarea(label="Message")
], gap="md")
```

**Card Layout**:

```python
dmc.Card([
    dmc.Image(src="...", h=160),
    dmc.Stack([
        dmc.Title("Title", order=3),
        dmc.Text("Description", c="dimmed", size="sm")
    ], p="md", gap="xs")
], withBorder=True, radius="md", shadow="sm")
```

**Centered Content**:

```python
dmc.Center(
    dmc.Stack([
        dmc.Title("Welcome", order=1, ta="center"),
        dmc.Button("Get Started")
    ], align="center", gap="md"),
    h="100vh"
)
```

**Responsive Grid**:

```python
dmc.SimpleGrid(
    cols={"base": 1, "sm": 2, "lg": 4},
    spacing={"base": "md", "lg": "xl"},
    children=[...]
)
```

**Sticky Header**:

```python
dmc.AppShell(
    header=dmc.AppShellHeader(
        dmc.Group([...], justify="space-between", h="100%", px="md"),
        height=60
    ),
    children=[...]
)
```

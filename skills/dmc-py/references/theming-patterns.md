---
title: DMC Theming Patterns
description: MantineProvider setup, theme configuration, and color scheme patterns.
tags: theming, mantineprovider, colors, typography, color-scheme, dmc
---

## DMC Theming Patterns

> Complete guide to theming Dash Mantine Components

## MantineProvider Setup

### Basic Setup

**Required**: Wrap your app layout with a single MantineProvider

```python
import dash_mantine_components as dmc
from dash import Dash

app = Dash(__name__)

app.layout = dmc.MantineProvider(
    children=[
        # Your app content here
    ]
)
```

### With Theme Configuration

```python
app.layout = dmc.MantineProvider(
    theme={
        "primaryColor": "indigo",
        "fontFamily": "'Inter', sans-serif",
        "defaultRadius": "md",
    },
    children=[
        # Your app content
    ]
)
```

### MantineProvider Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | component(s) | - | Your application content |
| `theme` | dict | default theme | Theme override object |
| `forceColorScheme` | `'light'` or `'dark'` | - | Force specific color scheme |
| `defaultColorScheme` | `'light'`, `'dark'`, `'auto'` | `'light'` | Default scheme when not forced |
| `withCssVariables` | boolean | `True` | Include CSS variables |
| `withGlobalClasses` | boolean | `True` | Include global classes for responsive props |
| `withStaticClasses` | boolean | `True` | Include static classes (e.g., `.mantine-Button-root`) |
| `classNamesPrefix` | string | `'mantine'` | Prefix for static classes |

## Theme Object Structure

### Complete Theme Example

```python
theme = {
    # Colors
    "primaryColor": "blue",
    "primaryShade": {"light": 6, "dark": 8},
    "colors": {
        "customBlue": [
            "#E7F5FF", "#D0EBFF", "#A5D8FF", "#74C0FC", "#4DABF7",
            "#339AF0", "#228BE6", "#1C7ED6", "#1971C2", "#1864AB"
        ]
    },

    # Typography
    "fontFamily": "'Inter', -apple-system, sans-serif",
    "fontFamilyMonospace": "'Fira Code', monospace",
    "fontSizes": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "md": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem"
    },
    "lineHeights": {
        "xs": "1.4",
        "sm": "1.45",
        "md": "1.55",
        "lg": "1.6",
        "xl": "1.65"
    },
    "headings": {
        "fontFamily": "'Montserrat', sans-serif",
        "fontWeight": "700",
        "sizes": {
            "h1": {"fontSize": "2.125rem", "lineHeight": "1.3"},
            "h2": {"fontSize": "1.625rem", "lineHeight": "1.35"}
        }
    },

    # Spacing & Layout
    "spacing": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "md": "1rem",
        "lg": "1.25rem",
        "xl": "2rem"
    },
    "radius": {
        "xs": "0.125rem",
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "1rem",
        "xl": "2rem"
    },
    "defaultRadius": "sm",

    # Shadows
    "shadows": {
        "xs": "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        "sm": "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 10px 15px -5px",
        "md": "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 20px 25px -5px",
        "lg": "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 28px 23px -7px",
        "xl": "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 36px 28px -7px"
    },

    # Responsive Breakpoints
    "breakpoints": {
        "xs": "36em",  # 576px
        "sm": "48em",  # 768px
        "md": "62em",  # 992px
        "lg": "75em",  # 1200px
        "xl": "88em"   # 1408px
    },

    # Appearance
    "white": "#fff",
    "black": "#000",
    "autoContrast": False,
    "luminanceThreshold": 0.3,
    "cursorType": "default",  # or "pointer"
    "focusRing": "auto",      # auto, always, never

    # Component Defaults
    "components": {
        "Button": {
            "defaultProps": {
                "color": "blue",
                "variant": "filled"
            }
        }
    },

    # Custom Properties
    "other": {
        "customValue": "anything"
    }
}
```

### Theme Property Reference

| Property | Type | Description |
| --- | --- | --- |
| **Colors** | | |
| `primaryColor` | string | Key from `colors` dict, default: `"blue"` |
| `primaryShade` | number or dict | Shade index or `{"light": 6, "dark": 8}` |
| `colors` | dict | Color palettes with 10 shades each |
| `white` | string | White color value, default: `"#fff"` |
| `black` | string | Black color value, default: `"#000"` |
| **Typography** | | |
| `fontFamily` | string | Main font family |
| `fontFamilyMonospace` | string | Monospace font family |
| `fontSizes` | dict | Font size scale (xs-xl) |
| `lineHeights` | dict | Line height scale (xs-xl) |
| `headings` | dict | Heading configuration (h1-h6) |
| **Spacing** | | |
| `spacing` | dict | Spacing scale (xs-xl) |
| `radius` | dict | Border radius scale (xs-xl) |
| `defaultRadius` | string or number | Default border radius |
| `shadows` | dict | Box shadow scale (xs-xl) |
| **Layout** | | |
| `breakpoints` | dict | Responsive breakpoints in em units |
| **Behavior** | | |
| `scale` | number | rem unit scale, default: `1` (16px) |
| `focusRing` | string | Focus ring mode: `"auto"`, `"always"`, `"never"` |
| `cursorType` | string | Cursor for interactive elements: `"default"`, `"pointer"` |
| `autoContrast` | boolean | Auto text color for contrast |
| `luminanceThreshold` | number | Threshold for autoContrast (0-1) |
| `respectReducedMotion` | boolean | Respect OS motion settings |
| **Advanced** | | |
| `components` | dict | Component-specific overrides |
| `other` | dict | Custom properties |

## Color System

### Default Color Palette

DMC includes these colors by default (each with 10 shades, 0-9):

- `dark`, `gray`, `red`, `pink`, `grape`, `violet`, `indigo`
- `blue`, `cyan`, `teal`, `green`, `lime`, `yellow`, `orange`

### Color Shades

Each color has 10 shades (0 = lightest, 9 = darkest):

```python
# Access in code
color = dmc.DEFAULT_THEME["colors"]["blue"][6]  # "#228be6"

# Use in components
dmc.Button("Button", color="blue")      # Uses primaryShade
dmc.Button("Button", color="blue.6")    # Specific shade
dmc.Button("Button", color="#228be6")   # CSS color
```

### Adding Custom Colors

Colors must have exactly 10 shades. Use [Mantine Color Generator](https://mantine.dev/colors-generator/):

```python
theme = {
    "colors": {
        "brand": [
            "#F2F8FF",  # 0 - lightest
            "#D9E9FF",
            "#B8D4FF",
            "#91B8FF",
            "#6A9BFF",
            "#4A7FFF",  # 5
            "#2D68FF",  # 6 - default shade
            "#1D55E6",
            "#0E42CC",
            "#0031B3"   # 9 - darkest
        ],
        # Override default colors
        "blue": ["#E9EDFC", "#C1CCF6", "..."]  # 10 colors
    },
    "primaryColor": "brand"  # Use custom color as primary
}
```

### Color Formats Supported

- **HEX**: `#fff`, `#ffffff`
- **RGB**: `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`
- **HSL**: `hsl(0, 0%, 100%)`, `hsla(0, 0%, 100%, 0.5)`
- **OKLCH**: `oklch(96.27% 0.0217 238.66)`, `oklch(96.27% 0.0217 238.66 / 0.5)`

### Primary Color Configuration

```python
theme = {
    "primaryColor": "indigo",  # Must be key in colors dict
    "primaryShade": 6,         # Single shade for both modes
    # OR
    "primaryShade": {
        "light": 6,  # Shade in light mode
        "dark": 8    # Shade in dark mode
    }
}
```

### Color Prop Usage

The `color` prop accepts:

1. **Theme color name**: `"blue"`, `"red"` → uses primaryShade
2. **Color with shade**: `"blue.5"`, `"red.7"` → specific shade
3. **CSS value**: `"#1D72FE"`, `"rgba(0,0,0,0.5)"`

```python
# All valid
dmc.Button("Primary", color="cyan")
dmc.Button("Shade", color="blue.5")
dmc.Button("CSS", color="#1D72FE")
dmc.Badge("Label", color="rgba(0, 100, 200, 0.5)")
```

## Light/Dark Mode

### Force Color Scheme

```python
app.layout = dmc.MantineProvider(
    forceColorScheme="dark",  # Always dark
    children=[...]
)
```

### Default Color Scheme

```python
app.layout = dmc.MantineProvider(
    defaultColorScheme="dark",  # Default when not set by user
    children=[...]
)
```

### Theme Switch Component

#### Method 1: ActionIcon Toggle

```python
from dash import Input, Output, clientside_callback
from dash_iconify import DashIconify

theme_toggle = dmc.ActionIcon(
    [
        dmc.Paper(DashIconify(icon="radix-icons:sun", width=25), darkHidden=True),
        dmc.Paper(DashIconify(icon="radix-icons:moon", width=25), lightHidden=True),
    ],
    variant="transparent",
    color="yellow",
    id="color-scheme-toggle",
    size="lg",
)

clientside_callback(
    """
    (n) => {
        document.documentElement.setAttribute(
            'data-mantine-color-scheme',
            (n % 2) ? 'dark' : 'light'
        );
        return window.dash_clientside.no_update
    }
    """,
    Output("color-scheme-toggle", "id"),
    Input("color-scheme-toggle", "n_clicks"),
)
```

#### Method 2: Switch with Persistence

```python
from dash_iconify import DashIconify

theme_switch = dmc.Switch(
    offLabel=DashIconify(icon="radix-icons:sun", width=15),
    onLabel=DashIconify(icon="radix-icons:moon", width=15),
    id="color-scheme-switch",
    persistence=True,  # Remember selection
    color="grey",
)

clientside_callback(
    """
    (switchOn) => {
       document.documentElement.setAttribute(
           'data-mantine-color-scheme',
           switchOn ? 'dark' : 'light'
       );
       return window.dash_clientside.no_update
    }
    """,
    Output("color-scheme-switch", "id"),
    Input("color-scheme-switch", "checked"),
)
```

### Light/Dark Mode in CSS

The color scheme sets `data-mantine-color-scheme` attribute on `<html>`:

**CSS Selectors**:

```css
/* Light mode only */
.my-class {
    background-color: white;
}

/* Dark mode only */
[data-mantine-color-scheme='dark'] .my-class {
    background-color: #1a1a1a;
}
```

**light-dark() Function** (modern browsers):

```css
.element {
    background-color: light-dark(white, black);
    color: light-dark(#333, #f0f0f0);
}
```

**In Component Styles**:

```python
dmc.Box(
    style={
        "backgroundColor": "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))"
    }
)
```

**CSS Variables**:

```css
:root {
    --my-bg: white;
    --my-text: #333;
}

:root[data-mantine-color-scheme="dark"] {
    --my-bg: #1a1a1a;
    --my-text: #f0f0f0;
}

.element {
    background: var(--my-bg);
    color: var(--my-text);
}
```

## Component Defaults via Theme

### Default Props

Set default props for all instances of a component:

```python
theme = {
    "components": {
        "Button": {
            "defaultProps": {
                "color": "cyan",
                "variant": "outline",
                "size": "md"
            }
        },
        "TextInput": {
            "defaultProps": {
                "size": "md",
                "radius": "md"
            }
        }
    }
}

app.layout = dmc.MantineProvider(theme=theme, children=[
    dmc.Button("Default Button"),  # Uses cyan, outline, md
    dmc.Button("Custom", color="red"),  # Overrides to red
])
```

### Custom Variants

Add new variants to components:

**CSS File** (in `/assets`):

```css
.custom-button-variants {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='success'] {
    background: linear-gradient(45deg, #2ecc71, #27ae60);
    color: white;
  }
}
```

**Python**:

```python
theme = {
    "components": {
        "Button": {
            "classNames": {"root": "custom-button-variants"}
        }
    }
}

# Now use the custom variants
dmc.Button("Delete", variant="danger")
dmc.Button("Save", variant="success")
```

### Custom Sizes

```python
theme = {
    "components": {
        "Button": {
            "sizes": {
                "xxs": "1.5rem",
                "xxl": "4rem"
            }
        }
    }
}

dmc.Button("Tiny", size="xxs")
dmc.Button("Huge", size="xxl")
```

### Global Styles via Styles API

Apply styles to all instances:

```python
theme = {
    "components": {
        "Button": {
            "styles": {
                "root": {"fontWeight": 500},
                "label": {"textTransform": "uppercase"}
            }
        },
        "Card": {
            "styles": {
                "root": {"backgroundColor": "var(--mantine-color-gray-0)"}
            }
        }
    }
}
```

## Typography Configuration

### Font Families

```python
theme = {
    # Main text font
    "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",

    # Code/monospace font
    "fontFamilyMonospace": "'Fira Code', 'Consolas', monospace",

    # Heading font
    "headings": {
        "fontFamily": "'Montserrat', sans-serif",
    }
}
```

**With System Font Fallback**:

```python
import dash_mantine_components as dmc

theme = {
    "fontFamily": f"'Roboto', {dmc.DEFAULT_THEME['fontFamily']}"
}
```

### Font Sizes

```python
theme = {
    "fontSizes": {
        "xs": "0.75rem",   # 12px
        "sm": "0.875rem",  # 14px
        "md": "1rem",      # 16px
        "lg": "1.125rem",  # 18px
        "xl": "1.25rem"    # 20px
    }
}

# Use in components
dmc.Text("Small", fz="xs")
dmc.Text("Large", fz="xl")
```

### Headings

```python
theme = {
    "headings": {
        "fontFamily": "'Montserrat', sans-serif",
        "fontWeight": "700",
        "textWrap": "wrap",  # or "nowrap", "balance"
        "sizes": {
            "h1": {
                "fontSize": "2.5rem",
                "lineHeight": "1.2",
                "fontWeight": "800"
            },
            "h2": {
                "fontSize": "2rem",
                "lineHeight": "1.3"
            },
            "h3": {"fontSize": "1.75rem"},
            "h4": {"fontSize": "1.5rem"},
            "h5": {"fontSize": "1.25rem"},
            "h6": {"fontSize": "1rem"}
        }
    }
}

# Usage
dmc.Title("Heading", order=1)  # Uses h1 styles
dmc.Title("Subheading", order=2)  # Uses h2 styles
```

### Line Heights

```python
theme = {
    "lineHeights": {
        "xs": "1.4",
        "sm": "1.45",
        "md": "1.55",
        "lg": "1.6",
        "xl": "1.65"
    }
}

dmc.Text("Text with custom line height", lh="xl")
```

## Spacing & Layout

### Spacing Scale

```python
theme = {
    "spacing": {
        "xs": "0.5rem",   # 8px
        "sm": "0.75rem",  # 12px
        "md": "1rem",     # 16px
        "lg": "1.5rem",   # 24px
        "xl": "2rem"      # 32px
    }
}

# Use in style props
dmc.Box(mt="md", p="lg")  # margin-top: 1rem, padding: 1.5rem
```

### Border Radius

```python
theme = {
    "radius": {
        "xs": "0.125rem",  # 2px
        "sm": "0.25rem",   # 4px
        "md": "0.5rem",    # 8px
        "lg": "1rem",      # 16px
        "xl": "2rem"       # 32px
    },
    "defaultRadius": "md"  # Default for all components
}

dmc.Button("Rounded", radius="xl")
dmc.Paper(radius="lg")
```

### Responsive Breakpoints

```python
theme = {
    "breakpoints": {
        "xs": "36em",  # 576px
        "sm": "48em",  # 768px
        "md": "62em",  # 992px
        "lg": "75em",  # 1200px
        "xl": "88em"   # 1408px
    }
}

# Use in responsive props
dmc.Grid.Col(span={"base": 12, "sm": 6, "lg": 4})
dmc.Box(w={"base": "100%", "md": "50%", "lg": "33%"})
```

### Shadows

```python
theme = {
    "shadows": {
        "xs": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "sm": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "md": "0 4px 8px rgba(0, 0, 0, 0.1)",
        "lg": "0 8px 16px rgba(0, 0, 0, 0.15)",
        "xl": "0 16px 32px rgba(0, 0, 0, 0.2)"
    }
}

dmc.Card(shadow="md")
dmc.Paper(shadow="xl")
```

## Advanced Theming

### Auto Contrast

Automatically adjust text color for contrast:

```python
theme = {
    "autoContrast": True,  # Enable globally
    "luminanceThreshold": 0.3  # Threshold for light/dark text
}

# Component override
dmc.Button("High Contrast", color="lime.4", autoContrast=True)
```

### Focus Ring

```python
theme = {
    "focusRing": "auto"  # auto, always, never
}

# auto - visible on keyboard navigation only (recommended)
# always - visible on click and keyboard
# never - never visible (not accessible)
```

### Custom Focus Ring

```python
theme = {
    "focusClassName": "custom-focus"
}
```

**CSS**:

```css
.custom-focus:focus {
    outline: 2px solid var(--mantine-color-blue-6);
    outline-offset: 3px;
}
```

### Default Gradient

```python
theme = {
    "defaultGradient": {
        "from": "orange",
        "to": "red",
        "deg": 45
    }
}

dmc.Button("Gradient", variant="gradient")  # Uses default
dmc.Button("Custom", variant="gradient", gradient={"from": "blue", "to": "cyan"})
```

### Custom Properties

Store custom values in theme:

```python
theme = {
    "other": {
        "brandColor": "#FF6B35",
        "maxContentWidth": "1200px",
        "headerHeight": 60
    }
}

# Access in code
max_width = dmc.DEFAULT_THEME["other"]["maxContentWidth"]
```

## Accessing Default Theme

```python
import dash_mantine_components as dmc

# Full default theme
default_theme = dmc.DEFAULT_THEME

# Access specific values
primary_color = dmc.DEFAULT_THEME["primaryColor"]
blue_shades = dmc.DEFAULT_THEME["colors"]["blue"]
spacing_md = dmc.DEFAULT_THEME["spacing"]["md"]
```

## Common Theming Patterns

### Brand Color System

```python
theme = {
    "colors": {
        "brand": ["#EEF6FF", "...", "#003D82"]  # 10 shades
    },
    "primaryColor": "brand",
    "primaryShade": {"light": 6, "dark": 7},
    "components": {
        "Button": {
            "defaultProps": {"color": "brand"}
        }
    }
}
```

### Minimal/Clean Theme

```python
theme = {
    "defaultRadius": "xs",
    "shadows": {
        "xs": "0 1px 2px rgba(0,0,0,0.05)",
        "sm": "0 2px 4px rgba(0,0,0,0.05)",
        "md": "0 4px 8px rgba(0,0,0,0.05)"
    },
    "components": {
        "Button": {"defaultProps": {"variant": "subtle"}},
        "Card": {"defaultProps": {"withBorder": True, "shadow": "none"}}
    }
}
```

### Playful/Rounded Theme

```python
theme = {
    "defaultRadius": "xl",
    "primaryColor": "grape",
    "fontFamily": "'Quicksand', sans-serif",
    "components": {
        "Button": {
            "defaultProps": {"size": "lg", "radius": "xl"}
        }
    }
}
```

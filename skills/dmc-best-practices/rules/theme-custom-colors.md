---
title: Custom Colors Need 10 Shades
impact: HIGH
impactDescription: Incomplete color palettes cause runtime errors
tags: theme, colors, palette, customization, mantine
---

## Custom Colors Need 10 Shades

Custom colors in Mantine must have exactly 10 shades (indices 0-9). Incomplete palettes cause components to fail when accessing missing shades.

**Incorrect (incomplete palette):**

```python
import dash_mantine_components as dmc

dmc.MantineProvider(
    theme={
        "colors": {
            "brand": ["#E3F2FD", "#2196F3", "#0D47A1"],  # Only 3 colors
        },
        "primaryColor": "brand",
    },
    children=[...]
)
# Error: Cannot read properties of undefined (reading '6')
# Component tries to access brand.6 which doesn't exist
```

**Correct (full 10-shade palette):**

```python
import dash_mantine_components as dmc

dmc.MantineProvider(
    theme={
        "colors": {
            "brand": [
                "#E3F2FD",  # 0 - lightest
                "#BBDEFB",  # 1
                "#90CAF9",  # 2
                "#64B5F6",  # 3
                "#42A5F5",  # 4
                "#2196F3",  # 5
                "#1E88E5",  # 6 - default for buttons
                "#1976D2",  # 7
                "#1565C0",  # 8
                "#0D47A1",  # 9 - darkest
            ],
        },
        "primaryColor": "brand",
    },
    children=[...]
)
```

**Use Mantine Color Generator:**

Visit <https://mantine.dev/colors-generator/> to generate a complete 10-shade palette from a single color.

**Shade usage:**

| Shade | Light Mode Usage | Dark Mode Usage |
| --- | --- | --- |
| 0-2 | Backgrounds, hover | Text on dark bg |
| 3-4 | Borders, dividers | Secondary elements |
| 5-6 | Primary actions | Primary actions |
| 7-8 | Hover states | Backgrounds |
| 9 | Text, emphasis | Lightest backgrounds |

**Set different primary shades for light/dark:**

```python
theme = {
    "colors": {"brand": [...]},  # 10 shades
    "primaryColor": "brand",
    "primaryShade": {"light": 6, "dark": 8},  # Different shades per scheme
}
```

**Using custom color in components:**

```python
# Reference by name and shade
dmc.Button("Click", color="brand")  # Uses primaryShade
dmc.Button("Click", color="brand.7")  # Explicit shade
dmc.Text("Hello", c="brand.9")  # Text color
dmc.Box(bg="brand.0")  # Background
```

**Extending built-in colors:**

```python
theme = {
    "colors": {
        # Override specific shades of built-in color
        "blue": [
            "#E7F5FF",
            "#D0EBFF",
            "#A5D8FF",
            "#74C0FC",
            "#4DABF7",
            "#339AF0",
            "#228BE6",
            "#1C7ED6",
            "#1971C2",
            "#1864AB",
        ],
    },
}
```

Reference: <https://mantine.dev/theming/colors/>

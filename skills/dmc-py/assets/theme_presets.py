"""Dash Mantine Components - Theme Presets

Pre-built theme configurations and utilities:
1. LIGHT_THEME - Complete light theme configuration
2. DARK_THEME - Complete dark theme configuration
3. BRANDED_THEME - Custom brand color example
4. Component default overrides
5. Helper utilities for theme generation

Usage:
    from theme_presets import LIGHT_THEME, DARK_THEME

    app.layout = dmc.MantineProvider(
        theme=LIGHT_THEME,
        children=[...]
    )
"""

# ============================================================================
# COMPLETE THEME CONFIGURATIONS
# ============================================================================

LIGHT_THEME = {
    "colorScheme": "light",
    "primaryColor": "blue",
    "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "fontFamilyMonospace": "'Fira Code', 'Courier New', monospace",
    "defaultRadius": "md",
    "colors": {
        "brand": [
            "#e3f2fd",
            "#bbdefb",
            "#90caf9",
            "#64b5f6",
            "#42a5f5",
            "#2196f3",  # Base color
            "#1e88e5",
            "#1976d2",
            "#1565c0",
            "#0d47a1",
        ],
    },
    "shadows": {
        "xs": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "sm": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },
    "headings": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "fontWeight": "600",
        "sizes": {
            "h1": {"fontSize": "2.5rem", "lineHeight": "1.2"},
            "h2": {"fontSize": "2rem", "lineHeight": "1.3"},
            "h3": {"fontSize": "1.75rem", "lineHeight": "1.4"},
            "h4": {"fontSize": "1.5rem", "lineHeight": "1.5"},
            "h5": {"fontSize": "1.25rem", "lineHeight": "1.5"},
            "h6": {"fontSize": "1rem", "lineHeight": "1.5"},
        },
    },
    "spacing": {
        "xs": "0.625rem",  # 10px
        "sm": "0.75rem",  # 12px
        "md": "1rem",  # 16px
        "lg": "1.25rem",  # 20px
        "xl": "1.5rem",  # 24px
    },
}

DARK_THEME = {
    "colorScheme": "dark",
    "primaryColor": "blue",
    "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "fontFamilyMonospace": "'Fira Code', 'Courier New', monospace",
    "defaultRadius": "md",
    "colors": {
        "dark": [
            "#C1C2C5",
            "#A6A7AB",
            "#909296",
            "#5c5f66",
            "#373A40",
            "#2C2E33",
            "#25262b",  # Base background
            "#1A1B1E",
            "#141517",
            "#101113",
        ],
        "brand": [
            "#e3f2fd",
            "#bbdefb",
            "#90caf9",
            "#64b5f6",
            "#42a5f5",
            "#2196f3",  # Base color
            "#1e88e5",
            "#1976d2",
            "#1565c0",
            "#0d47a1",
        ],
    },
    "shadows": {
        "xs": "0 1px 2px 0 rgb(0 0 0 / 0.25)",
        "sm": "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.35), 0 2px 4px -2px rgb(0 0 0 / 0.35)",
        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
        "xl": "0 20px 25px -5px rgb(0 0 0 / 0.45), 0 8px 10px -6px rgb(0 0 0 / 0.45)",
    },
    "headings": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "fontWeight": "600",
        "sizes": {
            "h1": {"fontSize": "2.5rem", "lineHeight": "1.2"},
            "h2": {"fontSize": "2rem", "lineHeight": "1.3"},
            "h3": {"fontSize": "1.75rem", "lineHeight": "1.4"},
            "h4": {"fontSize": "1.5rem", "lineHeight": "1.5"},
            "h5": {"fontSize": "1.25rem", "lineHeight": "1.5"},
            "h6": {"fontSize": "1rem", "lineHeight": "1.5"},
        },
    },
    "spacing": {
        "xs": "0.625rem",  # 10px
        "sm": "0.75rem",  # 12px
        "md": "1rem",  # 16px
        "lg": "1.25rem",  # 20px
        "xl": "1.5rem",  # 24px
    },
}

# Custom branded theme example
BRANDED_THEME = {
    **LIGHT_THEME,
    "primaryColor": "brand",
    "colors": {
        **LIGHT_THEME["colors"],
        "brand": [
            "#f0f4ff",
            "#d9e2ff",
            "#b3c3ff",
            "#8da5ff",
            "#6687ff",
            "#4169e1",  # Royal Blue - base
            "#3457c9",
            "#2845b1",
            "#1c3399",
            "#102181",
        ],
    },
}

# ============================================================================
# COMPONENT DEFAULT OVERRIDES
# ============================================================================

COMPONENT_DEFAULTS = {
    "Button": {
        "radius": "md",
        "variant": "filled",
        "size": "md",
    },
    "TextInput": {
        "radius": "md",
        "size": "md",
    },
    "Select": {
        "radius": "md",
        "size": "md",
        "searchable": True,
        "clearable": True,
    },
    "Card": {
        "withBorder": True,
        "shadow": "sm",
        "radius": "md",
        "padding": "lg",
    },
    "Modal": {
        "centered": True,
        "radius": "md",
        "overlayProps": {"backgroundOpacity": 0.55, "blur": 3},
    },
    "Notification": {
        "radius": "md",
        "autoClose": 5000,
    },
}

# ============================================================================
# HELPER UTILITIES
# ============================================================================


def generate_color_palette(hex_color: str) -> list[str]:
    """Generate a 10-shade color palette from a single hex color.

    Uses a simple algorithm to create lighter and darker shades.
    For production, consider using a proper color library like coloraide.

    Args:
        hex_color: Base color in hex format (e.g., "#4169e1")

    Returns:
        List of 10 hex colors from lightest to darkest

    Example:
        >>> palette = generate_color_palette("#4169e1")
        >>> print(palette[5])  # Base color
        '#4169e1'
    """
    # Remove '#' if present
    hex_color = hex_color.lstrip("#")

    # Convert to RGB
    r, g, b = int(hex_color[0:2], 16), int(hex_color[2:4], 16), int(hex_color[4:6], 16)

    def adjust_lightness(r: int, g: int, b: int, factor: float) -> str:
        """Adjust color lightness by factor."""
        if factor > 1:  # Lighter
            r = int(r + (255 - r) * (factor - 1))
            g = int(g + (255 - g) * (factor - 1))
            b = int(b + (255 - b) * (factor - 1))
        else:  # Darker
            r, g, b = int(r * factor), int(g * factor), int(b * factor)

        # Clamp values
        r, g, b = max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b))
        return f"#{r:02x}{g:02x}{b:02x}"

    # Generate palette: lighter shades -> base -> darker shades
    palette = [
        adjust_lightness(r, g, b, 1.8),  # 0 - lightest
        adjust_lightness(r, g, b, 1.6),  # 1
        adjust_lightness(r, g, b, 1.4),  # 2
        adjust_lightness(r, g, b, 1.2),  # 3
        adjust_lightness(r, g, b, 1.1),  # 4
        f"#{hex_color}",  # 5 - base color
        adjust_lightness(r, g, b, 0.9),  # 6
        adjust_lightness(r, g, b, 0.8),  # 7
        adjust_lightness(r, g, b, 0.7),  # 8
        adjust_lightness(r, g, b, 0.6),  # 9 - darkest
    ]

    return palette


def create_theme(
    base_color: str,
    color_scheme: str = "light",
    font_family: str = None,
) -> dict:
    """Create a custom theme from a base color.

    Args:
        base_color: Primary brand color in hex format
        color_scheme: 'light' or 'dark'
        font_family: Optional custom font family

    Returns:
        Complete theme dictionary for MantineProvider

    Example:
        >>> custom_theme = create_theme("#ff6b6b", "dark", "Roboto")
        >>> app.layout = dmc.MantineProvider(theme=custom_theme, children=[...])
    """
    base_theme = DARK_THEME if color_scheme == "dark" else LIGHT_THEME

    theme = {
        **base_theme,
        "primaryColor": "brand",
        "colors": {
            **base_theme["colors"],
            "brand": generate_color_palette(base_color),
        },
    }

    if font_family:
        theme["fontFamily"] = font_family
        theme["headings"]["fontFamily"] = font_family

    return theme


# ============================================================================
# EXAMPLE USAGE
# ============================================================================

if __name__ == "__main__":
    import dash_mantine_components as dmc
    from dash import Dash
    from dash_iconify import DashIconify

    app = Dash(__name__)

    # Use a pre-built theme
    app.layout = dmc.MantineProvider(
        theme=LIGHT_THEME,
        children=[
            dmc.Container(
                size="lg",
                py="xl",
                children=[
                    dmc.Stack(
                        gap="md",
                        children=[
                            dmc.Title("Theme Presets Demo", order=1),
                            # Show all color shades
                            dmc.Card(
                                withBorder=True,
                                shadow="sm",
                                radius="md",
                                p="xl",
                                children=[
                                    dmc.Text(
                                        "Brand Color Palette",
                                        fw=500,
                                        size="lg",
                                        mb="md",
                                    ),
                                    dmc.Group(
                                        gap="xs",
                                        children=[
                                            dmc.Paper(
                                                h=50,
                                                w=50,
                                                style={"backgroundColor": color},
                                                withBorder=True,
                                            )
                                            for color in LIGHT_THEME["colors"]["brand"]
                                        ],
                                    ),
                                ],
                            ),
                            # Component examples with default overrides
                            dmc.Card(
                                **COMPONENT_DEFAULTS["Card"],
                                children=[
                                    dmc.Stack(
                                        gap="md",
                                        children=[
                                            dmc.Text(
                                                "Components with Default Overrides",
                                                fw=500,
                                                size="lg",
                                            ),
                                            dmc.TextInput(
                                                **COMPONENT_DEFAULTS["TextInput"],
                                                label="Text Input",
                                                placeholder="With default radius & size",
                                            ),
                                            dmc.Select(
                                                **COMPONENT_DEFAULTS["Select"],
                                                label="Select",
                                                placeholder="With default props",
                                                data=[
                                                    "Option 1",
                                                    "Option 2",
                                                    "Option 3",
                                                ],
                                            ),
                                            dmc.Button(
                                                **COMPONENT_DEFAULTS["Button"],
                                                children="Styled Button",
                                                leftSection=DashIconify(
                                                    icon="radix-icons:check"
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            # Custom theme example
                            dmc.Card(
                                withBorder=True,
                                shadow="sm",
                                radius="md",
                                p="xl",
                                children=[
                                    dmc.Text(
                                        "Custom Theme Generation",
                                        fw=500,
                                        size="lg",
                                        mb="md",
                                    ),
                                    dmc.Code(
                                        """
custom_theme = create_theme(
    base_color="#ff6b6b",
    color_scheme="dark",
    font_family="Roboto"
)
                                        """,
                                        block=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            ),
        ],
    )

    app.run(debug=True, port=8050)

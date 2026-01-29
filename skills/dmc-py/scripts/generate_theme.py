#!/usr/bin/env python3
"""DMC Theme Generator - Generate Mantine theme dictionaries

Usage:
    generate_theme.py [options]

Options:
    --primary-color NAME|HEX  Primary color (default: blue)
    --font-family FONT        Custom font family
    --radius xs|sm|md|lg|xl   Default radius (default: md)
    --output json|python      Output format (default: python)
"""

import argparse
import json
import re
import sys
from typing import Literal

# Mantine default colors
MANTINE_COLORS = {
    "blue": [
        "#e7f5ff",
        "#d0ebff",
        "#a5d8ff",
        "#74c0fc",
        "#4dabf7",
        "#339af0",
        "#228be6",
        "#1c7ed6",
        "#1971c2",
        "#1864ab",
    ],
    "red": [
        "#fff5f5",
        "#ffe3e3",
        "#ffc9c9",
        "#ffa8a8",
        "#ff8787",
        "#ff6b6b",
        "#fa5252",
        "#f03e3e",
        "#e03131",
        "#c92a2a",
    ],
    "green": [
        "#ebfbee",
        "#d3f9d8",
        "#b2f2bb",
        "#8ce99a",
        "#69db7c",
        "#51cf66",
        "#40c057",
        "#37b24d",
        "#2f9e44",
        "#2b8a3e",
    ],
    "yellow": [
        "#fff9db",
        "#fff3bf",
        "#ffec99",
        "#ffe066",
        "#ffd43b",
        "#fcc419",
        "#fab005",
        "#f59f00",
        "#f08c00",
        "#e67700",
    ],
    "orange": [
        "#fff4e6",
        "#ffe8cc",
        "#ffd8a8",
        "#ffc078",
        "#ffa94d",
        "#ff922b",
        "#fd7e14",
        "#f76707",
        "#e8590c",
        "#d9480f",
    ],
    "purple": [
        "#f8f0fc",
        "#f3d9fa",
        "#eebefa",
        "#e599f7",
        "#da77f2",
        "#cc5de8",
        "#be4bdb",
        "#ae3ec9",
        "#9c36b5",
        "#862e9c",
    ],
    "pink": [
        "#fff0f6",
        "#ffdeeb",
        "#fcc2d7",
        "#faa2c1",
        "#f783ac",
        "#f06595",
        "#e64980",
        "#d6336c",
        "#c2255c",
        "#a61e4d",
    ],
    "teal": [
        "#e6fcf5",
        "#c3fae8",
        "#96f2d7",
        "#63e6be",
        "#38d9a9",
        "#20c997",
        "#12b886",
        "#0ca678",
        "#099268",
        "#087f5b",
    ],
    "cyan": [
        "#e3fafc",
        "#c5f6fa",
        "#99e9f2",
        "#66d9e8",
        "#3bc9db",
        "#22b8cf",
        "#15aabf",
        "#1098ad",
        "#0c8599",
        "#0b7285",
    ],
    "gray": [
        "#f8f9fa",
        "#f1f3f5",
        "#e9ecef",
        "#dee2e6",
        "#ced4da",
        "#adb5bd",
        "#868e96",
        "#495057",
        "#343a40",
        "#212529",
    ],
}


def hex_to_rgb(hex_color: str) -> tuple[int, int, int]:
    """Convert hex color to RGB tuple.

    Args:
        hex_color: Hex color string (e.g., '#ff0000')

    Returns:
        RGB tuple (r, g, b) with values 0-255
    """
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))


def rgb_to_hex(r: int, g: int, b: int) -> str:
    """Convert RGB to hex color.

    Args:
        r: Red value (0-255)
        g: Green value (0-255)
        b: Blue value (0-255)

    Returns:
        Hex color string
    """
    return f"#{r:02x}{g:02x}{b:02x}"


def adjust_lightness(color: str, factor: float) -> str:
    """Adjust color lightness.

    Args:
        color: Hex color string
        factor: Adjustment factor (>1 lightens, <1 darkens)

    Returns:
        Adjusted hex color string
    """
    r, g, b = hex_to_rgb(color)

    # Adjust towards white (lighten) or black (darken)
    if factor > 1:
        r = int(r + (255 - r) * (factor - 1))
        g = int(g + (255 - g) * (factor - 1))
        b = int(b + (255 - b) * (factor - 1))
    else:
        r = int(r * factor)
        g = int(g * factor)
        b = int(b * factor)

    return rgb_to_hex(min(255, r), min(255, g), min(255, b))


def generate_color_shades(base_color: str) -> list[str]:
    """Generate 10 color shades from a base color.

    Args:
        base_color: Hex color string for the base (will be shade 5)

    Returns:
        List of 10 hex color strings from lightest to darkest
    """
    # Base color is shade 5 (index 5)
    shades = [None] * 10
    shades[5] = base_color.lower()

    # Generate lighter shades (0-4)
    for i in range(5):
        # Progressively lighter: 0 is lightest
        factor = 1 + (5 - i) * 0.15
        shades[i] = adjust_lightness(base_color, factor)

    # Generate darker shades (6-9)
    for i in range(6, 10):
        # Progressively darker: 9 is darkest
        factor = 1 - (i - 5) * 0.12
        shades[i] = adjust_lightness(base_color, factor)

    return shades


def get_color_palette(color_input: str) -> list[str]:
    """Get or generate color palette.

    Args:
        color_input: Color name from Mantine defaults or hex value

    Returns:
        List of 10 color shades

    Raises:
        ValueError: If color format is invalid
    """
    # Check if it's a Mantine default color
    if color_input.lower() in MANTINE_COLORS:
        return MANTINE_COLORS[color_input.lower()]

    # Check if it's a hex color
    if re.match(r"^#?[0-9a-fA-F]{6}$", color_input):
        if not color_input.startswith("#"):
            color_input = f"#{color_input}"
        return generate_color_shades(color_input)

    raise ValueError(
        f"Invalid color: {color_input}. Use Mantine color name or hex value."
    )


def generate_theme(
    primary_color: str = "blue",
    font_family: str | None = None,
    radius: Literal["xs", "sm", "md", "lg", "xl"] = "md",
) -> dict:
    """Generate Mantine theme dictionary.

    Args:
        primary_color: Primary color name or hex value
        font_family: Custom font family
        radius: Default border radius

    Returns:
        Theme dictionary for MantineProvider
    """
    theme = {
        "primaryColor": primary_color if primary_color in MANTINE_COLORS else "custom",
        "defaultRadius": radius,
    }

    # Add custom color if hex provided
    if primary_color not in MANTINE_COLORS:
        try:
            custom_shades = get_color_palette(primary_color)
            theme["colors"] = {"custom": custom_shades}
        except ValueError as e:
            raise ValueError(f"Failed to generate color palette: {e}")

    # Add font family if provided
    if font_family:
        theme["fontFamily"] = font_family

    return theme


def format_output(theme: dict, output_format: Literal["json", "python"]) -> str:
    """Format theme output.

    Args:
        theme: Theme dictionary
        output_format: Output format (json or python)

    Returns:
        Formatted theme string
    """
    if output_format == "json":
        return json.dumps(theme, indent=2)
    # Python dict format
    return f"theme = {theme!r}"


def main() -> None:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="DMC Theme Generator - Generate Mantine theme dictionaries",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    parser.add_argument(
        "--primary-color",
        default="blue",
        help="Primary color name or hex value (default: blue)",
    )
    parser.add_argument(
        "--font-family",
        help="Custom font family",
    )
    parser.add_argument(
        "--radius",
        choices=["xs", "sm", "md", "lg", "xl"],
        default="md",
        help="Default border radius (default: md)",
    )
    parser.add_argument(
        "--output",
        choices=["json", "python"],
        default="python",
        help="Output format (default: python)",
    )

    args = parser.parse_args()

    try:
        theme = generate_theme(
            args.primary_color,
            args.font_family,
            args.radius,
        )
        output = format_output(theme, args.output)
        print(output)
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

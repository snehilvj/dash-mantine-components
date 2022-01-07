# AUTO GENERATED FILE - DO NOT EDIT

export divider

"""
    divider(;kwargs...)

A Divider component.
Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (String | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme
- `label` (String; optional): Adds text after line in horizontal orientation
- `labelPosition` (a value equal to: "right", "left", "center"; optional): Label position
- `orientation` (a value equal to: "horizontal", "vertical"; optional): Line orientation
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Sets height in horizontal orientation and width in vertical
- `style` (Dict; optional): Inline style override
- `variant` (a value equal to: "dashed", "dotted", "solid"; optional): Divider borderStyle
"""
function divider(; kwargs...)
        available_props = Symbol[:id, :class_name, :color, :label, :labelPosition, :orientation, :size, :style, :variant]
        wild_props = Symbol[]
        return Component("divider", "Divider", "dash_mantine_components", available_props, wild_props; kwargs...)
end


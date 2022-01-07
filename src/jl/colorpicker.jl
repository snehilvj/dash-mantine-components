# AUTO GENERATED FILE - DO NOT EDIT

export colorpicker

"""
    colorpicker(;kwargs...)

A ColorPicker component.
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/ColorPicker/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `alphaLabel` (String; optional): Alpha slider aria-label
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `focusable` (Bool; optional): Should interactive elements be focusable
- `format` (a value equal to: "hex", "rgba", "rgb", "hsl", "hsla"; optional): Color format
- `fullWidth` (Bool; optional): Force picker to take 100% width of its container
- `hueLabel` (String; optional): Hue slider aria-label
- `saturationLabel` (String; optional): Saturation slider aria-label
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined component size
- `style` (Dict; optional): Inline style override
- `swatches` (Array of Strings; optional): Predefined colors
- `swatchesPerRow` (Real; optional): Number of swatches displayed in one row
- `value` (String; optional): Controlled component value
- `withPicker` (Bool; optional): Set to false to display swatches only
"""
function colorpicker(; kwargs...)
        available_props = Symbol[:id, :alphaLabel, :class_name, :focusable, :format, :fullWidth, :hueLabel, :saturationLabel, :size, :style, :swatches, :swatchesPerRow, :value, :withPicker]
        wild_props = Symbol[]
        return Component("colorpicker", "ColorPicker", "dash_mantine_components", available_props, wild_props; kwargs...)
end


# AUTO GENERATED FILE - DO NOT EDIT

export radiogroup

"""
    radiogroup(;kwargs...)

A RadioGroup component.
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Active radio color from theme.colors
- `data` (optional): RadioGroup options
- `description` (String; optional): Input description, displayed after label
- `error` (String; optional): Displays error message after input
- `label` (String; optional): Input label, displayed before input
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (optional): Predefined label fontSize, radio width, height and border-radius
- `spacing` (optional): Spacing between radios in horizontal variant
- `style` (Dict; optional): Inline style override
- `value` (String; optional): Value of currently selected radio (controlled)
- `variant` (a value equal to: "horizontal", "vertical"; optional): Radios position
"""
function radiogroup(; kwargs...)
        available_props = Symbol[:id, :className, :color, :data, :description, :error, :label, :required, :size, :spacing, :style, :value, :variant]
        wild_props = Symbol[]
        return Component("radiogroup", "RadioGroup", "dash_mantine_components", available_props, wild_props; kwargs...)
end


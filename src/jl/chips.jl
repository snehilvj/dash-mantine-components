# AUTO GENERATED FILE - DO NOT EDIT

export chips

"""
    chips(;kwargs...)

A Chips component.
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (optional): Defines align-items css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Active chip color, defaults to theme.primaryColor
- `data` (optional): Chips
- `direction` (optional): Defines flex-direction property, row for horizontal, column for vertical
- `grow` (Bool; optional): Defines flex-grow property for each element, true -> 1, false -> 0
- `multiple` (Bool; optional): Allow multiple values to be picked
- `noWrap` (Bool; optional): Defined flex-wrap property
- `position` (optional): Defines justify-content property
- `radius` (optional): Chip border-radius from theme or number to set value in px
- `size` (optional): Predefined chip size
- `spacing` (optional): Spacing between chips from theme or number to set value in px
- `style` (Dict; optional): Inline style override
- `value` (String | Array of Strings; optional): Controlled component value
- `variant` (a value equal to: "outline", "filled"; optional): Controls chip appearance, defaults to filled with dark theme and to outline in light theme
"""
function chips(; kwargs...)
        available_props = Symbol[:id, :align, :className, :color, :data, :direction, :grow, :multiple, :noWrap, :position, :radius, :size, :spacing, :style, :value, :variant]
        wild_props = Symbol[]
        return Component("chips", "Chips", "dash_mantine_components", available_props, wild_props; kwargs...)
end


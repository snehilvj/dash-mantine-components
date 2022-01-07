# AUTO GENERATED FILE - DO NOT EDIT

export chips

"""
    chips(;kwargs...)

A Chips component.
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "stretch", "center", "flex-end", "flex-start"; optional): Defines align-items css property
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Active chip color, defaults to theme.primaryColor
- `data` (optional): Chips. data has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String; required): The option's label
  - `value` (String; required): Option's value
  - `disabled` (Bool; optional): If true, this option is disabled and cannot be selecteds
- `direction` (a value equal to: "row", "column"; optional): Defines flex-direction property, row for horizontal, column for vertical
- `grow` (Bool; optional): Defines flex-grow property for each element, true -> 1, false -> 0
- `multiple` (Bool; optional): Allow multiple values to be picked
- `noWrap` (Bool; optional): Defined flex-wrap property
- `position` (a value equal to: "right", "center", "left", "apart"; optional): Defines justify-content property
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Chip border-radius from theme or number to set value in px
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined chip size
- `spacing` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Spacing between chips from theme or number to set value in px
- `style` (Dict; optional): Inline style override
- `value` (String | Array of Strings; optional): Controlled component value
- `variant` (a value equal to: "outline", "filled"; optional): Controls chip appearance, defaults to filled with dark theme and to outline in light theme
"""
function chips(; kwargs...)
        available_props = Symbol[:id, :align, :class_name, :color, :data, :direction, :grow, :multiple, :noWrap, :position, :radius, :size, :spacing, :style, :value, :variant]
        wild_props = Symbol[]
        return Component("chips", "Chips", "dash_mantine_components", available_props, wild_props; kwargs...)
end


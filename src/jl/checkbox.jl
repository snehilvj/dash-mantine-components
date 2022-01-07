# AUTO GENERATED FILE - DO NOT EDIT

export checkbox

"""
    checkbox(;kwargs...)

A Checkbox component.
Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `checked` (Bool; optional): State of check box
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (String | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Checkbox color
- `disabled` (Bool; optional): A checkbox can show it is currently unable to be interacted with
- `label` (String; optional): Checkbox label
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined label font-size and checkbox width and height in px
- `style` (Dict; optional): Inline style override
- `transitionDuration` (Real; optional): Check/uncheck transition duration, set to 0 to disable all transitions
"""
function checkbox(; kwargs...)
        available_props = Symbol[:id, :checked, :class_name, :color, :disabled, :label, :size, :style, :transitionDuration]
        wild_props = Symbol[]
        return Component("checkbox", "Checkbox", "dash_mantine_components", available_props, wild_props; kwargs...)
end


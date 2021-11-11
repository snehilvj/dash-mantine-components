# AUTO GENERATED FILE - DO NOT EDIT

export checkbox

"""
    checkbox(;kwargs...)

A Checkbox component.
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/checkbox/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `checked` (Bool; optional): State of check box
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Checkbox color
- `disabled` (Bool; optional): A checkbox can show it is currently unable to be interacted with
- `label` (String; optional): Checkbox label
- `size` (optional): Predefined label font-size and checkbox width and height in px
- `style` (Dict; optional): Inline style override
"""
function checkbox(; kwargs...)
        available_props = Symbol[:id, :checked, :className, :color, :disabled, :label, :size, :style]
        wild_props = Symbol[]
        return Component("checkbox", "Checkbox", "dash_mantine_components", available_props, wild_props; kwargs...)
end


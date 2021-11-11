# AUTO GENERATED FILE - DO NOT EDIT

export switch

"""
    switch(;kwargs...)

A Switch component.
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/switch/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `checked` (Bool; optional): State of check box
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Checkbox color
- `disabled` (Bool; optional): A checkbox can show it is currently unable to be interacted with
- `label` (String; optional): Checkbox label
- `radius` (optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `size` (optional): Predefined label font-size and checkbox width and height in px
- `style` (Dict; optional): Inline style override
"""
function switch(; kwargs...)
        available_props = Symbol[:id, :checked, :className, :color, :disabled, :label, :radius, :size, :style]
        wild_props = Symbol[]
        return Component("switch", "Switch", "dash_mantine_components", available_props, wild_props; kwargs...)
end


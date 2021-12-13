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
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Checkbox color
- `disabled` (Bool; optional): A checkbox can show it is currently unable to be interacted with
- `label` (String; optional): Checkbox label
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined label font-size and checkbox width and height in px
- `style` (Dict; optional): Inline style override
"""
function switch(; kwargs...)
        available_props = Symbol[:id, :checked, :className, :color, :disabled, :label, :loading_state, :radius, :size, :style]
        wild_props = Symbol[]
        return Component("switch", "Switch", "dash_mantine_components", available_props, wild_props; kwargs...)
end


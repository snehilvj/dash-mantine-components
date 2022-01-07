# AUTO GENERATED FILE - DO NOT EDIT

export slider

"""
    slider(;kwargs...)

A Slider component.
Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Slider color
- `drag_value` (Real; optional): Current drag value for controlled slider
- `label` (String; optional): Function to generate label or any react node to render instead, set to null to disable label
- `labelAlwaysOn` (Bool; optional): If true label will be not be hidden when user stops dragging
- `marks` (optional): Marks which will be placed on the track. marks has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; optional): The option's label
  - `value` (Real; required): option's values
- `max` (Real; optional): Maximum possible value
- `min` (Real; optional): Minimal possible value
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Track border-radius from theme or number to set border-radius in px
- `showLabelOnHover` (Bool; optional): If true slider label will appear on hover
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined track and thumb size, number to set sizes in px
- `step` (Real; optional): Number by which value will be incremented/decremented with thumb drag and arrows
- `style` (Dict; optional): Inline style override
- `value` (Real; optional): Current value for controlled slider
"""
function slider(; kwargs...)
        available_props = Symbol[:id, :class_name, :color, :drag_value, :label, :labelAlwaysOn, :marks, :max, :min, :radius, :showLabelOnHover, :size, :step, :style, :value]
        wild_props = Symbol[]
        return Component("slider", "Slider", "dash_mantine_components", available_props, wild_props; kwargs...)
end


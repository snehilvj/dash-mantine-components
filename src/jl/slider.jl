# AUTO GENERATED FILE - DO NOT EDIT

export slider

"""
    slider(;kwargs...)

A Slider component.
Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Slider color
- `drag_value` (Real; optional): Current drag value for controlled slider
- `labelAlwaysOn` (Bool; optional): If true label will be not be hidden when user stops dragging
- `marks` (optional): Marks which will be placed on the track. marks has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; required): The option's label
  - `value` (Real; required): option's values
- `max` (Real; optional): Maximum possible value
- `min` (Real; optional): Minimal possible value
- `radius` (optional): Track border-radius from theme or number to set border-radius in px
- `showLabelOnHover` (Bool; optional): If true slider label will appear on hover
- `size` (optional): Predefined track and thumb size, number to set sizes in px
- `step` (Real; optional): Number by which value will be incremented/decremented with thumb drag and arrows
- `style` (Dict; optional): Inline style override
- `value` (Real; optional): Current value for controlled slider
"""
function slider(; kwargs...)
        available_props = Symbol[:id, :className, :color, :drag_value, :labelAlwaysOn, :marks, :max, :min, :radius, :showLabelOnHover, :size, :step, :style, :value]
        wild_props = Symbol[]
        return Component("slider", "Slider", "dash_mantine_components", available_props, wild_props; kwargs...)
end


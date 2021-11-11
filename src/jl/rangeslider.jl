# AUTO GENERATED FILE - DO NOT EDIT

export rangeslider

"""
    rangeslider(;kwargs...)

A RangeSlider component.
Capture user feedback from a range of values
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: 'dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'; optional): Slider color
- `labelAlwaysOn` (Bool; optional): If true label will be not be hidden when user stops dragging
- `marks` (optional): Marks which will be placed on the track. marks has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; required): mark's label
  - `value` (Real; required): mark's values
- `max` (Real; optional): Maximum possible value
- `min` (Real; optional): Minimal possible value
- `minRange` (Real; optional): Minimal range interval
- `radius` (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl' | Real; optional): Track border-radius from theme or number to set border-radius in px
- `size` (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl'; optional): Predefined track and thumb size, number to set sizes in px
- `step` (Real; optional): Number by which value will be incremented/decremented with thumb drag and arrows
- `style` (Dict; optional): Inline style override
- `value` (Array of Reals; optional): Current value for controlled slider
"""
function rangeslider(; kwargs...)
        available_props = Symbol[:id, :className, :color, :labelAlwaysOn, :marks, :max, :min, :minRange, :radius, :size, :step, :style, :value]
        wild_props = Symbol[]
        return Component("rangeslider", "RangeSlider", "dash_mantine_components", available_props, wild_props; kwargs...)
end


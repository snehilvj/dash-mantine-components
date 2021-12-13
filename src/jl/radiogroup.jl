# AUTO GENERATED FILE - DO NOT EDIT

export radiogroup

"""
    radiogroup(;kwargs...)

A RadioGroup component.
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Active radio color from theme.colors
- `data` (optional): RadioGroup options. data has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; required): The option's label
  - `value` (String; required): option's values
- `description` (String; optional): Input description, displayed after label
- `error` (String; optional): Displays error message after input
- `label` (String; optional): Input label, displayed before input
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined label fontSize, radio width, height and border-radius
- `spacing` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Spacing between radios in horizontal variant
- `style` (Dict; optional): Inline style override
- `value` (String; optional): Value of currently selected radio (controlled)
- `variant` (a value equal to: "horizontal", "vertical"; optional): Radios position
"""
function radiogroup(; kwargs...)
        available_props = Symbol[:id, :className, :color, :data, :description, :error, :label, :loading_state, :required, :size, :spacing, :style, :value, :variant]
        wild_props = Symbol[]
        return Component("radiogroup", "RadioGroup", "dash_mantine_components", available_props, wild_props; kwargs...)
end


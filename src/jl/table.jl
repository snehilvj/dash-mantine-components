# AUTO GENERATED FILE - DO NOT EDIT

export table

"""
    table(;kwargs...)

A Table component.
A simple table component. For more information, see: https://mantine.dev/core/table/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `caption` (String; optional): Table description
- `captionSide` (a value equal to: "bottom", "top"; optional): Table caption position
- `className` (String; optional): Often used with CSS to style elements with common properties
- `columns` (Array of Strings; optional): Table columns
- `highlightOnHover` (Bool; optional): If true row will have hover color
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `rows` (Array of Arrays; optional): Table rows
- `striped` (Bool; optional): If true every odd row of table will have gray background color
- `style` (Dict; optional): Inline style override
"""
function table(; kwargs...)
        available_props = Symbol[:id, :caption, :captionSide, :className, :columns, :highlightOnHover, :loading_state, :rows, :striped, :style]
        wild_props = Symbol[]
        return Component("table", "Table", "dash_mantine_components", available_props, wild_props; kwargs...)
end


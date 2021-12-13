# AUTO GENERATED FILE - DO NOT EDIT

export simplegrid

"""
    simplegrid(;kwargs...)
    simplegrid(children::Any;kwargs...)
    simplegrid(children_maker::Function;kwargs...)


A SimpleGrid component.
Responsive grid where each item takes equal amount of space. For more information, see: https://mantine.dev/core/simple-grid/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): <Col /> components only
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `breakpoints` (optional): Breakpoints data to change items per row and spacing based on max-width. breakpoints has the following type: lists containing elements 'maxWidth', 'cols', 'spacing'.
Those elements have the following types:
  - `maxWidth` (Real; required)
  - `cols` (Real; required)
  - `spacing` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional)
- `className` (String; optional): Often used with CSS to style elements with common properties
- `cols` (Real; required): Default amount of columns, used when none of breakpoints can be applied
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `spacing` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Default spacing between columns, used when none of breakpoints can be applied
"""
function simplegrid(; kwargs...)
        available_props = Symbol[:children, :id, :breakpoints, :className, :cols, :loading_state, :spacing]
        wild_props = Symbol[]
        return Component("simplegrid", "SimpleGrid", "dash_mantine_components", available_props, wild_props; kwargs...)
end

simplegrid(children::Any; kwargs...) = simplegrid(;kwargs..., children = children)
simplegrid(children_maker::Function; kwargs...) = simplegrid(children_maker(); kwargs...)


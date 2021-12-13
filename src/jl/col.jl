# AUTO GENERATED FILE - DO NOT EDIT

export col

"""
    col(;kwargs...)
    col(children::Any;kwargs...)
    col(children_maker::Function;kwargs...)


A Col component.
Utility component to pass to Grid. For more information, see: https://mantine.dev/core/grid/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Col content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `lg` (Real; optional): Col span at (min-width: theme.breakpoints.lg)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `md` (Real; optional): Col span at (min-width: theme.breakpoints.md)
- `offset` (Real; optional): Column left offset
- `sm` (Real; optional): Col span at (min-width: theme.breakpoints.sm)
- `span` (Real; optional): Default col span
- `style` (Dict; optional): Inline style override
- `xl` (Real; optional): Col span at (min-width: theme.breakpoints.xl)
- `xs` (Real; optional): Col span at (min-width: theme.breakpoints.xs)
"""
function col(; kwargs...)
        available_props = Symbol[:children, :id, :className, :lg, :loading_state, :md, :offset, :sm, :span, :style, :xl, :xs]
        wild_props = Symbol[]
        return Component("col", "Col", "dash_mantine_components", available_props, wild_props; kwargs...)
end

col(children::Any; kwargs...) = col(;kwargs..., children = children)
col(children_maker::Function; kwargs...) = col(children_maker(); kwargs...)


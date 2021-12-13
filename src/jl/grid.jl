# AUTO GENERATED FILE - DO NOT EDIT

export grid

"""
    grid(;kwargs...)
    grid(children::Any;kwargs...)
    grid(children_maker::Function;kwargs...)


A Grid component.
Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "stretch", "center", "flex-end", "flex-start"; optional): Set grid align-content property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `columns` (Real; optional): Amount of columns in each row
- `grow` (Bool; optional): Should columns in the last row take 100% of grid width
- `gutter` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Spacing between columns predefined value from theme.spacing or number for gutter in px
- `justify` (a value equal to: "space-between", "space-around", "center", "flex-end", "flex-start"; optional): Set grid justify-content property
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional): Inline style override
"""
function grid(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :columns, :grow, :gutter, :justify, :loading_state, :style]
        wild_props = Symbol[]
        return Component("grid", "Grid", "dash_mantine_components", available_props, wild_props; kwargs...)
end

grid(children::Any; kwargs...) = grid(;kwargs..., children = children)
grid(children_maker::Function; kwargs...) = grid(children_maker(); kwargs...)


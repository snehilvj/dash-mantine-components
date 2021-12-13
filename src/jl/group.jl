# AUTO GENERATED FILE - DO NOT EDIT

export group

"""
    group(;kwargs...)
    group(children::Any;kwargs...)
    group(children_maker::Function;kwargs...)


A Group component.
Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "stretch", "center", "flex-end", "flex-start"; optional): Defines align-items css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `direction` (a value equal to: "row", "column"; optional): Defines flex-direction property, row for horizontal, column for vertical
- `grow` (Bool; optional): Defines flex-grow property for each element, true -> 1, false -> 0
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `noWrap` (Bool; optional): Defined flex-wrap property
- `position` (a value equal to: "right", "center", "left", "apart"; optional): Defines justify-content property
- `spacing` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Space between elements
- `style` (Dict; optional): Inline style override
"""
function group(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :direction, :grow, :loading_state, :noWrap, :position, :spacing, :style]
        wild_props = Symbol[]
        return Component("group", "Group", "dash_mantine_components", available_props, wild_props; kwargs...)
end

group(children::Any; kwargs...) = group(;kwargs..., children = children)
group(children_maker::Function; kwargs...) = group(children_maker(); kwargs...)


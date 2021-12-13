# AUTO GENERATED FILE - DO NOT EDIT

export skeleton

"""
    skeleton(;kwargs...)
    skeleton(children::Any;kwargs...)
    skeleton(children_maker::Function;kwargs...)


A Skeleton component.
Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `circle` (Bool; optional): If Skeleton is a circle, it's width and border-radius will be equal to height
- `height` (String | Real; optional): Skeleton height
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Radius from theme.radius or number to set border-radius in px
- `visible` (Bool; optional): Should skeleton overlay be displayed
- `width` (String | Real; optional): Skeleton width
"""
function skeleton(; kwargs...)
        available_props = Symbol[:children, :id, :circle, :height, :loading_state, :radius, :visible, :width]
        wild_props = Symbol[]
        return Component("skeleton", "Skeleton", "dash_mantine_components", available_props, wild_props; kwargs...)
end

skeleton(children::Any; kwargs...) = skeleton(;kwargs..., children = children)
skeleton(children_maker::Function; kwargs...) = skeleton(children_maker(); kwargs...)


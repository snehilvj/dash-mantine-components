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
- `height` (optional): Skeleton height
- `radius` (optional): Radius from theme.radius or number to set border-radius in px
- `visible` (Bool; optional): Should skeleton overlay be displayed
- `width` (optional): Skeleton width
"""
function skeleton(; kwargs...)
        available_props = Symbol[:children, :id, :circle, :height, :radius, :visible, :width]
        wild_props = Symbol[]
        return Component("skeleton", "Skeleton", "dash_mantine_components", available_props, wild_props; kwargs...)
end

skeleton(children::Any; kwargs...) = skeleton(;kwargs..., children = children)
skeleton(children_maker::Function; kwargs...) = skeleton(children_maker(); kwargs...)


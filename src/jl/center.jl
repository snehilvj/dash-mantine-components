# AUTO GENERATED FILE - DO NOT EDIT

export center

"""
    center(;kwargs...)
    center(children::Any;kwargs...)
    center(children_maker::Function;kwargs...)


A Center component.
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/center/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content that should be centered vertically and horizontally
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `inline` (Bool; optional): Set to true to use inline-flex instead of flex
- `style` (Dict; optional): Inline style override
"""
function center(; kwargs...)
        available_props = Symbol[:children, :id, :className, :inline, :style]
        wild_props = Symbol[]
        return Component("center", "Center", "dash_mantine_components", available_props, wild_props; kwargs...)
end

center(children::Any; kwargs...) = center(;kwargs..., children = children)
center(children_maker::Function; kwargs...) = center(children_maker(); kwargs...)


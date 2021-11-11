# AUTO GENERATED FILE - DO NOT EDIT

export mediaquery

"""
    mediaquery(;kwargs...)
    mediaquery(children::Any;kwargs...)
    mediaquery(children_maker::Function;kwargs...)


A MediaQuery component.
Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content that should be centered vertically and horizontally
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `inline` (optional): Larger than given breakpoint or value in px, will be hidden on smaller viewport
- `largerThan` (String; optional): Often used with CSS to style elements with common properties
- `query` (String; optional): Any other media query
- `smallerThan` (optional): Smaller than given breakpoint or value in px, will be hidden on larger viewport
"""
function mediaquery(; kwargs...)
        available_props = Symbol[:children, :id, :inline, :largerThan, :query, :smallerThan]
        wild_props = Symbol[]
        return Component("mediaquery", "MediaQuery", "dash_mantine_components", available_props, wild_props; kwargs...)
end

mediaquery(children::Any; kwargs...) = mediaquery(;kwargs..., children = children)
mediaquery(children_maker::Function; kwargs...) = mediaquery(children_maker(); kwargs...)


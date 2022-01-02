# AUTO GENERATED FILE - DO NOT EDIT

export scrollarea

"""
    scrollarea(;kwargs...)
    scrollarea(children::Any;kwargs...)
    scrollarea(children_maker::Function;kwargs...)


A ScrollArea component.
A port of the ScrollArea component. For more information, see: https://mantine.dev/core/table/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): ScrollArea children
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `dir` (a value equal to: "ltr", "rtl"; optional): Reading direction of the scroll area
- `offsetScrollbars` (Bool; optional): Should scrollbars be offset with padding
- `scrollHideDelay` (Real; optional): Scroll hide delay in ms, for scroll and hover types only
- `scrollbarSize` (Real; optional): Scrollbar size in px
- `style` (Dict; optional): Inline style override
- `type` (a value equal to: "auto", "scroll", "always", "hover"; optional): Scrollbars type
"""
function scrollarea(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :dir, :offsetScrollbars, :scrollHideDelay, :scrollbarSize, :style, :type]
        wild_props = Symbol[]
        return Component("scrollarea", "ScrollArea", "dash_mantine_components", available_props, wild_props; kwargs...)
end

scrollarea(children::Any; kwargs...) = scrollarea(;kwargs..., children = children)
scrollarea(children_maker::Function; kwargs...) = scrollarea(children_maker(); kwargs...)


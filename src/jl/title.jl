# AUTO GENERATED FILE - DO NOT EDIT

export title

"""
    title(;kwargs...)
    title(children::Any;kwargs...)
    title(children_maker::Function;kwargs...)


A Title component.
h1-h6 headings. For more information, see: https://mantine.dev/core/title/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "left", "right", "center"; optional): Sets text-align css property
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `order` (Real; optional): Defines component and styles which will be used
- `style` (Dict; optional): Inline style override
"""
function title(; kwargs...)
        available_props = Symbol[:children, :id, :align, :class_name, :order, :style]
        wild_props = Symbol[]
        return Component("title", "Title", "dash_mantine_components", available_props, wild_props; kwargs...)
end

title(children::Any; kwargs...) = title(;kwargs..., children = children)
title(children_maker::Function; kwargs...) = title(children_maker(); kwargs...)


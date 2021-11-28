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
- `align` (optional): Defines align-items css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `direction` (optional): Defines flex-direction property, row for horizontal, column for vertical
- `grow` (Bool; optional): Defines flex-grow property for each element, true -> 1, false -> 0
- `noWrap` (Bool; optional): Defined flex-wrap property
- `position` (optional): Defines justify-content property
- `spacing` (optional): Space between elements
- `style` (Dict; optional): Inline style override
"""
function group(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :direction, :grow, :noWrap, :position, :spacing, :style]
        wild_props = Symbol[]
        return Component("group", "Group", "dash_mantine_components", available_props, wild_props; kwargs...)
end

group(children::Any; kwargs...) = group(;kwargs..., children = children)
group(children_maker::Function; kwargs...) = group(children_maker(); kwargs...)


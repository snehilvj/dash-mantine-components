# AUTO GENERATED FILE - DO NOT EDIT

export alert

"""
    alert(;kwargs...)
    alert(children::Any;kwargs...)
    alert(children_maker::Function;kwargs...)


An Alert component.
Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Alert message
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Alert title and line colors from theme
- `style` (Dict; optional): Inline style override
- `title` (String; optional): Optional alert title
"""
function alert(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :style, :title]
        wild_props = Symbol[]
        return Component("alert", "Alert", "dash_mantine_components", available_props, wild_props; kwargs...)
end

alert(children::Any; kwargs...) = alert(;kwargs..., children = children)
alert(children_maker::Function; kwargs...) = alert(children_maker(); kwargs...)


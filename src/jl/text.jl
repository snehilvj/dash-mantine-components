# AUTO GENERATED FILE - DO NOT EDIT

export text

"""
    text(;kwargs...)
    text(children::Any;kwargs...)
    text(children_maker::Function;kwargs...)


A Text component.
Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "left", "right", "center"; optional): Sets text-align css property
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange" | a value equal to: "dimmed"; optional): Text color from theme
- `gradient` (optional): Controls gradient settings in gradient variant only. gradient has the following type: lists containing elements 'from', 'to', 'deg'.
Those elements have the following types:
  - `from` (String; required)
  - `to` (String; required)
  - `deg` (Real; optional)
- `inherit` (Bool; optional): Inherit font properties from parent element
- `inline` (Bool; optional): Sets line-height to 1 for centering
- `lineClamp` (Real; optional): CSS -webkit-line-clamp property
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined font-size from theme.fontSizes
- `style` (Dict; optional): Inline style override
- `transform` (a value equal to: "capitalize", "uppercase", "lowercase"; optional): Sets text-transform css property
- `variant` (a value equal to: "link", "gradient", "text"; optional): Link or text variant
- `weight` (a value equal to: "normal", "bold", "bolder", "lighter", "initial", "inherit" | Real; optional): Sets font-weight css property
"""
function text(; kwargs...)
        available_props = Symbol[:children, :id, :align, :class_name, :color, :gradient, :inherit, :inline, :lineClamp, :size, :style, :transform, :variant, :weight]
        wild_props = Symbol[]
        return Component("text", "Text", "dash_mantine_components", available_props, wild_props; kwargs...)
end

text(children::Any; kwargs...) = text(;kwargs..., children = children)
text(children_maker::Function; kwargs...) = text(children_maker(); kwargs...)


# AUTO GENERATED FILE - DO NOT EDIT

export text

"""
    text(;kwargs...)
    text(children::Any;kwargs...)
    text(children_maker::Function;kwargs...)


A Text component.
Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "left", "right", "center"; optional): Sets text-align css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Text color from theme
- `gradient` (optional): Controls gradient settings in gradient variant only
- `inherit` (Bool; optional): Inherit font properties from parent element
- `inline` (Bool; optional): Sets line-height to 1 for centering
- `lineClamp` (Real; optional): CSS -webkit-line-clamp property
- `radius` (optional): Button border-radius from theme or number to set border-radius in px
- `size` (optional): Predefined font-size from theme.fontSizes
- `style` (Dict; optional): Inline style override
- `transform` (a value equal to: "capitalize", "uppercase", "lowercase"; optional): Sets text-transform css property
- `variant` (a value equal to: "link", "gradient", "text"; optional): Link or text variant
- `weight` (a value equal to: "normal", "bold", "bolder", "lighter", "initial", "inherit" | Real; optional): Sets font-weight css property
"""
function text(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :color, :gradient, :inherit, :inline, :lineClamp, :radius, :size, :style, :transform, :variant, :weight]
        wild_props = Symbol[]
        return Component("text", "Text", "dash_mantine_components", available_props, wild_props; kwargs...)
end

text(children::Any; kwargs...) = text(;kwargs..., children = children)
text(children_maker::Function; kwargs...) = text(children_maker(); kwargs...)


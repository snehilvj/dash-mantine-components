# AUTO GENERATED FILE - DO NOT EDIT

export anchor

"""
    anchor(;kwargs...)
    anchor(children::Any;kwargs...)
    anchor(children_maker::Function;kwargs...)


An Anchor component.
Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "left", "right", "center"; optional): Sets text-align css property
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Text color from theme
- `gradient` (optional): Controls gradient settings in gradient variant only. gradient has the following type: lists containing elements 'from', 'to', 'deg'.
Those elements have the following types:
  - `from` (String; required)
  - `to` (String; required)
  - `deg` (Real; optional)
- `href` (String; optional): href
- `inherit` (Bool; optional): Inherit font properties from parent element
- `inline` (Bool; optional): Sets line-height to 1 for centering
- `lineClamp` (Real; optional): CSS -webkit-line-clamp property
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined font-size from theme.fontSizes
- `style` (Dict; optional): Inline style override
- `target` (a value equal to: "_blank", "_self"; optional): Target
- `transform` (a value equal to: "capitalize", "uppercase", "lowercase"; optional): Sets text-transform css property
- `variant` (a value equal to: "link", "gradient", "text"; optional): Link or text variant
- `weight` (a value equal to: "normal", "bold", "bolder", "lighter", "initial", "inherit" | Real; optional): Sets font-weight css property
"""
function anchor(; kwargs...)
        available_props = Symbol[:children, :id, :align, :class_name, :color, :gradient, :href, :inherit, :inline, :lineClamp, :size, :style, :target, :transform, :variant, :weight]
        wild_props = Symbol[]
        return Component("anchor", "Anchor", "dash_mantine_components", available_props, wild_props; kwargs...)
end

anchor(children::Any; kwargs...) = anchor(;kwargs..., children = children)
anchor(children_maker::Function; kwargs...) = anchor(children_maker(); kwargs...)


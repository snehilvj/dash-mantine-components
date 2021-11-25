# AUTO GENERATED FILE - DO NOT EDIT

export anchor

"""
    anchor(;kwargs...)
    anchor(children::Any;kwargs...)
    anchor(children_maker::Function;kwargs...)


An Anchor component.
Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (optional): Sets text-align css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Text color from theme
- `gradient` (optional): Controls gradient settings in gradient variant only
- `href` (String; optional): href
- `inherit` (Bool; optional): Inherit font properties from parent element
- `inline` (Bool; optional): Sets line-height to 1 for centering
- `lineClamp` (Real; optional): CSS -webkit-line-clamp property
- `size` (optional): Predefined font-size from theme.fontSizes
- `style` (Dict; optional): Inline style override
- `target` (a value equal to: "_blank", "_self"; optional): Target
- `transform` (optional): Sets text-transform css property
- `variant` (optional): Link or text variant
- `weight` (optional): Sets font-weight css property
"""
function anchor(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :color, :gradient, :href, :inherit, :inline, :lineClamp, :size, :style, :target, :transform, :variant, :weight]
        wild_props = Symbol[]
        return Component("anchor", "Anchor", "dash_mantine_components", available_props, wild_props; kwargs...)
end

anchor(children::Any; kwargs...) = anchor(;kwargs..., children = children)
anchor(children_maker::Function; kwargs...) = anchor(children_maker(); kwargs...)


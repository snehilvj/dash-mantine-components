# AUTO GENERATED FILE - DO NOT EDIT

export badge

"""
    badge(;kwargs...)
    badge(children::Any;kwargs...)
    badge(children_maker::Function;kwargs...)


A Badge component.
Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Badge color from theme
- `fullWidth` (Bool; optional): Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis
- `gradient` (optional): Controls gradient settings in gradient variant only
- `radius` (optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `size` (optional): Predefined badge size
- `style` (Dict; optional): Inline style override
- `variant` (a value equal to: "light", "filled", "outline", "dot", "gradient"; optional): Controls badge background, color and border styles
"""
function badge(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :fullWidth, :gradient, :radius, :size, :style, :variant]
        wild_props = Symbol[]
        return Component("badge", "Badge", "dash_mantine_components", available_props, wild_props; kwargs...)
end

badge(children::Any; kwargs...) = badge(;kwargs..., children = children)
badge(children_maker::Function; kwargs...) = badge(children_maker(); kwargs...)


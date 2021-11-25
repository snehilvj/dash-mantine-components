# AUTO GENERATED FILE - DO NOT EDIT

export card

"""
    card(;kwargs...)
    card(children::Any;kwargs...)
    card(children_maker::Function;kwargs...)


A Card component.
Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. For more information, see: https://mantine.dev/core/card/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Card content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `padding` (optional): Predefined padding value from theme.spacing or number for padding in px
- `radius` (optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `shadow` (optional): Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property
- `withBorder` (Bool; optional): Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme
"""
function card(; kwargs...)
        available_props = Symbol[:children, :id, :className, :padding, :radius, :shadow, :withBorder]
        wild_props = Symbol[]
        return Component("card", "Card", "dash_mantine_components", available_props, wild_props; kwargs...)
end

card(children::Any; kwargs...) = card(;kwargs..., children = children)
card(children_maker::Function; kwargs...) = card(children_maker(); kwargs...)


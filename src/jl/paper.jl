# AUTO GENERATED FILE - DO NOT EDIT

export paper

"""
    paper(;kwargs...)
    paper(children::Any;kwargs...)
    paper(children_maker::Function;kwargs...)


A Paper component.
Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Paper content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `padding` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Predefined padding value from theme.spacing or number for padding in px
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `shadow` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property
- `withBorder` (Bool; optional): Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme
"""
function paper(; kwargs...)
        available_props = Symbol[:children, :id, :className, :padding, :radius, :shadow, :withBorder]
        wild_props = Symbol[]
        return Component("paper", "Paper", "dash_mantine_components", available_props, wild_props; kwargs...)
end

paper(children::Any; kwargs...) = paper(;kwargs..., children = children)
paper(children_maker::Function; kwargs...) = paper(children_maker(); kwargs...)


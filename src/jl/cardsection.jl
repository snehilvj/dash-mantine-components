# AUTO GENERATED FILE - DO NOT EDIT

export cardsection

"""
    cardsection(;kwargs...)
    cardsection(children::Any;kwargs...)
    cardsection(children_maker::Function;kwargs...)


A CardSection component.
Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. For more information, see: https://mantine.dev/core/card/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Section content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
"""
function cardsection(; kwargs...)
        available_props = Symbol[:children, :id, :className]
        wild_props = Symbol[]
        return Component("cardsection", "CardSection", "dash_mantine_components", available_props, wild_props; kwargs...)
end

cardsection(children::Any; kwargs...) = cardsection(;kwargs..., children = children)
cardsection(children_maker::Function; kwargs...) = cardsection(children_maker(); kwargs...)


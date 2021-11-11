# AUTO GENERATED FILE - DO NOT EDIT

export container

"""
    container(;kwargs...)
    container(children::Any;kwargs...)
    container(children_maker::Function;kwargs...)


A Container component.
Center content horizontally with predefined max-width. For more information, see: https://mantine.dev/core/container/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content that should be centered vertically and horizontally
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `fluid` (Bool; optional): If fluid is set to true, size prop is ignored and Container always take 100% of width
- `padding` (optional): Horizontal padding defined in theme.spacing, or number value for padding in px
- `size` (optional): Predefined container max-width or number for max-width in px
- `style` (Dict; optional): Inline style override
"""
function container(; kwargs...)
        available_props = Symbol[:children, :id, :className, :fluid, :padding, :size, :style]
        wild_props = Symbol[]
        return Component("container", "Container", "dash_mantine_components", available_props, wild_props; kwargs...)
end

container(children::Any; kwargs...) = container(;kwargs..., children = children)
container(children_maker::Function; kwargs...) = container(children_maker(); kwargs...)


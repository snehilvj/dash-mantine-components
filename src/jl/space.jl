# AUTO GENERATED FILE - DO NOT EDIT

export space

"""
    space(;kwargs...)
    space(children::Any;kwargs...)
    space(children_maker::Function;kwargs...)


A Space component.
Add horizontal or vertical spacing from theme. For more information, see: https://mantine.dev/core/space/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Tab content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `h` (optional): Height, set to add vertical spacing
- `style` (Dict; optional): Inline style override
- `w` (optional): Width, set to add horizontal spacing
"""
function space(; kwargs...)
        available_props = Symbol[:children, :id, :className, :h, :style, :w]
        wild_props = Symbol[]
        return Component("space", "Space", "dash_mantine_components", available_props, wild_props; kwargs...)
end

space(children::Any; kwargs...) = space(;kwargs..., children = children)
space(children_maker::Function; kwargs...) = space(children_maker(); kwargs...)


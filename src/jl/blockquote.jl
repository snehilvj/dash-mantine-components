# AUTO GENERATED FILE - DO NOT EDIT

export blockquote

"""
    blockquote(;kwargs...)
    blockquote(children::Any;kwargs...)
    blockquote(children_maker::Function;kwargs...)


A Blockquote component.
Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `cite` (String; optional): Describe a reference to a cited quote
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (String | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Badge color from theme
- `style` (Dict; optional): Inline style override
"""
function blockquote(; kwargs...)
        available_props = Symbol[:children, :id, :cite, :class_name, :color, :style]
        wild_props = Symbol[]
        return Component("blockquote", "Blockquote", "dash_mantine_components", available_props, wild_props; kwargs...)
end

blockquote(children::Any; kwargs...) = blockquote(;kwargs..., children = children)
blockquote(children_maker::Function; kwargs...) = blockquote(children_maker(); kwargs...)


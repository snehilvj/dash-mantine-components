# AUTO GENERATED FILE - DO NOT EDIT

export modal

"""
    modal(;kwargs...)
    modal(children::Any;kwargs...)
    modal(children_maker::Function;kwargs...)


A Modal component.
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/modal/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content that should be centered vertically and horizontally
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `hideCloseButton` (Bool; optional): Hides close button, modal still can be closed with escape key and by clicking outside
- `opened` (Bool; optional): Mounts modal if true
- `overflow` (a value equal to: "inside", "outside"; optional): Control vertical overflow behavior
- `padding` (optional): Modal padding from theme or number value for padding in px
- `size` (Real | String; optional): Modal body width
- `style` (Dict; optional): Inline style override
- `title` (String; optional): Modal title, displayed in header before close button
"""
function modal(; kwargs...)
        available_props = Symbol[:children, :id, :className, :hideCloseButton, :opened, :overflow, :padding, :size, :style, :title]
        wild_props = Symbol[]
        return Component("modal", "Modal", "dash_mantine_components", available_props, wild_props; kwargs...)
end

modal(children::Any; kwargs...) = modal(;kwargs..., children = children)
modal(children_maker::Function; kwargs...) = modal(children_maker(); kwargs...)


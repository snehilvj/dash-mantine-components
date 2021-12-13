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
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Badge color from theme
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional): Inline style override
"""
function blockquote(; kwargs...)
        available_props = Symbol[:children, :id, :cite, :className, :color, :loading_state, :style]
        wild_props = Symbol[]
        return Component("blockquote", "Blockquote", "dash_mantine_components", available_props, wild_props; kwargs...)
end

blockquote(children::Any; kwargs...) = blockquote(;kwargs..., children = children)
blockquote(children_maker::Function; kwargs...) = blockquote(children_maker(); kwargs...)


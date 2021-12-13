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
- `centered` (Bool; optional): Controls if modal should be centered
- `className` (String; optional): Often used with CSS to style elements with common properties
- `closeOnClickOutside` (Bool; optional): Should modal be closed when outside click was registered?
- `hideCloseButton` (Bool; optional): Hides close button, modal still can be closed with escape key and by clicking outside
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opened` (Bool; optional): Mounts modal if true
- `overflow` (a value equal to: "inside", "outside"; optional): Control vertical overflow behavior
- `padding` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Modal padding from theme or number value for padding in px
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real | String; optional): Modal body width
- `style` (Dict; optional): Inline style override
- `title` (String; optional): Modal title, displayed in header before close button
- `zIndex` (Real; optional): Popper zIndex
"""
function modal(; kwargs...)
        available_props = Symbol[:children, :id, :centered, :className, :closeOnClickOutside, :hideCloseButton, :loading_state, :opened, :overflow, :padding, :size, :style, :title, :zIndex]
        wild_props = Symbol[]
        return Component("modal", "Modal", "dash_mantine_components", available_props, wild_props; kwargs...)
end

modal(children::Any; kwargs...) = modal(;kwargs..., children = children)
modal(children_maker::Function; kwargs...) = modal(children_maker(); kwargs...)


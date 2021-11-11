# AUTO GENERATED FILE - DO NOT EDIT

export tabs

"""
    tabs(;kwargs...)
    tabs(children::Any;kwargs...)
    tabs(children_maker::Function;kwargs...)


A Tabs component.
Switch between different views. For more information, see: https://mantine.dev/core/tabs/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): <Tab /> components only
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `active` (Real; optional): Index of active tab, overrides internal state
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Active tab color from theme.colors
- `grow` (Bool; optional): True if tabs should take all available space
- `orientation` (optional): Controls tab orientation
- `position` (optional): Tab controls position
- `tabPadding` (optional): Controls tab content padding-top
- `variant` (a value equal to: "default", "outline", "pills"; optional): Controls appearance
"""
function tabs(; kwargs...)
        available_props = Symbol[:children, :id, :active, :className, :color, :grow, :orientation, :position, :tabPadding, :variant]
        wild_props = Symbol[]
        return Component("tabs", "Tabs", "dash_mantine_components", available_props, wild_props; kwargs...)
end

tabs(children::Any; kwargs...) = tabs(;kwargs..., children = children)
tabs(children_maker::Function; kwargs...) = tabs(children_maker(); kwargs...)


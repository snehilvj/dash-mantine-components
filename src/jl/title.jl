# AUTO GENERATED FILE - DO NOT EDIT

export title

"""
    title(;kwargs...)
    title(children::Any;kwargs...)
    title(children_maker::Function;kwargs...)


A Title component.
h1-h6 headings. For more information, see: https://mantine.dev/core/title/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `align` (a value equal to: "left", "right", "center"; optional): Sets text-align css property
- `className` (String; optional): Often used with CSS to style elements with common properties
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `order` (Real; optional): Defines component and styles which will be used
- `style` (Dict; optional): Inline style override
"""
function title(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :loading_state, :order, :style]
        wild_props = Symbol[]
        return Component("title", "Title", "dash_mantine_components", available_props, wild_props; kwargs...)
end

title(children::Any; kwargs...) = title(;kwargs..., children = children)
title(children_maker::Function; kwargs...) = title(children_maker(); kwargs...)


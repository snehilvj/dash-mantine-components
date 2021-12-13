# AUTO GENERATED FILE - DO NOT EDIT

export tab

"""
    tab(;kwargs...)
    tab(children::Any;kwargs...)
    tab(children_maker::Function;kwargs...)


A Tab component.
Utility component to pass to Tabs. For more information, see: https://mantine.dev/core/tabs/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Tab content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `disabled` (Bool; optional): A tab can show it is currently unable to be interacted with
- `label` (String; optional): Tab control label
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function tab(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disabled, :label, :loading_state]
        wild_props = Symbol[]
        return Component("tab", "Tab", "dash_mantine_components", available_props, wild_props; kwargs...)
end

tab(children::Any; kwargs...) = tab(;kwargs..., children = children)
tab(children_maker::Function; kwargs...) = tab(children_maker(); kwargs...)


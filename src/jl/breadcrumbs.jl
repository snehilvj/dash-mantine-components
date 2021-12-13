# AUTO GENERATED FILE - DO NOT EDIT

export breadcrumbs

"""
    breadcrumbs(;kwargs...)

A Breadcrumbs component.
Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `items` (optional): Link items. items has the following type: Array of lists containing elements 'title', 'href'.
Those elements have the following types:
  - `title` (String; required)
  - `href` (String; required)s
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `separator` (String; optional): Separator between breadcrumbs
"""
function breadcrumbs(; kwargs...)
        available_props = Symbol[:id, :items, :loading_state, :separator]
        wild_props = Symbol[]
        return Component("breadcrumbs", "Breadcrumbs", "dash_mantine_components", available_props, wild_props; kwargs...)
end


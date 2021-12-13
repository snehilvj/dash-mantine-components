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
- `separator` (String; optional): Separator between breadcrumbs
- `style` (Dict; optional): Inline style override
"""
function breadcrumbs(; kwargs...)
        available_props = Symbol[:id, :items, :separator, :style]
        wild_props = Symbol[]
        return Component("breadcrumbs", "Breadcrumbs", "dash_mantine_components", available_props, wild_props; kwargs...)
end


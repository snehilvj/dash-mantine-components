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
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `disabled` (Bool; optional): A tab can show it is currently unable to be interacted with
- `label` (String; optional): Tab control label
"""
function tab(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :disabled, :label]
        wild_props = Symbol[]
        return Component("tab", "Tab", "dash_mantine_components", available_props, wild_props; kwargs...)
end

tab(children::Any; kwargs...) = tab(;kwargs..., children = children)
tab(children_maker::Function; kwargs...) = tab(children_maker(); kwargs...)


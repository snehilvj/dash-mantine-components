# AUTO GENERATED FILE - DO NOT EDIT

export notification

"""
    notification(;kwargs...)
    notification(children::Any;kwargs...)
    notification(children_maker::Function;kwargs...)


A Notification component.
Show dynamic notifications and alerts to user, part of notifications system. For more information, see: https://mantine.dev/core/notification/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Notification body, place main text here
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Notification line or icon color
- `loading` (Bool; optional): Replaces colored line or icon with Loader component
- `title` (String; optional): Notification title, displayed before body
"""
function notification(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :loading, :title]
        wild_props = Symbol[]
        return Component("notification", "Notification", "dash_mantine_components", available_props, wild_props; kwargs...)
end

notification(children::Any; kwargs...) = notification(;kwargs..., children = children)
notification(children_maker::Function; kwargs...) = notification(children_maker(); kwargs...)


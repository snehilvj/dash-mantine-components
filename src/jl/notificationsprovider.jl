# AUTO GENERATED FILE - DO NOT EDIT

export notificationsprovider

"""
    notificationsprovider(;kwargs...)
    notificationsprovider(children::Any;kwargs...)
    notificationsprovider(children_maker::Function;kwargs...)


A NotificationsProvider component.
Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `autoClose` (Real | a value equal to: false; optional): Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function
- `containerWidth` (Real; optional): Notification width in px, cannot exceed 100%
- `limit` (Real; optional): Maximum amount of notifications displayed at a time, other new notifications will be added to queue
- `notificationMaxHeight` (Real; optional): Notification max-height in px, used for transitions
- `position` (a value equal to: "top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"; optional): Notifications position
- `zIndex` (Real; optional): Notifications container z-index
"""
function notificationsprovider(; kwargs...)
        available_props = Symbol[:children, :id, :autoClose, :containerWidth, :limit, :notificationMaxHeight, :position, :zIndex]
        wild_props = Symbol[]
        return Component("notificationsprovider", "NotificationsProvider", "dash_mantine_components", available_props, wild_props; kwargs...)
end

notificationsprovider(children::Any; kwargs...) = notificationsprovider(;kwargs..., children = children)
notificationsprovider(children_maker::Function; kwargs...) = notificationsprovider(children_maker(); kwargs...)


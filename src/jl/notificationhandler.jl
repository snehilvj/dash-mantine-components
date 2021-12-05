# AUTO GENERATED FILE - DO NOT EDIT

export notificationhandler

"""
    notificationhandler(;kwargs...)

A NotificationHandler component.
Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `task` (optional): Task for notification handler along with notification props. task has the following type: lists containing elements 'command', 'id', 'props'.
Those elements have the following types:
  - `command` (a value equal to: "hide", "show", "update"; required)
  - `id` (String; required)
  - `props` (optional): . props has the following type: lists containing elements 'color', 'style', 'title', 'loading', 'message', 'autoClose', 'disallowClose'.
Those elements have the following types:
  - `color` (String; optional)
  - `style` (Dict; optional)
  - `title` (String; optional)
  - `loading` (Bool; optional)
  - `message` (String; optional)
  - `autoClose` (Real | a value equal to: false; optional)
  - `disallowClose` (Bool; optional)
"""
function notificationhandler(; kwargs...)
        available_props = Symbol[:id, :task]
        wild_props = Symbol[]
        return Component("notificationhandler", "NotificationHandler", "dash_mantine_components", available_props, wild_props; kwargs...)
end


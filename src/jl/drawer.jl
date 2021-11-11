# AUTO GENERATED FILE - DO NOT EDIT

export drawer

"""
    drawer(;kwargs...)
    drawer(children::Any;kwargs...)
    drawer(children_maker::Function;kwargs...)


A Drawer component.
Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Drawer children components
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `hideCloseButton` (Bool; optional): Hides close button, modal still can be closed with escape key and by clicking outside
- `noCloseOnClickOutside` (Bool; optional): Disable onClock trigger for outside events
- `noCloseOnEscape` (Bool; optional): Disable onClock trigger for escape key press
- `noFocusTrap` (Bool; optional): Disables focus trap
- `noOverlay` (Bool; optional): Removes overlay entirely
- `noScrollLock` (Bool; optional): Disables scroll lock
- `opened` (Bool; optional): If true drawer is mounted to the dom
- `padding` (optional): Drawer body padding from theme or number for padding in px
- `position` (optional): Drawer body position
- `size` (String | Real; optional): Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width
- `title` (String; optional): Drawer title, displayed in header before close button
"""
function drawer(; kwargs...)
        available_props = Symbol[:children, :id, :className, :hideCloseButton, :noCloseOnClickOutside, :noCloseOnEscape, :noFocusTrap, :noOverlay, :noScrollLock, :opened, :padding, :position, :size, :title]
        wild_props = Symbol[]
        return Component("drawer", "Drawer", "dash_mantine_components", available_props, wild_props; kwargs...)
end

drawer(children::Any; kwargs...) = drawer(;kwargs..., children = children)
drawer(children_maker::Function; kwargs...) = drawer(children_maker(); kwargs...)


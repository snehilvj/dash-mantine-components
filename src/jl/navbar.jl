# AUTO GENERATED FILE - DO NOT EDIT

export navbar

"""
    navbar(;kwargs...)
    navbar(children::Any;kwargs...)
    navbar(children_maker::Function;kwargs...)


A Navbar component.
Navbar. For more information, see: https://mantine.dev/core/app-shell/
Keyword arguments:
- `children` (String; optional): Navbar content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `fixed` (Bool; optional): Changes position to fixed, controlled by AppShell component if rendered inside
- `height` (String | Real; optional): Navbar height
- `hidden` (Bool; optional): Set to true to hide breakpoint at hiddenBreakpoint
- `hiddenBreakpoint` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Breakpoint at which navbar will be hidden if hidden prop is true
- `padding` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Navbar padding from theme.spacing or number to set padding in px
- `position` (optional): Control top, left, right or bottom position values, controlled by AppShell component if rendered inside. position has the following type: lists containing elements 'top', 'left', 'bottom', 'right'.
Those elements have the following types:
  - `top` (Real; optional)
  - `left` (Real; optional)
  - `bottom` (Real; optional)
  - `right` (Real; optional)
- `style` (Dict; optional): Inline style override
- `width` (Dict; optional): Navbar width with breakpoints
- `zIndex` (Real; optional): z-index
"""
function navbar(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :fixed, :height, :hidden, :hiddenBreakpoint, :padding, :position, :style, :width, :zIndex]
        wild_props = Symbol[]
        return Component("navbar", "Navbar", "dash_mantine_components", available_props, wild_props; kwargs...)
end

navbar(children::Any; kwargs...) = navbar(;kwargs..., children = children)
navbar(children_maker::Function; kwargs...) = navbar(children_maker(); kwargs...)


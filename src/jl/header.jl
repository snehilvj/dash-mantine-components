# AUTO GENERATED FILE - DO NOT EDIT

export header

"""
    header(;kwargs...)
    header(children::Any;kwargs...)
    header(children_maker::Function;kwargs...)


A Header component.
Header. For more information, see: https://mantine.dev/core/app-shell/
Keyword arguments:
- `children` (String; optional): Header content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `fixed` (Bool; optional): Changes position to fixed, controlled by AppShell component if rendered inside
- `height` (String | Real; optional): Header height
- `padding` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Header padding from theme.spacing or number to set padding in px
- `position` (optional): Control top, left, right or bottom position values, controlled by AppShell component if rendered inside. position has the following type: lists containing elements 'top', 'left', 'bottom', 'right'.
Those elements have the following types:
  - `top` (Real; optional)
  - `left` (Real; optional)
  - `bottom` (Real; optional)
  - `right` (Real; optional)
- `style` (Dict; optional): Inline style override
- `zIndex` (Real; optional): z-index
"""
function header(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :fixed, :height, :padding, :position, :style, :zIndex]
        wild_props = Symbol[]
        return Component("header", "Header", "dash_mantine_components", available_props, wild_props; kwargs...)
end

header(children::Any; kwargs...) = header(;kwargs..., children = children)
header(children_maker::Function; kwargs...) = header(children_maker(); kwargs...)


# AUTO GENERATED FILE - DO NOT EDIT

export progress

"""
    progress(;kwargs...)

A Progress component.
Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Progress color from theme
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Predefined progress radius from theme.radius or number for height in px
- `sections` (optional): Replaces value if present, renders multiple sections instead of single one. sections has the following type: Array of lists containing elements 'value', 'color'.
Those elements have the following types:
  - `value` (Real; optional)
  - `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)s
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined progress height or number for height in px
- `striped` (Bool; optional): Adds stripes
- `value` (Real; optional): Current value for controlled slider
"""
function progress(; kwargs...)
        available_props = Symbol[:id, :className, :color, :radius, :sections, :size, :striped, :value]
        wild_props = Symbol[]
        return Component("progress", "Progress", "dash_mantine_components", available_props, wild_props; kwargs...)
end


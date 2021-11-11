# AUTO GENERATED FILE - DO NOT EDIT

export tooltip

"""
    tooltip(;kwargs...)
    tooltip(children::Any;kwargs...)
    tooltip(children_maker::Function;kwargs...)


A Tooltip component.
Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Any react node that should trigger tooltip
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `arrowSize` (Real; optional): Arrow size in px
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme
- `delay` (Real; optional): Close delay in ms, 0 to disable delay
- `disabled` (Bool; optional): True to disable tooltip
- `gutter` (Real; optional): Spacing between element and popper in px
- `label` (String; required): Tooltip content
- `placement` (a value equal to: "center", "end", "start"; optional): Placement relative to reference element
- `position` (optional): Position relative to reference element
- `style` (Dict; optional): Inline style override
- `width` (Real | a value equal to: "auto"; optional): Tooltip width in px or auto
- `withArrow` (Bool; optional): Renders arrow if true
- `wrapLines` (Bool; optional): Allow multiline tooltip content
- `zIndex` (Real; optional): Popper z-index
"""
function tooltip(; kwargs...)
        available_props = Symbol[:children, :id, :arrowSize, :className, :color, :delay, :disabled, :gutter, :label, :placement, :position, :style, :width, :withArrow, :wrapLines, :zIndex]
        wild_props = Symbol[]
        return Component("tooltip", "Tooltip", "dash_mantine_components", available_props, wild_props; kwargs...)
end

tooltip(children::Any; kwargs...) = tooltip(;kwargs..., children = children)
tooltip(children_maker::Function; kwargs...) = tooltip(children_maker(); kwargs...)


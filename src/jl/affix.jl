# AUTO GENERATED FILE - DO NOT EDIT

export affix

"""
    affix(;kwargs...)
    affix(children::Any;kwargs...)
    affix(children_maker::Function;kwargs...)


An Affix component.
Renders Affix at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/affix/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Any react node that should trigger tooltip
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `position` (optional): Fixed position in px. position has the following type: lists containing elements 'top', 'left', 'bottom', 'right'.
Those elements have the following types:
  - `top` (Real | String; optional)
  - `left` (Real | String; optional)
  - `bottom` (Real | String; optional)
  - `right` (Real | String; optional)
- `style` (Dict; optional): Inline style override
- `zIndex` (String; optional): Root element z-index property
"""
function affix(; kwargs...)
        available_props = Symbol[:children, :id, :className, :position, :style, :zIndex]
        wild_props = Symbol[]
        return Component("affix", "Affix", "dash_mantine_components", available_props, wild_props; kwargs...)
end

affix(children::Any; kwargs...) = affix(;kwargs..., children = children)
affix(children_maker::Function; kwargs...) = affix(children_maker(); kwargs...)


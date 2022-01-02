# AUTO GENERATED FILE - DO NOT EDIT

export accordion

"""
    accordion(;kwargs...)
    accordion(children::Any;kwargs...)
    accordion(children_maker::Function;kwargs...)


An Accordion component.
Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): <AccordionItem /> components only
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `disableIconRotation` (Bool; optional): Should icon rotation be disabled
- `iconPosition` (a value equal to: "right", "left"; optional): Change icon position: left or right
- `multiple` (Bool; optional): Allow multiple items to be opened at the same time
- `offsetIcon` (Bool; optional): Should icon be offset with padding, applicable only when iconPosition is left
- `state` (Dict with Strings as keys and values of type Bool; optional): Controlled state (controls opened state of accordion items)
"""
function accordion(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :disableIconRotation, :iconPosition, :multiple, :offsetIcon, :state]
        wild_props = Symbol[]
        return Component("accordion", "Accordion", "dash_mantine_components", available_props, wild_props; kwargs...)
end

accordion(children::Any; kwargs...) = accordion(;kwargs..., children = children)
accordion(children_maker::Function; kwargs...) = accordion(children_maker(); kwargs...)


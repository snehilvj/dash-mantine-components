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
- `className` (String; optional): Often used with CSS to style elements with common properties
- `disableIconRotation` (Bool; optional): Should icon rotation be disabled
- `iconPosition` (a value equal to: "right", "left"; optional): Change icon position: left or right
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional): Allow multiple items to be opened at the same time
- `offsetIcon` (Bool; optional): Should icon be offset with padding, applicable only when iconPosition is left
- `state` (Dict with Strings as keys and values of type Bool; optional): Controlled state (controls opened state of accordion items)
"""
function accordion(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disableIconRotation, :iconPosition, :loading_state, :multiple, :offsetIcon, :state]
        wild_props = Symbol[]
        return Component("accordion", "Accordion", "dash_mantine_components", available_props, wild_props; kwargs...)
end

accordion(children::Any; kwargs...) = accordion(;kwargs..., children = children)
accordion(children_maker::Function; kwargs...) = accordion(children_maker(); kwargs...)


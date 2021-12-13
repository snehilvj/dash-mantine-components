# AUTO GENERATED FILE - DO NOT EDIT

export accordionitem

"""
    accordionitem(;kwargs...)
    accordionitem(children::Any;kwargs...)
    accordionitem(children_maker::Function;kwargs...)


An AccordionItem component.
Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Accordion content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `description` (String; optional): Accordion description
- `label` (String; required): Accordion label
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
"""
function accordionitem(; kwargs...)
        available_props = Symbol[:children, :id, :className, :description, :label, :loading_state, :style]
        wild_props = Symbol[]
        return Component("accordionitem", "AccordionItem", "dash_mantine_components", available_props, wild_props; kwargs...)
end

accordionitem(children::Any; kwargs...) = accordionitem(;kwargs..., children = children)
accordionitem(children_maker::Function; kwargs...) = accordionitem(children_maker(); kwargs...)


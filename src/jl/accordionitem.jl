# AUTO GENERATED FILE - DO NOT EDIT

export accordionitem

"""
    accordionitem(;kwargs...)
    accordionitem(children::Any;kwargs...)
    accordionitem(children_maker::Function;kwargs...)


An AccordionItem component.
Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Col content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `description` (String; optional): Accordion description
- `label` (String; required): Accordion label
"""
function accordionitem(; kwargs...)
        available_props = Symbol[:children, :id, :className, :description, :label]
        wild_props = Symbol[]
        return Component("accordionitem", "AccordionItem", "dash_mantine_components", available_props, wild_props; kwargs...)
end

accordionitem(children::Any; kwargs...) = accordionitem(;kwargs..., children = children)
accordionitem(children_maker::Function; kwargs...) = accordionitem(children_maker(); kwargs...)


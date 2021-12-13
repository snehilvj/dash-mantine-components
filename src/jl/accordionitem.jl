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
- `description` (String; optional): Accordion description
- `label` (String; required): Accordion label
"""
function accordionitem(; kwargs...)
        available_props = Symbol[:children, :description, :label]
        wild_props = Symbol[]
        return Component("accordionitem", "AccordionItem", "dash_mantine_components", available_props, wild_props; kwargs...)
end

accordionitem(children::Any; kwargs...) = accordionitem(;kwargs..., children = children)
accordionitem(children_maker::Function; kwargs...) = accordionitem(children_maker(); kwargs...)


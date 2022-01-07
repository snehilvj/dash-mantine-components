# AUTO GENERATED FILE - DO NOT EDIT

export inputwrapper

"""
    inputwrapper(;kwargs...)
    inputwrapper(children::Any;kwargs...)
    inputwrapper(children_maker::Function;kwargs...)


An InputWrapper component.
Enhance custom inputs with label, error and description. For more information, see: https://mantine.dev/core/input-wrapper/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Input that should be wrapped
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `description` (String; optional): Input description, displayed after label
- `error` (String; optional): Displays error message after input
- `label` (String; optional): Input label, displayed before input
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Input size
- `style` (Dict; optional): Inline style override
"""
function inputwrapper(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :description, :error, :label, :required, :size, :style]
        wild_props = Symbol[]
        return Component("inputwrapper", "InputWrapper", "dash_mantine_components", available_props, wild_props; kwargs...)
end

inputwrapper(children::Any; kwargs...) = inputwrapper(;kwargs..., children = children)
inputwrapper(children_maker::Function; kwargs...) = inputwrapper(children_maker(); kwargs...)


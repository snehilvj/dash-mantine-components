# AUTO GENERATED FILE - DO NOT EDIT

export textinput

"""
    textinput(;kwargs...)

A TextInput component.
Custom input with label and description. For more information, see: https://mantine.dev/core/text-input/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `description` (String; optional): Input description, displayed after label
- `disabled` (Bool; optional): The component can show it is currently unable to be interacted with
- `error` (String; optional): Displays error message after input
- `label` (String; optional): Input label, displayed before input
- `multiline` (Bool; optional): Will input have multiple lines?
- `placeholder` (String; optional): Placeholder, displayed when date is not selected
- `radius` (optional): Input border-radius from theme or number to set border-radius in px
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (optional): Input size
- `style` (Dict; optional): Inline style override
- `type` (String; optional): The type of control to render.
- `value` (a list of or a singular dash component, string or number; optional): Input value
"""
function textinput(; kwargs...)
        available_props = Symbol[:id, :className, :description, :disabled, :error, :label, :multiline, :placeholder, :radius, :required, :size, :style, :type, :value]
        wild_props = Symbol[]
        return Component("textinput", "TextInput", "dash_mantine_components", available_props, wild_props; kwargs...)
end


# AUTO GENERATED FILE - DO NOT EDIT

export multiselect

"""
    multiselect(;kwargs...)

A MultiSelect component.
Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `clearable` (Bool; optional): Allow to clear value
- `description` (String; optional): Input description, displayed after label
- `disabled` (Bool; optional): The component can show it is currently unable to be interacted with
- `error` (String; optional): Displays error message after input
- `label` (String; optional): Input label, displayed before input
- `limit` (Real; optional): Limit amount of items displayed at a time for searchable select
- `maxDropdownHeight` (Real; optional): Maximum dropdown height in px
- `nothingFound` (String; optional): Nothing found label
- `options` (optional): Select options used to renderer items in dropdown
- `placeholder` (String; optional): Placeholder, displayed when date is not selected
- `radius` (optional): Input border-radius from theme or number to set border-radius in px
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `searchable` (Bool; optional): Set to true to enable search
- `size` (optional): Input size
- `style` (Dict; optional): Inline style override
- `value` (Array of Strings; optional): Selected value
"""
function multiselect(; kwargs...)
        available_props = Symbol[:id, :className, :clearable, :description, :disabled, :error, :label, :limit, :maxDropdownHeight, :nothingFound, :options, :placeholder, :radius, :required, :searchable, :size, :style, :value]
        wild_props = Symbol[]
        return Component("multiselect", "MultiSelect", "dash_mantine_components", available_props, wild_props; kwargs...)
end


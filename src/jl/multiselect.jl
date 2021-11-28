# AUTO GENERATED FILE - DO NOT EDIT

export multiselect

"""
    multiselect(;kwargs...)

A MultiSelect component.
Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `clearSearchOnBlur` (Bool; optional): Clear search field value on blur
- `clearSearchOnChange` (Bool; optional): Clear search value when item is selected
- `clearable` (Bool; optional): Allow to clear value
- `data` (optional): Select options used to renderer items in dropdown
- `description` (String; optional): Input description, displayed after label
- `disabled` (Bool; optional): The component can show it is currently unable to be interacted with
- `error` (String; optional): Displays error message after input
- `initiallyOpened` (Bool; optional): Initial dropdown opened state
- `label` (String; optional): Input label, displayed before input
- `limit` (Real; optional): Limit amount of items displayed at a time for searchable select
- `maxDropdownHeight` (Real; optional): Maximum dropdown height in px
- `maxSelectedValues` (Real; optional): Limit amount of items selected
- `multiline` (Bool; optional): Will input have multiple lines?
- `nothingFound` (String; optional): Nothing found label
- `placeholder` (String; optional): Placeholder, displayed when date is not selected
- `radius` (optional): Input border-radius from theme or number to set border-radius in px
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `searchable` (Bool; optional): Set to true to enable search
- `shadow` (optional): Dropdown shadow from theme or any value to set box-shadow
- `size` (optional): Input size
- `style` (Dict; optional): Inline style override
- `value` (Array of Strings; optional): Selected value
- `zIndex` (Real; optional): Dropdown z-index
"""
function multiselect(; kwargs...)
        available_props = Symbol[:id, :className, :clearSearchOnBlur, :clearSearchOnChange, :clearable, :data, :description, :disabled, :error, :initiallyOpened, :label, :limit, :maxDropdownHeight, :maxSelectedValues, :multiline, :nothingFound, :placeholder, :radius, :required, :searchable, :shadow, :size, :style, :value, :zIndex]
        wild_props = Symbol[]
        return Component("multiselect", "MultiSelect", "dash_mantine_components", available_props, wild_props; kwargs...)
end


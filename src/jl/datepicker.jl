# AUTO GENERATED FILE - DO NOT EDIT

export datepicker

"""
    datepicker(;kwargs...)

A DatePicker component.
Capture date input from user
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `clearable` (Bool; optional): Allow to clear value
- `date` (String; optional): Selected date
- `description` (String; optional): Input description, displayed after label
- `disabled` (Bool; optional): A Datepicker can show it is currently unable to be interacted with
- `dropdownType` (a value equal to: "modal", "popover"; optional): Where to show calendar in modal or popover
- `format` (String; optional): DatePicker display format
- `initialMonth` (String; optional): Initial selected month
- `label` (String; optional): Input label, displayed before input
- `maxDate` (String; optional): Maximum possible date
- `minDate` (String; optional): Minimum possible date
- `placeholder` (String; optional): Placeholder, displayed when date is not selected
- `radius` (optional): Input border-radius from theme or number to set border-radius in px
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (optional): Input size
- `style` (Dict; optional): Inline style override
- `withSelect` (Bool; optional): Replace calendar label with month and year selects
- `yearsRange` (optional): Years range for year select. yearsRange has the following type: lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (Real; optional)
  - `to` (Real; optional)
- `zIndex` (Real; optional): Popper zIndex
"""
function datepicker(; kwargs...)
        available_props = Symbol[:id, :className, :clearable, :date, :description, :disabled, :dropdownType, :format, :initialMonth, :label, :maxDate, :minDate, :placeholder, :radius, :required, :size, :style, :withSelect, :yearsRange, :zIndex]
        wild_props = Symbol[]
        return Component("datepicker", "DatePicker", "dash_mantine_components", available_props, wild_props; kwargs...)
end


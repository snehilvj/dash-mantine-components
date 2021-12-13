# AUTO GENERATED FILE - DO NOT EDIT

export datepicker

"""
    datepicker(;kwargs...)

A DatePicker component.
Capture date input from user
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `allowFreeInput` (Bool; optional): Allow free input
- `amountOfMonths` (Real; optional): Amount of displayed months
- `className` (String; optional): Often used with CSS to style elements with common properties
- `clearable` (Bool; optional): Allow to clear value
- `closeCalendarOnChange` (Bool; optional): Set to false to force dropdown to stay open after date was selected
- `closeDropdownOnScroll` (Bool; optional): Set to true to disable dropdown closing on scroll
- `date` (String; optional): Selected date
- `description` (String; optional): Input description, displayed after label
- `disableOutsideEvents` (Bool; optional): When true dates that are outside of given month cannot be clicked or focused
- `disabled` (Bool; optional): A Datepicker can show it is currently unable to be interacted with
- `dropdownType` (a value equal to: "modal", "popover"; optional): Where to show calendar in modal or popover
- `error` (String; optional): Displays error message after input
- `firstDayOfWeek` (a value equal to: "sunday", "monday"; optional): Set first day of the week
- `format` (String; optional): DatePicker display format
- `fullWidth` (Bool; optional): Set to true to make calendar take 100% of container width
- `hideWeekdays` (Bool; optional): Set to false to remove weekdays row
- `initialMonth` (String; optional): Initial selected month
- `initiallyOpened` (Bool; optional): Control initial dropdown opened state
- `label` (String; optional): Input label, displayed before input
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (String; optional): Locale used for all labels formatting
- `maxDate` (String; optional): Maximum possible date
- `minDate` (String; optional): Minimum possible date
- `multiline` (Bool; optional): Will input have multiple lines?
- `placeholder` (String; optional): Placeholder, displayed when date is not selected
- `preventFocus` (Bool; optional): Prevent focusing upon clicking
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Input border-radius from theme or number to set border-radius in px
- `required` (Bool; optional): Adds red asterisk on the right side of label
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Input size
- `style` (Dict; optional): Inline style override
- `variant` (a value equal to: "default", "filled", "unstyled", "headless"; optional): Defines input appearance, defaults to default in light color scheme and filled in dark
- `withSelect` (Bool; optional): Replace calendar label with month and year selects
- `yearsRange` (optional): Years range for year select. yearsRange has the following type: lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (Real; optional)
  - `to` (Real; optional)
- `zIndex` (Real; optional): Popper zIndex
"""
function datepicker(; kwargs...)
        available_props = Symbol[:id, :allowFreeInput, :amountOfMonths, :className, :clearable, :closeCalendarOnChange, :closeDropdownOnScroll, :date, :description, :disableOutsideEvents, :disabled, :dropdownType, :error, :firstDayOfWeek, :format, :fullWidth, :hideWeekdays, :initialMonth, :initiallyOpened, :label, :loading_state, :locale, :maxDate, :minDate, :multiline, :placeholder, :preventFocus, :radius, :required, :size, :style, :variant, :withSelect, :yearsRange, :zIndex]
        wild_props = Symbol[]
        return Component("datepicker", "DatePicker", "dash_mantine_components", available_props, wild_props; kwargs...)
end


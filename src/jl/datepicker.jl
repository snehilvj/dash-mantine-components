# AUTO GENERATED FILE - DO NOT EDIT

export datepicker

"""
    datepicker(;kwargs...)

A DatePicker component.
Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `allowFreeInput` (Bool; optional): Allow free input
- `allowLevelChange` (Bool; optional): Allow to change level (date – month – year)
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
- `fixOnBlur` (Bool; optional): call onChange with last valid value onBlur
- `focusable` (Bool; optional): Should focusable days have tabIndex={0}?
- `format` (String; optional): DatePicker display format
- `fullWidth` (Bool; optional): Set to true to make calendar take 100% of container width
- `hideWeekdays` (Bool; optional): Set to false to remove weekdays row
- `initialLevel` (a value equal to: "date", "month", "year"; optional): Initial date selection level
- `initialMonth` (String; optional): Initial selected month
- `initiallyOpened` (Bool; optional): Control initial dropdown opened state
- `label` (String; optional): Input label, displayed before input
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
- `withinPortal` (Bool; optional): Whether to render the dropdown in a Portal
- `zIndex` (Real; optional): Popper zIndex
"""
function datepicker(; kwargs...)
        available_props = Symbol[:id, :allowFreeInput, :allowLevelChange, :amountOfMonths, :className, :clearable, :closeCalendarOnChange, :closeDropdownOnScroll, :date, :description, :disableOutsideEvents, :disabled, :dropdownType, :error, :firstDayOfWeek, :fixOnBlur, :focusable, :format, :fullWidth, :hideWeekdays, :initialLevel, :initialMonth, :initiallyOpened, :label, :locale, :maxDate, :minDate, :multiline, :placeholder, :preventFocus, :radius, :required, :size, :style, :variant, :withinPortal, :zIndex]
        wild_props = Symbol[]
        return Component("datepicker", "DatePicker", "dash_mantine_components", available_props, wild_props; kwargs...)
end


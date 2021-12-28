# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DatePicker(Component):
    """A DatePicker component.
Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- allowFreeInput (boolean; optional):
    Allow free input.

- allowLevelChange (boolean; optional):
    Allow to change level (date – month – year).

- amountOfMonths (number; optional):
    Amount of displayed months.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- clearable (boolean; optional):
    Allow to clear value.

- closeCalendarOnChange (boolean; optional):
    Set to False to force dropdown to stay open after date was
    selected.

- closeDropdownOnScroll (boolean; optional):
    Set to True to disable dropdown closing on scroll.

- date (string; optional):
    Selected date.

- description (string; optional):
    Input description, displayed after label.

- disableOutsideEvents (boolean; optional):
    When True dates that are outside of given month cannot be clicked
    or focused.

- disabled (boolean; optional):
    A Datepicker can show it is currently unable to be interacted
    with.

- dropdownType (a value equal to: "modal", "popover"; optional):
    Where to show calendar in modal or popover.

- error (string; optional):
    Displays error message after input.

- firstDayOfWeek (a value equal to: "sunday", "monday"; optional):
    Set first day of the week.

- fixOnBlur (boolean; optional):
    call onChange with last valid value onBlur.

- focusable (boolean; optional):
    Should focusable days have tabIndex={0}?.

- format (string; optional):
    DatePicker display format.

- fullWidth (boolean; optional):
    Set to True to make calendar take 100% of container width.

- hideWeekdays (boolean; optional):
    Set to False to remove weekdays row.

- initialLevel (a value equal to: "date", "month", "year"; optional):
    Initial date selection level.

- initialMonth (string; optional):
    Initial selected month.

- initiallyOpened (boolean; optional):
    Control initial dropdown opened state.

- label (string; optional):
    Input label, displayed before input.

- locale (string; optional):
    Locale used for all labels formatting.

- maxDate (string; optional):
    Maximum possible date.

- minDate (string; optional):
    Minimum possible date.

- multiline (boolean; optional):
    Will input have multiple lines?.

- placeholder (string; default "Select a date"):
    Placeholder, displayed when date is not selected.

- preventFocus (boolean; optional):
    Prevent focusing upon clicking.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Input border-radius from theme or number to set border-radius in
    px.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Input size.

- style (dict; default { width: "200px" }):
    Inline style override.

- variant (a value equal to: "default", "filled", "unstyled", "headless"; optional):
    Defines input appearance, defaults to default in light color
    scheme and filled in dark.

- withinPortal (boolean; optional):
    Whether to render the dropdown in a Portal.

- zIndex (number; optional):
    Popper zIndex."""
    @_explicitize_args
    def __init__(self, allowFreeInput=Component.UNDEFINED, allowLevelChange=Component.UNDEFINED, amountOfMonths=Component.UNDEFINED, className=Component.UNDEFINED, clearable=Component.UNDEFINED, closeCalendarOnChange=Component.UNDEFINED, closeDropdownOnScroll=Component.UNDEFINED, date=Component.UNDEFINED, description=Component.UNDEFINED, disableOutsideEvents=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownType=Component.UNDEFINED, error=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, fixOnBlur=Component.UNDEFINED, focusable=Component.UNDEFINED, format=Component.UNDEFINED, fullWidth=Component.UNDEFINED, hideWeekdays=Component.UNDEFINED, id=Component.UNDEFINED, initialLevel=Component.UNDEFINED, initialMonth=Component.UNDEFINED, initiallyOpened=Component.UNDEFINED, label=Component.UNDEFINED, locale=Component.UNDEFINED, maxDate=Component.UNDEFINED, minDate=Component.UNDEFINED, multiline=Component.UNDEFINED, placeholder=Component.UNDEFINED, preventFocus=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, withinPortal=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowFreeInput', 'allowLevelChange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'fixOnBlur', 'focusable', 'format', 'fullWidth', 'hideWeekdays', 'initialLevel', 'initialMonth', 'initiallyOpened', 'label', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withinPortal', 'zIndex']
        self._type = 'DatePicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowFreeInput', 'allowLevelChange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'fixOnBlur', 'focusable', 'format', 'fullWidth', 'hideWeekdays', 'initialLevel', 'initialMonth', 'initiallyOpened', 'label', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withinPortal', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DatePicker, self).__init__(**args)

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateRangePicker(Component):
    """A DateRangePicker component.
Capture date input from user. For more information, see: https://mantine.dev/dates/date-range-picker/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- allowSingleDateInRange (boolean; optional):
    Allow one date to be selected as range.

- amountOfMonths (number; optional):
    Amount of displayed months.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- clearable (boolean; default False):
    Allow to clear value.

- closeCalendarOnChange (boolean; optional):
    Set to False to force dropdown to stay open after date was
    selected.

- closeDropdownOnScroll (boolean; optional):
    Set to True to disable dropdown closing on scroll.

- dates (list of strings; optional):
    Selected date.

- description (string; optional):
    Input description, displayed after label.

- disableOutsideDayStyle (boolean; optional):
    When True dates that are outside of given month are not styled.

- disableOutsideEvents (boolean; optional):
    When True dates that are outside of given month cannot be clicked
    or focused.

- disabled (boolean; optional):
    A DateRangePicker can show it is currently unable to be interacted
    with.

- dropdownType (a value equal to: "modal", "popover"; optional):
    Where to show calendar in modal or popover.

- error (string; optional):
    Displays error message after input.

- firstDayOfWeek (a value equal to: "sunday", "monday"; optional):
    Set first day of the week.

- format (string; optional):
    DateRangePicker display format.

- fullWidth (boolean; optional):
    Set to True to make calendar take 100% of container width.

- hideWeekdays (boolean; optional):
    Set to False to remove weekdays row.

- initialMonth (string; optional):
    Initial selected month.

- initiallyOpened (boolean; optional):
    Control initial dropdown opened state.

- label (string; optional):
    Input label, displayed before input.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (string; optional):
    Locale used for all labels formatting.

- maxDate (string; optional):
    Maximum possible date.

- minDate (string; optional):
    Minimum possible date.

- multiline (boolean; optional):
    Will input have multiple lines?.

- placeholder (string; default "Select a date range"):
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

- style (dict; default { width: "350px" }):
    Inline style override.

- variant (a value equal to: "default", "filled", "unstyled", "headless"; optional):
    Defines input appearance, defaults to default in light color
    scheme and filled in dark.

- withSelect (boolean; optional):
    Replace calendar label with month and year selects.

- yearsRange (dict; optional):
    Years range for year select.

    `yearsRange` is a dict with keys:

    - from (number; optional)

    - to (number; optional)

- zIndex (number; optional):
    Popper zIndex."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, allowSingleDateInRange=Component.UNDEFINED, amountOfMonths=Component.UNDEFINED, clearable=Component.UNDEFINED, closeCalendarOnChange=Component.UNDEFINED, closeDropdownOnScroll=Component.UNDEFINED, description=Component.UNDEFINED, disableOutsideDayStyle=Component.UNDEFINED, disableOutsideEvents=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownType=Component.UNDEFINED, error=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, fullWidth=Component.UNDEFINED, hideWeekdays=Component.UNDEFINED, format=Component.UNDEFINED, initialMonth=Component.UNDEFINED, initiallyOpened=Component.UNDEFINED, label=Component.UNDEFINED, locale=Component.UNDEFINED, loading_state=Component.UNDEFINED, maxDate=Component.UNDEFINED, minDate=Component.UNDEFINED, multiline=Component.UNDEFINED, placeholder=Component.UNDEFINED, preventFocus=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, withSelect=Component.UNDEFINED, yearsRange=Component.UNDEFINED, zIndex=Component.UNDEFINED, dates=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideDayStyle', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'format', 'fullWidth', 'hideWeekdays', 'initialMonth', 'initiallyOpened', 'label', 'loading_state', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withSelect', 'yearsRange', 'zIndex']
        self._type = 'DateRangePicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideDayStyle', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'format', 'fullWidth', 'hideWeekdays', 'initialMonth', 'initiallyOpened', 'label', 'loading_state', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withSelect', 'yearsRange', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DateRangePicker, self).__init__(**args)

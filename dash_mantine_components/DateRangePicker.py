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

- disableOutsideEvents (boolean; optional):
    When True dates that are outside of given month cannot be clicked
    or focused.

- disabled (boolean; optional):
    A DateRangePicker can show it is currently unable to be interacted
    with.

- dropdownType (a value equal to: "modal", "popover"; optional):
    Where to show calendar in modal or popover.

- firstDayOfWeek (a value equal to: "sunday", "monday"; optional):
    Set first day of the week.

- format (string; optional):
    DateRangePicker display format.

- initialMonth (string; optional):
    Initial selected month.

- initiallyOpened (boolean; optional):
    Control initial dropdown opened state.

- label (string; optional):
    Input label, displayed before input.

- maxDate (string; optional):
    Maximum possible date.

- minDate (string; optional):
    Minimum possible date.

- placeholder (string; default "Select a date range"):
    Placeholder, displayed when date is not selected.

- preventFocus (boolean; optional):
    Prevent focusing upon clicking.

- radius (optional):
    Input border-radius from theme or number to set border-radius in
    px.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- size (optional):
    Input size.

- style (dict; default { width: "350px" }):
    Inline style override.

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
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, allowSingleDateInRange=Component.UNDEFINED, amountOfMonths=Component.UNDEFINED, clearable=Component.UNDEFINED, closeCalendarOnChange=Component.UNDEFINED, closeDropdownOnScroll=Component.UNDEFINED, description=Component.UNDEFINED, disableOutsideEvents=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownType=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, format=Component.UNDEFINED, initialMonth=Component.UNDEFINED, initiallyOpened=Component.UNDEFINED, label=Component.UNDEFINED, maxDate=Component.UNDEFINED, minDate=Component.UNDEFINED, placeholder=Component.UNDEFINED, preventFocus=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, withSelect=Component.UNDEFINED, yearsRange=Component.UNDEFINED, zIndex=Component.UNDEFINED, dates=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'maxDate', 'minDate', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex']
        self._type = 'DateRangePicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'maxDate', 'minDate', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex']
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

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DatePicker(Component):
    """A DatePicker component.
Capture date input from user

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- allowFreeInput (boolean; optional):
    Allow free input.

- amountOfMonths (number; optional):
    Amount of displayed months.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- clearable (boolean; optional):
    Allow to clear value.

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

- firstDayOfWeek (a value equal to: "sunday", "monday"; optional):
    Set first day of the week.

- format (string; optional):
    DatePicker display format.

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

- multiline (boolean; optional):
    Will input have multiple lines?.

- placeholder (string; default "Select a date"):
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

- style (dict; default { width: "200px" }):
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
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, allowFreeInput=Component.UNDEFINED, amountOfMonths=Component.UNDEFINED, clearable=Component.UNDEFINED, description=Component.UNDEFINED, disableOutsideEvents=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownType=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, format=Component.UNDEFINED, initialMonth=Component.UNDEFINED, initiallyOpened=Component.UNDEFINED, label=Component.UNDEFINED, maxDate=Component.UNDEFINED, minDate=Component.UNDEFINED, multiline=Component.UNDEFINED, placeholder=Component.UNDEFINED, preventFocus=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, withSelect=Component.UNDEFINED, yearsRange=Component.UNDEFINED, zIndex=Component.UNDEFINED, date=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowFreeInput', 'amountOfMonths', 'className', 'clearable', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex']
        self._type = 'DatePicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowFreeInput', 'amountOfMonths', 'className', 'clearable', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex']
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

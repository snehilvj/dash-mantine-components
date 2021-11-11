# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DatePicker(Component):
    """A DatePicker component.
Capture date input from user

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- clearable (boolean; default False):
    Allow to clear value.

- date (string; optional):
    Selected date.

- description (string; optional):
    Input description, displayed after label.

- disabled (boolean; optional):
    A Datepicker can show it is currently unable to be interacted
    with.

- dropdownType (a value equal to: "modal", "popover"; optional):
    Where to show calendar in modal or popover.

- format (string; optional):
    DatePicker display format.

- initialMonth (string; optional):
    Initial selected month.

- label (string; optional):
    Input label, displayed before input.

- maxDate (string; optional):
    Maximum possible date.

- minDate (string; optional):
    Minimum possible date.

- placeholder (string; default "Select a date"):
    Placeholder, displayed when date is not selected.

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

    - to (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, clearable=Component.UNDEFINED, description=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownType=Component.UNDEFINED, format=Component.UNDEFINED, initialMonth=Component.UNDEFINED, label=Component.UNDEFINED, maxDate=Component.UNDEFINED, minDate=Component.UNDEFINED, placeholder=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, withSelect=Component.UNDEFINED, yearsRange=Component.UNDEFINED, date=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'clearable', 'date', 'description', 'disabled', 'dropdownType', 'format', 'initialMonth', 'label', 'maxDate', 'minDate', 'placeholder', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange']
        self._type = 'DatePicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'clearable', 'date', 'description', 'disabled', 'dropdownType', 'format', 'initialMonth', 'label', 'maxDate', 'minDate', 'placeholder', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange']
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

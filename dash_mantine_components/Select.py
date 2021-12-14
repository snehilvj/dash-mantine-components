# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Select(Component):
    """A Select component.
Custom searchable select. For more information, see: https://mantine.dev/core/select/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- clearable (boolean; optional):
    Allow to clear value.

- data (list of dicts; optional):
    Select options used to renderer items in dropdown.

    `data` is a list of dicts with keys:

    - disabled (boolean; optional):
        If True, this option is disabled and cannot be selected.

    - label (string; required):
        The option's label.

    - value (string; required):
        Option's value.

- description (string; optional):
    Input description, displayed after label.

- disabled (boolean; optional):
    The component can show it is currently unable to be interacted
    with.

- dropdownPosition (a value equal to: "bottom", "top", "flip"; optional):
    Dropdown positioning behavior.

- error (string; optional):
    Displays error message after input.

- initiallyOpened (boolean; optional):
    Initial dropdown opened state.

- label (string; optional):
    Input label, displayed before input.

- limit (number; optional):
    Limit amount of items displayed at a time for searchable select.

- maxDropdownHeight (number; optional):
    Maximum dropdown height in px.

- multiline (boolean; optional):
    Will input have multiple lines?.

- nothingFound (string; default "No match found"):
    Nothing found label.

- placeholder (string; default "Select item"):
    Placeholder, displayed when date is not selected.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Input border-radius from theme or number to set border-radius in
    px.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- searchable (boolean; default True):
    Set to True to enable search.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Input size.

- style (dict; optional):
    Inline style override.

- value (string; optional):
    Selected value.

- withinPortal (boolean; optional):
    Whether to render the dropdown in a Portal.

- zIndex (number; optional):
    Dropdown z-index."""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, clearable=Component.UNDEFINED, data=Component.UNDEFINED, description=Component.UNDEFINED, disabled=Component.UNDEFINED, dropdownPosition=Component.UNDEFINED, error=Component.UNDEFINED, id=Component.UNDEFINED, initiallyOpened=Component.UNDEFINED, label=Component.UNDEFINED, limit=Component.UNDEFINED, maxDropdownHeight=Component.UNDEFINED, multiline=Component.UNDEFINED, nothingFound=Component.UNDEFINED, placeholder=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, searchable=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, value=Component.UNDEFINED, withinPortal=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'clearable', 'data', 'description', 'disabled', 'dropdownPosition', 'error', 'initiallyOpened', 'label', 'limit', 'maxDropdownHeight', 'multiline', 'nothingFound', 'placeholder', 'radius', 'required', 'searchable', 'size', 'style', 'value', 'withinPortal', 'zIndex']
        self._type = 'Select'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'clearable', 'data', 'description', 'disabled', 'dropdownPosition', 'error', 'initiallyOpened', 'label', 'limit', 'maxDropdownHeight', 'multiline', 'nothingFound', 'placeholder', 'radius', 'required', 'searchable', 'size', 'style', 'value', 'withinPortal', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Select, self).__init__(**args)

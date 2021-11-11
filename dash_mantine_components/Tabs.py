# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tabs(Component):
    """A Tabs component.
Switch between different views. For more information, see: https://mantine.dev/core/tabs/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    <Tab /> components only.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- active (number; optional):
    Index of active tab, overrides internal state.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (optional):
    Active tab color from theme.colors.

- grow (boolean; optional):
    True if tabs should take all available space.

- orientation (optional):
    Controls tab orientation.

- position (optional):
    Tab controls position.

- tabPadding (optional):
    Controls tab content padding-top.

- variant (a value equal to: "default", "outline", "pills"; optional):
    Controls appearance."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, grow=Component.UNDEFINED, orientation=Component.UNDEFINED, position=Component.UNDEFINED, tabPadding=Component.UNDEFINED, variant=Component.UNDEFINED, active=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'active', 'className', 'color', 'grow', 'orientation', 'position', 'tabPadding', 'variant']
        self._type = 'Tabs'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'active', 'className', 'color', 'grow', 'orientation', 'position', 'tabPadding', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tabs, self).__init__(children=children, **args)

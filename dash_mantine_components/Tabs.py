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

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Active tab color from theme.colors.

- grow (boolean; optional):
    True if tabs should take all available space.

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

- orientation (a value equal to: "horizontal", "vertical"; optional):
    Controls tab orientation.

- position (a value equal to: "right", "center", "left", "apart"; optional):
    Tab controls position.

- tabPadding (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Controls tab content padding-top.

- variant (a value equal to: "default", "outline", "pills"; optional):
    Controls appearance."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, grow=Component.UNDEFINED, loading_state=Component.UNDEFINED, orientation=Component.UNDEFINED, position=Component.UNDEFINED, tabPadding=Component.UNDEFINED, variant=Component.UNDEFINED, active=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'active', 'className', 'color', 'grow', 'loading_state', 'orientation', 'position', 'tabPadding', 'variant']
        self._type = 'Tabs'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'active', 'className', 'color', 'grow', 'loading_state', 'orientation', 'position', 'tabPadding', 'variant']
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

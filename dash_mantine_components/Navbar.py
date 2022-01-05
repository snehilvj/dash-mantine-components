# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Navbar(Component):
    """A Navbar component.
Navbar. For more information, see: https://mantine.dev/core/app-shell/

Keyword arguments:

- children (string; optional):
    Navbar content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- fixed (boolean; optional):
    Changes position to fixed, controlled by AppShell component if
    rendered inside.

- height (string | number; optional):
    Navbar height.

- hidden (boolean; optional):
    Set to True to hide breakpoint at hiddenBreakpoint.

- hiddenBreakpoint (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Breakpoint at which navbar will be hidden if hidden prop is True.

- padding (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Navbar padding from theme.spacing or number to set padding in px.

- position (dict; optional):
    Control top, left, right or bottom position values, controlled by
    AppShell component if rendered inside.

    `position` is a dict with keys:

    - bottom (number; optional)

    - left (number; optional)

    - right (number; optional)

    - top (number; optional)

- style (dict; optional):
    Inline style override.

- width (dict; optional):
    Navbar width with breakpoints.

- zIndex (number; optional):
    z-index."""
    @_explicitize_args
    def __init__(self, children=None, class_name=Component.UNDEFINED, height=Component.UNDEFINED, hiddenBreakpoint=Component.UNDEFINED, hidden=Component.UNDEFINED, id=Component.UNDEFINED, padding=Component.UNDEFINED, fixed=Component.UNDEFINED, position=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'fixed', 'height', 'hidden', 'hiddenBreakpoint', 'padding', 'position', 'style', 'width', 'zIndex']
        self._type = 'Navbar'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'fixed', 'height', 'hidden', 'hiddenBreakpoint', 'padding', 'position', 'style', 'width', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Navbar, self).__init__(children=children, **args)

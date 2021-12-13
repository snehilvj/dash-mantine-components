# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Badge(Component):
    """A Badge component.
Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/

Keyword arguments:

- children (string; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Badge color from theme.

- fullWidth (boolean; optional):
    Sets badge width to 100% of parent element, hides overflow text
    with text-overflow: ellipsis.

- gradient (dict; optional):
    Controls gradient settings in gradient variant only.

    `gradient` is a dict with keys:

    - deg (number; optional)

    - from (string; required)

    - to (string; required)

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Predefined border-radius value from theme.radius or number for
    border-radius in px.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined badge size.

- style (dict; optional):
    Inline style override.

- variant (a value equal to: "light", "filled", "outline", "dot", "gradient"; optional):
    Controls badge background, color and border styles."""
    @_explicitize_args
    def __init__(self, children=None, color=Component.UNDEFINED, className=Component.UNDEFINED, fullWidth=Component.UNDEFINED, gradient=Component.UNDEFINED, id=Component.UNDEFINED, radius=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'color', 'fullWidth', 'gradient', 'radius', 'size', 'style', 'variant']
        self._type = 'Badge'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'color', 'fullWidth', 'gradient', 'radius', 'size', 'style', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Badge, self).__init__(children=children, **args)

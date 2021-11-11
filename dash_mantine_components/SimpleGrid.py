# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SimpleGrid(Component):
    """A SimpleGrid component.
Responsive grid where each item takes equal amount of space. For more information, see: https://mantine.dev/core/simple-grid/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    <Col /> components only.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- breakpoints (dict; optional):
    Breakpoints data to change items per row and spacing based on
    max-width.

    `breakpoints` is a dict with keys:

    - cols (number; required)

    - maxWidth (number; required)

    - spacing (optional)

- className (string; optional):
    Often used with CSS to style elements with common properties.

- cols (number; required):
    Default amount of columns, used when none of breakpoints can be
    applied.

- spacing (optional):
    Default spacing between columns, used when none of breakpoints can
    be applied."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, breakpoints=Component.UNDEFINED, cols=Component.REQUIRED, spacing=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'breakpoints', 'className', 'cols', 'spacing']
        self._type = 'SimpleGrid'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'breakpoints', 'className', 'cols', 'spacing']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['cols']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SimpleGrid, self).__init__(children=children, **args)

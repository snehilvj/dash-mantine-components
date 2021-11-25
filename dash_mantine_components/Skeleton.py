# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Skeleton(Component):
    """A Skeleton component.
Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- circle (boolean; optional):
    If Skeleton is a circle, it's width and border-radius will be
    equal to height.

- height (optional):
    Skeleton height.

- radius (optional):
    Radius from theme.radius or number to set border-radius in px.

- visible (boolean; optional):
    Should skeleton overlay be displayed.

- width (optional):
    Skeleton width."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, circle=Component.UNDEFINED, height=Component.UNDEFINED, radius=Component.UNDEFINED, visible=Component.UNDEFINED, width=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'circle', 'height', 'radius', 'visible', 'width']
        self._type = 'Skeleton'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'circle', 'height', 'radius', 'visible', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Skeleton, self).__init__(children=children, **args)

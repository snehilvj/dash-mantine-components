# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Title(Component):
    """A Title component.
h1-h6 headings. For more information, see: https://mantine.dev/core/title/

Keyword arguments:

- children (string; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- align (a value equal to: "left", "right", "center"; optional):
    Sets text-align css property.

- className (string; optional):
    Often used with CSS to style elements with common properties.

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

- order (number; optional):
    Defines component and styles which will be used.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, align=Component.UNDEFINED, loading_state=Component.UNDEFINED, order=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'align', 'className', 'loading_state', 'order', 'style']
        self._type = 'Title'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'align', 'className', 'loading_state', 'order', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Title, self).__init__(children=children, **args)

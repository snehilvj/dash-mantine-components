# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.
Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Button color from theme.

- compact (boolean; optional):
    Reduces vertical and horizontal spacing.

- disabled (boolean; optional):
    The component can show it is currently unable to be interacted
    with.

- fullWidth (boolean; optional):
    Sets button width to 100% of parent element.

- gradient (dict; optional):
    Controls gradient settings in gradient variant only.

    `gradient` is a dict with keys:

    - deg (number; optional)

    - from (string; required)

    - to (string; required)

- loaderPosition (a value equal to: "left", "right"; optional):
    Loader position relative to button label.

- loading (boolean; default False):
    Indicate loading state.

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

- n_clicks (number; default 0):
    An integer that represents the number of times that this element
    has been clicked on.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Button border-radius from theme or number to set border-radius in
    px.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined button size.

- style (dict; optional):
    Inline style override.

- uppercase (boolean; optional):
    Set text-transform to uppercase.

- variant (a value equal to: "link", "filled", "outline", "light", "gradient", "white", "default"; optional):
    Controls button appearance."""
    @_explicitize_args
    def __init__(self, children=None, color=Component.UNDEFINED, className=Component.UNDEFINED, compact=Component.UNDEFINED, disabled=Component.UNDEFINED, fullWidth=Component.UNDEFINED, gradient=Component.UNDEFINED, id=Component.UNDEFINED, loaderPosition=Component.UNDEFINED, loading=Component.UNDEFINED, loading_state=Component.UNDEFINED, n_clicks=Component.UNDEFINED, radius=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, uppercase=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'color', 'compact', 'disabled', 'fullWidth', 'gradient', 'loaderPosition', 'loading', 'loading_state', 'n_clicks', 'radius', 'size', 'style', 'uppercase', 'variant']
        self._type = 'Button'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'color', 'compact', 'disabled', 'fullWidth', 'gradient', 'loaderPosition', 'loading', 'loading_state', 'n_clicks', 'radius', 'size', 'style', 'uppercase', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Button, self).__init__(children=children, **args)

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Progress(Component):
    """A Progress component.
Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Progress color from theme.

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

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Predefined progress radius from theme.radius or number for height
    in px.

- sections (list of dicts; optional):
    Replaces value if present, renders multiple sections instead of
    single one.

    `sections` is a list of dicts with keys:

    - color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)

    - value (number; optional)

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined progress height or number for height in px.

- striped (boolean; optional):
    Adds stripes.

- value (number; optional):
    Current value for controlled slider."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, loading_state=Component.UNDEFINED, radius=Component.UNDEFINED, size=Component.UNDEFINED, sections=Component.UNDEFINED, striped=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'loading_state', 'radius', 'sections', 'size', 'striped', 'value']
        self._type = 'Progress'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'loading_state', 'radius', 'sections', 'size', 'striped', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Progress, self).__init__(**args)
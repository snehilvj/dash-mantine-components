# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Modal(Component):
    """A Modal component.
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/modal/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content that should be centered vertically and horizontally.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- hideCloseButton (boolean; optional):
    Hides close button, modal still can be closed with escape key and
    by clicking outside.

- opened (boolean; default False):
    Mounts modal if True.

- overflow (a value equal to: "inside", "outside"; optional):
    Control vertical overflow behavior.

- padding (optional):
    Modal padding from theme or number value for padding in px.

- size (number | string; optional):
    Modal body width.

- style (dict; optional):
    Inline style override.

- title (string; optional):
    Modal title, displayed in header before close button.

- zIndex (number; optional):
    Popper zIndex."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, hideCloseButton=Component.UNDEFINED, opened=Component.UNDEFINED, overflow=Component.UNDEFINED, padding=Component.UNDEFINED, size=Component.UNDEFINED, title=Component.UNDEFINED, zIndex=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'hideCloseButton', 'opened', 'overflow', 'padding', 'size', 'style', 'title', 'zIndex']
        self._type = 'Modal'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'hideCloseButton', 'opened', 'overflow', 'padding', 'size', 'style', 'title', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Modal, self).__init__(children=children, **args)

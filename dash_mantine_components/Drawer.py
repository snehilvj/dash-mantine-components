# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Drawer(Component):
    """A Drawer component.
Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Drawer children components.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- hideCloseButton (boolean; optional):
    Hides close button, modal still can be closed with escape key and
    by clicking outside.

- noCloseOnClickOutside (boolean; optional):
    Disable onClock trigger for outside events.

- noCloseOnEscape (boolean; default True):
    Disable onClock trigger for escape key press.

- noFocusTrap (boolean; default True):
    Disables focus trap.

- noOverlay (boolean; optional):
    Removes overlay entirely.

- noScrollLock (boolean; optional):
    Disables scroll lock.

- opened (boolean; default False):
    If True drawer is mounted to the dom.

- overlayColor (string; optional):
    Sets overlay color, defaults to theme.black in light theme and to
    theme.colors.dark[9] in dark theme.

- overlayOpacity (number; optional):
    Sets overlay opacity, defaults to 0.75 in light theme and to 0.85
    in dark theme.

- padding (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Drawer body padding from theme or number for padding in px.

- position (a value equal to: "left", "right", "top", "bottom"; optional):
    Drawer body position.

- size (a value equal to: "xs", "sm", "md", "lg", "xl" | string | number; optional):
    Drawer body width (right | left position) or height (top | bottom
    position), cannot exceed 100vh for height and 100% for width.

- title (string; optional):
    Drawer title, displayed in header before close button.

- zIndex (number; optional):
    Popper zIndex."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, hideCloseButton=Component.UNDEFINED, id=Component.UNDEFINED, noCloseOnClickOutside=Component.UNDEFINED, noCloseOnEscape=Component.UNDEFINED, noFocusTrap=Component.UNDEFINED, noOverlay=Component.UNDEFINED, noScrollLock=Component.UNDEFINED, opened=Component.UNDEFINED, overlayColor=Component.UNDEFINED, overlayOpacity=Component.UNDEFINED, padding=Component.UNDEFINED, position=Component.UNDEFINED, size=Component.UNDEFINED, title=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'hideCloseButton', 'noCloseOnClickOutside', 'noCloseOnEscape', 'noFocusTrap', 'noOverlay', 'noScrollLock', 'opened', 'overlayColor', 'overlayOpacity', 'padding', 'position', 'size', 'title', 'zIndex']
        self._type = 'Drawer'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'hideCloseButton', 'noCloseOnClickOutside', 'noCloseOnEscape', 'noFocusTrap', 'noOverlay', 'noScrollLock', 'opened', 'overlayColor', 'overlayOpacity', 'padding', 'position', 'size', 'title', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Drawer, self).__init__(children=children, **args)

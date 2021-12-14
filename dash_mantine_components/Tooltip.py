# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tooltip(Component):
    """A Tooltip component.
Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Any react node that should trigger tooltip.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- arrowSize (number; optional):
    Arrow size in px.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Any color from theme.colors, defaults to gray in light color
    scheme and dark in dark colors scheme.

- delay (number; optional):
    Close delay in ms, 0 to disable delay.

- disabled (boolean; optional):
    True to disable tooltip.

- gutter (number; optional):
    Spacing between element and popper in px.

- label (string; required):
    Tooltip content.

- placement (a value equal to: "center", "end", "start"; optional):
    Placement relative to reference element.

- position (a value equal to: "right", "center", "left", "apart"; optional):
    Position relative to reference element.

- style (dict; optional):
    Inline style override.

- width (number | a value equal to: "auto"; optional):
    Tooltip width in px or auto.

- withArrow (boolean; optional):
    Renders arrow if True.

- withinPortal (boolean; optional):
    Whether to render the target element in a Portal.

- wrapLines (boolean; optional):
    Allow multiline tooltip content.

- zIndex (number; optional):
    Popper z-index."""
    @_explicitize_args
    def __init__(self, children=None, arrowSize=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, delay=Component.UNDEFINED, disabled=Component.UNDEFINED, gutter=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.REQUIRED, placement=Component.UNDEFINED, position=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, withArrow=Component.UNDEFINED, withinPortal=Component.UNDEFINED, wrapLines=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'arrowSize', 'className', 'color', 'delay', 'disabled', 'gutter', 'label', 'placement', 'position', 'style', 'width', 'withArrow', 'withinPortal', 'wrapLines', 'zIndex']
        self._type = 'Tooltip'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'arrowSize', 'className', 'color', 'delay', 'disabled', 'gutter', 'label', 'placement', 'position', 'style', 'width', 'withArrow', 'withinPortal', 'wrapLines', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tooltip, self).__init__(children=children, **args)

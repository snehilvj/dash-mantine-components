# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ScrollArea(Component):
    """A ScrollArea component.
A port of the ScrollArea component. For more information, see: https://mantine.dev/core/table/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    ScrollArea children.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- dir (a value equal to: "ltr", "rtl"; default "ltr"):
    Reading direction of the scroll area.

- offsetScrollbars (boolean; default False):
    Should scrollbars be offset with padding.

- scrollHideDelay (number; default 1000):
    Scroll hide delay in ms, for scroll and hover types only.

- scrollbarSize (number; default 12):
    Scrollbar size in px.

- style (dict; optional):
    Inline style override.

- type (a value equal to: "auto", "scroll", "always", "hover"; default "hover"):
    Scrollbars type."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, dir=Component.UNDEFINED, id=Component.UNDEFINED, offsetScrollbars=Component.UNDEFINED, scrollHideDelay=Component.UNDEFINED, scrollbarSize=Component.UNDEFINED, style=Component.UNDEFINED, type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'dir', 'offsetScrollbars', 'scrollHideDelay', 'scrollbarSize', 'style', 'type']
        self._type = 'ScrollArea'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'dir', 'offsetScrollbars', 'scrollHideDelay', 'scrollbarSize', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ScrollArea, self).__init__(children=children, **args)

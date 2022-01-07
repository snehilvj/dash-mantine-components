# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Text(Component):
    """A Text component.
Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- align (a value equal to: "left", "right", "center"; optional):
    Sets text-align css property.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange", "dimmed"; optional):
    Text color from theme.

- gradient (dict; optional):
    Controls gradient settings in gradient variant only.

    `gradient` is a dict with keys:

    - deg (number; optional)

    - from (string; required)

    - to (string; required)

- inherit (boolean; optional):
    Inherit font properties from parent element.

- inline (boolean; optional):
    Sets line-height to 1 for centering.

- lineClamp (number; optional):
    CSS -webkit-line-clamp property.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined font-size from theme.fontSizes.

- style (dict; optional):
    Inline style override.

- transform (a value equal to: "capitalize", "uppercase", "lowercase"; optional):
    Sets text-transform css property.

- variant (a value equal to: "link", "gradient", "text"; optional):
    Link or text variant.

- weight (a value equal to: "normal", "bold", "bolder", "lighter", "initial", "inherit" | number; optional):
    Sets font-weight css property."""
    @_explicitize_args
    def __init__(self, children=None, align=Component.UNDEFINED, class_name=Component.UNDEFINED, color=Component.UNDEFINED, gradient=Component.UNDEFINED, id=Component.UNDEFINED, inherit=Component.UNDEFINED, inline=Component.UNDEFINED, lineClamp=Component.UNDEFINED, size=Component.UNDEFINED, transform=Component.UNDEFINED, variant=Component.UNDEFINED, weight=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'align', 'class_name', 'color', 'gradient', 'inherit', 'inline', 'lineClamp', 'size', 'style', 'transform', 'variant', 'weight']
        self._type = 'Text'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'align', 'class_name', 'color', 'gradient', 'inherit', 'inline', 'lineClamp', 'size', 'style', 'transform', 'variant', 'weight']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Text, self).__init__(children=children, **args)

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Image(Component):
    """An Image component.
Image with optional placeholder for loading and error state. For more information, see: https://mantine.dev/core/image/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- alt (string; optional):
    Image alt text, used as title for placeholder if image was not
    loaded.

- caption (string; optional):
    Image figcaption, displayed bellow image.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- fit (a value equal to: "cover", "contain"; optional):
    Image object-fit property.

- height (string | number; optional):
    Image height, defaults to original image height adjusted to given
    width.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Predefined border-radius value from theme.radius or number for
    border-radius in px.

- src (string; optional):
    Image src.

- style (dict; optional):
    Inline style override.

- width (string | number; optional):
    Image width, defaults to 100%, cannot exceed 100%.

- withPlaceholder (boolean; optional):
    Enable placeholder when image is loading and when image fails to
    load."""
    @_explicitize_args
    def __init__(self, alt=Component.UNDEFINED, caption=Component.UNDEFINED, className=Component.UNDEFINED, fit=Component.UNDEFINED, height=Component.UNDEFINED, id=Component.UNDEFINED, radius=Component.UNDEFINED, src=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, withPlaceholder=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alt', 'caption', 'className', 'fit', 'height', 'radius', 'src', 'style', 'width', 'withPlaceholder']
        self._type = 'Image'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alt', 'caption', 'className', 'fit', 'height', 'radius', 'src', 'style', 'width', 'withPlaceholder']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Image, self).__init__(**args)

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AccordionItem(Component):
    """An AccordionItem component.
Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Accordion content.

- description (string; optional):
    Accordion description.

- label (string; required):
    Accordion label."""
    @_explicitize_args
    def __init__(self, children=None, description=Component.UNDEFINED, label=Component.REQUIRED, **kwargs):
        self._prop_names = ['children', 'description', 'label']
        self._type = 'AccordionItem'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'description', 'label']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AccordionItem, self).__init__(children=children, **args)

# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Accordion(Component):
    """An Accordion component.
Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    <AccordionItem /> components only.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- disableIconRotation (boolean; optional):
    Should icon rotation be disabled.

- iconPosition (a value equal to: "right", "left"; optional):
    Change icon position: left or right.

- initialItem (number; optional):
    Index of item which is initially opened (uncontrolled component).

- multiple (boolean; optional):
    Allow multiple items to be opened at the same time."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, disableIconRotation=Component.UNDEFINED, iconPosition=Component.UNDEFINED, initialItem=Component.UNDEFINED, multiple=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'disableIconRotation', 'iconPosition', 'initialItem', 'multiple']
        self._type = 'Accordion'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'disableIconRotation', 'iconPosition', 'initialItem', 'multiple']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Accordion, self).__init__(children=children, **args)

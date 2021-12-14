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

- multiple (boolean; optional):
    Allow multiple items to be opened at the same time.

- offsetIcon (boolean; optional):
    Should icon be offset with padding, applicable only when
    iconPosition is left.

- state (dict with strings as keys and values of type boolean; optional):
    Controlled state (controls opened state of accordion items)."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, disableIconRotation=Component.UNDEFINED, iconPosition=Component.UNDEFINED, id=Component.UNDEFINED, multiple=Component.UNDEFINED, offsetIcon=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'disableIconRotation', 'iconPosition', 'multiple', 'offsetIcon', 'state']
        self._type = 'Accordion'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'disableIconRotation', 'iconPosition', 'multiple', 'offsetIcon', 'state']
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

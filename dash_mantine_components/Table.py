# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Table(Component):
    """A Table component.
A simple table component. For more information, see: https://mantine.dev/core/table/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- caption (string; optional):
    Table description.

- captionSide (a value equal to: "bottom", "top"; default "bottom"):
    Table caption position.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- columns (list of strings; optional):
    Table columns.

- highlightOnHover (boolean; optional):
    If True row will have hover color.

- rows (list of lists; optional):
    Table rows.

- striped (boolean; optional):
    If True every odd row of table will have gray background color.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, caption=Component.UNDEFINED, captionSide=Component.UNDEFINED, class_name=Component.UNDEFINED, columns=Component.UNDEFINED, id=Component.UNDEFINED, highlightOnHover=Component.UNDEFINED, rows=Component.UNDEFINED, striped=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'caption', 'captionSide', 'class_name', 'columns', 'highlightOnHover', 'rows', 'striped', 'style']
        self._type = 'Table'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'caption', 'captionSide', 'class_name', 'columns', 'highlightOnHover', 'rows', 'striped', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Table, self).__init__(**args)

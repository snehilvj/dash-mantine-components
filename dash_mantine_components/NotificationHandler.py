# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NotificationHandler(Component):
    """A NotificationHandler component.
Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- task (dict; optional):
    Task for notification handler along with notification props.

    `task` is a dict with keys:

    - command (a value equal to: "hide", "show", "update"; required)

    - id (string; required)

    - props (dict; optional)

        `props` is a dict with keys:

        - autoClose (number | a value equal to: false; optional)

        - color (string; optional)

        - disallowClose (boolean; optional)

        - loading (boolean; optional)

        - message (string; optional)

        - style (dict; optional)

        - title (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, task=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'task']
        self._type = 'NotificationHandler'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'task']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NotificationHandler, self).__init__(**args)

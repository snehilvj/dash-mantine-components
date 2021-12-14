# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Prism(Component):
    """A Prism component.
Code highlight with Mantine theme colors and styles. For more information, see: https://mantine.dev/others/prism/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- code (string; required):
    Code which will be highlighted.

- colorScheme (a value equal to: "light", "dark"; optional):
    Force color scheme, defaults to theme.colorScheme.

- copiedLabel (string; optional):
    Copy button tooltip in copied state.

- copyLabel (string; optional):
    Copy button tooltip.

- highlightLines (dict; optional):
    Highlight line at given line number with color from theme.colors.

    `highlightLines` is a dict with strings as keys and values of type
    dict with keys:

    - color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)

    - label (string; optional)

- language (a value equal to: "markup", "bash", "clike", "c", "cpp", "css", "javascript", "jsx", "coffeescript", "actionscript", "css-extr", "diff", "git", "go", "graphql", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "tsx", "typescript", "wasm", "yaml"; required):
    Programming language that should be highlighted.

- noCopy (boolean; optional):
    True to remove copy to clipboard button.

- style (dict; optional):
    Inline style override.

- withLineNumbers (boolean; optional):
    Display line numbers."""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, code=Component.REQUIRED, colorScheme=Component.UNDEFINED, copiedLabel=Component.UNDEFINED, copyLabel=Component.UNDEFINED, highlightLines=Component.UNDEFINED, id=Component.UNDEFINED, language=Component.REQUIRED, noCopy=Component.UNDEFINED, style=Component.UNDEFINED, withLineNumbers=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'code', 'colorScheme', 'copiedLabel', 'copyLabel', 'highlightLines', 'language', 'noCopy', 'style', 'withLineNumbers']
        self._type = 'Prism'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'code', 'colorScheme', 'copiedLabel', 'copyLabel', 'highlightLines', 'language', 'noCopy', 'style', 'withLineNumbers']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['code', 'language']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Prism, self).__init__(**args)

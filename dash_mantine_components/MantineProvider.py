# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.types import NumberType  # noqa: F401
except ImportError:
    # Backwards compatibility for dash<=4.1.0
    if typing.TYPE_CHECKING:
        raise
    NumberType = typing.Union[  # noqa: F401
        typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
    ]

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]


class MantineProvider(Component):
    """A MantineProvider component.
antineProvider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Your application.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- classNamesPrefix (string; optional):
    A prefix for components static classes (for example
    {selector}-Text-root), `mantine` by default.

- colorSchemeManager (dict; optional):
    Used to retrieve/set color scheme value in external storage, by
    default uses `window.localStorage`.

    `colorSchemeManager` is a dict with keys:

    - get (required):
        Function to retrieve color scheme value from external storage,
        for example window.localStorage.

    - set (required):
        Function to set color scheme value in external storage, for
        example window.localStorage.

    - subscribe (required):
        Function to subscribe to color scheme changes triggered by
        external events.

    - unsubscribe (required):
        Function to unsubscribe from color scheme changes triggered by
        external events.

    - clear (required):
        Function to clear value from external storage.

- cssVariablesResolver (dict; optional):
    Function to generate CSS variables based on theme object.

    `cssVariablesResolver` is a dict with keys:


- cssVariablesSelector (string; optional):
    CSS selector to which CSS variables should be added, by default
    variables are applied to `:root` and `:host`.

- deduplicateCssVariables (boolean; optional):
    Determines whether CSS variables should be deduplicated: if CSS
    variable has the same value as in default theme, it is not added
    in the runtime. @,default,True.

- deduplicateInlineStyles (boolean; optional):
    Determines whether inline styles with identical content should be
    deduplicated using React 19 style hoisting. When enabled,
    components with the same responsive style props share a single
    `<style />` tag instead of each generating their own.
    @,default,False.

- defaultColorScheme (a value equal to: 'light', 'dark', 'auto'; optional):
    Default color scheme value used when `colorSchemeManager` cannot
    retrieve value from external storage, `light` by default.

- env (a value equal to: 'default', 'test'; optional):
    Environment at which the provider is used, `'test'` environment
    disables all transitions and portals.

- forceColorScheme (a value equal to: 'light', 'dark'; optional):
    Forces color scheme value, if set, MantineProvider ignores
    `colorSchemeManager` and `defaultColorScheme`.

- getRootElement (boolean | number | string | dict | list; optional):
    Function to resolve root element to set
    `data-mantine-color-scheme` attribute, must return undefined on
    server, `() => document.documentElement` by default.

- getStyleNonce (boolean | number | string | dict | list; optional):
    getStyleNonce is a function to generate
    [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce)
    attribute added to dynamic generated `<style />` tags.

- stylesTransform (dict; optional):
    An object to transform `styles` and `sx` props into css classes,
    can be used with CSS-in-JS libraries.

    `stylesTransform` is a dict with keys:

    - sx (optional)

    - styles (optional)

- theme (list; optional):
    Theme override object.

- useV8CssVariablesResolver (boolean; optional):
    Whether to use the Mantine v8 CSS variables resolver for
    compatibility  with Mantine v8.

- withCssVariables (boolean; optional):
    Determines whether theme CSS variables should be added to given
    `cssVariablesSelector` @,default,True.

- withGlobalClasses (boolean; optional):
    Determines whether global classes should be added with `<style />`
    tag. Global classes are required for `hiddenFrom`/`visibleFrom`
    and `lightHidden`/`darkHidden` props to work. @,default,True.

- withStaticClasses (boolean; optional):
    Determines whether components should have static classes, for
    example, `mantine-Button-root`. @,default,True."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'MantineProvider'
    ColorSchemeManager = TypedDict(
        "ColorSchemeManager",
            {
            "get": typing.Any,
            "set": typing.Any,
            "subscribe": typing.Any,
            "unsubscribe": typing.Any,
            "clear": typing.Any
        }
    )

    CssVariablesResolver = TypedDict(
        "CssVariablesResolver",
            {

        }
    )

    StylesTransform = TypedDict(
        "StylesTransform",
            {
            "sx": NotRequired[typing.Any],
            "styles": NotRequired[typing.Any]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        getStyleNonce: typing.Optional[typing.Any] = None,
        getRootElement: typing.Optional[typing.Any] = None,
        useV8CssVariablesResolver: typing.Optional[bool] = None,
        theme: typing.Optional[typing.Sequence] = None,
        colorSchemeManager: typing.Optional["ColorSchemeManager"] = None,
        defaultColorScheme: typing.Optional[Literal["light", "dark", "auto"]] = None,
        forceColorScheme: typing.Optional[Literal["light", "dark"]] = None,
        cssVariablesSelector: typing.Optional[str] = None,
        withCssVariables: typing.Optional[bool] = None,
        deduplicateCssVariables: typing.Optional[bool] = None,
        classNamesPrefix: typing.Optional[str] = None,
        cssVariablesResolver: typing.Optional["CssVariablesResolver"] = None,
        withStaticClasses: typing.Optional[bool] = None,
        withGlobalClasses: typing.Optional[bool] = None,
        stylesTransform: typing.Optional["StylesTransform"] = None,
        deduplicateInlineStyles: typing.Optional[bool] = None,
        env: typing.Optional[Literal["default", "test"]] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'classNamesPrefix', 'colorSchemeManager', 'cssVariablesResolver', 'cssVariablesSelector', 'deduplicateCssVariables', 'deduplicateInlineStyles', 'defaultColorScheme', 'env', 'forceColorScheme', 'getRootElement', 'getStyleNonce', 'stylesTransform', 'theme', 'useV8CssVariablesResolver', 'withCssVariables', 'withGlobalClasses', 'withStaticClasses']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'classNamesPrefix', 'colorSchemeManager', 'cssVariablesResolver', 'cssVariablesSelector', 'deduplicateCssVariables', 'deduplicateInlineStyles', 'defaultColorScheme', 'env', 'forceColorScheme', 'getRootElement', 'getStyleNonce', 'stylesTransform', 'theme', 'useV8CssVariablesResolver', 'withCssVariables', 'withGlobalClasses', 'withStaticClasses']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(MantineProvider, self).__init__(children=children, **args)

setattr(MantineProvider, "__init__", _explicitize_args(MantineProvider.__init__))

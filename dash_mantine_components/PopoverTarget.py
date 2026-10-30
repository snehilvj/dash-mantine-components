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


class PopoverTarget(Component):
    """A PopoverTarget component.
PopoverTarget

Keyword arguments:

- children (a list of or a singular dash component, string or number; required):
    Content.

- boxWrapperProps (dict; optional):
    Target box wrapper props.

    `boxWrapperProps` is a dict with keys:

    - hiddenFrom (string; optional):
        Breakpoint above which the component is hidden with `display:
        none`.

    - visibleFrom (string; optional):
        Breakpoint below which the component is hidden with `display:
        none`.

    - mod (string | dict | list of string | dicts; optional):
        Element modifiers transformed into `data-` attributes.  For
        example: \"xl\" or {\"data-size\": \"xl\"}.  Can also be a
        list of strings or dicts for multiple modifiers.  Falsy values
        are removed.

    - m (string | number | dict; optional):
        Margin – Accepts theme spacing keys, CSS values, or a dict for
        responsive styles.

    - my (string | number | dict; optional):
        Margin block – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - mx (string | number | dict; optional):
        Margin inline – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - mt (string | number | dict; optional):
        Margin top – Accepts theme spacing keys, CSS values, or a dict
        for responsive styles.

    - mb (string | number | dict; optional):
        Margin bottom – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - ms (string | number | dict; optional):
        Margin inline start – Accepts theme spacing keys, CSS values,
        or a dict for responsive styles.

    - me (string | number | dict; optional):
        Margin inline end – Accepts theme spacing keys, CSS values, or
        a dict for responsive styles.

    - ml (string | number | dict; optional):
        Margin left – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - mr (string | number | dict; optional):
        Margin right – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - p (string | number | dict; optional):
        Padding – Accepts theme spacing keys, CSS values, or a dict
        for responsive styles.

    - py (string | number | dict; optional):
        Padding block – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - px (string | number | dict; optional):
        Padding inline – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - pt (string | number | dict; optional):
        Padding top – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - pb (string | number | dict; optional):
        Padding bottom – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - ps (string | number | dict; optional):
        Padding inline start – Accepts theme spacing keys, CSS values,
        or a dict for responsive styles.

    - pe (string | number | dict; optional):
        Padding inline end – Accepts theme spacing keys, CSS values,
        or a dict for responsive styles.

    - pl (string | number | dict; optional):
        Padding left – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - pr (string | number | dict; optional):
        Padding right – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - bd (string | number | dict; optional):
        Border – Accepts CSS values or a dict for responsive styles.

    - bdrs (string | number | dict; optional):
        Border radius – Accepts theme radius keys, CSS values, or a
        dict for responsive styles.

    - bg (string | dict; optional):
        Background – Accepts theme color keys, CSS values, or a dict
        for responsive styles.

    - c (string | dict; optional):
        Color – Accepts theme color keys, CSS values, or a dict for
        responsive styles.

    - opacity (string | number | dict; optional):
        Opacity – Accepts CSS values or a dict for responsive styles.

    - ff (string | dict; optional):
        Font family – Accepts CSS values or a dict for responsive
        styles.

    - fz (string | number | dict; optional):
        Font size – Accepts theme font size keys, CSS values, or a
        dict for responsive styles.

    - fw (number | dict; optional):
        Font weight – Accepts CSS values or a dict for responsive
        styles.

    - lts (string | number | dict; optional):
        Letter spacing – Accepts CSS values or a dict for responsive
        styles.

    - ta (dict; optional):
        Text align – Accepts CSS values or a dict for responsive
        styles.

    - lh (string | number | dict; optional):
        Line height – Accepts theme line height keys, CSS values, or a
        dict for responsive styles.

    - fs (dict; optional):
        Font style – Accepts CSS values or a dict for responsive
        styles.

    - tt (dict; optional):
        Text transform – Accepts CSS values or a dict for responsive
        styles.

    - td (string | number | dict; optional):
        Text decoration – Accepts CSS values or a dict for responsive
        styles.

    - w (string | number | dict; optional):
        Width – Accepts theme spacing keys, CSS values, or a dict for
        responsive styles.

    - miw (string | number | dict; optional):
        Minimum width – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - maw (string | number | dict; optional):
        Maximum width – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - h (string | number | dict; optional):
        Height – Accepts theme spacing keys, CSS values, or a dict for
        responsive styles.

    - mih (string | number | dict; optional):
        Minimum height – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - mah (string | number | dict; optional):
        Maximum height – Accepts theme spacing keys, CSS values, or a
        dict for responsive styles.

    - bgsz (string | number | dict; optional):
        Background size – Accepts CSS values or a dict for responsive
        styles.

    - bgp (string | number | dict; optional):
        Background position – Accepts CSS values or a dict for
        responsive styles.

    - bgr (dict; optional):
        Background repeat – Accepts CSS values or a dict for
        responsive styles.

    - bga (dict; optional):
        Background attachment – Accepts CSS values or a dict for
        responsive styles.

    - pos (dict; optional):
        Position – Accepts CSS values or a dict for responsive styles.

    - top (string | number | dict; optional):
        Top offset – Accepts CSS values or a dict for responsive
        styles.

    - left (string | number | dict; optional):
        Left offset – Accepts CSS values or a dict for responsive
        styles.

    - bottom (string | number | dict; optional):
        Bottom offset – Accepts CSS values or a dict for responsive
        styles.

    - right (string | number | dict; optional):
        Right offset – Accepts CSS values or a dict for responsive
        styles.

    - inset (string | number | dict; optional):
        Inset – Accepts CSS values or a dict for responsive styles.

    - display (dict; optional):
        Display – Accepts CSS values or a dict for responsive styles.

    - flex (string | number | dict; optional):
        Flex – Accepts CSS values or a dict for responsive styles.

    - className (string; optional):
        Class added to the root element, if applicable.

    - style (optional):
        Inline style added to root component element, can subscribe to
        theme defined on MantineProvider.

    - lightHidden (boolean; optional):
        Determines whether component should be hidden in light color
        scheme with `display: none`.

    - darkHidden (boolean; optional):
        Determines whether component should be hidden in dark color
        scheme with `display: none`.

    - mis (number; optional):
        MarginInlineStart, theme key: theme.spacing.

    - mie (number; optional):
        MarginInlineEnd, theme key: theme.spacing.

    - pis (number; optional):
        PaddingInlineStart, theme key: theme.spacing.

    - pie (number; optional):
        PaddingInlineEnd, theme key: theme.spacing."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'PopoverTarget'
    BoxWrapperProps = TypedDict(
        "BoxWrapperProps",
            {
            "hiddenFrom": NotRequired[str],
            "visibleFrom": NotRequired[str],
            "mod": NotRequired[typing.Union[str, dict, typing.Sequence[typing.Union[str, dict]]]],
            "m": NotRequired[typing.Union[str, NumberType, dict]],
            "my": NotRequired[typing.Union[str, NumberType, dict]],
            "mx": NotRequired[typing.Union[str, NumberType, dict]],
            "mt": NotRequired[typing.Union[str, NumberType, dict]],
            "mb": NotRequired[typing.Union[str, NumberType, dict]],
            "ms": NotRequired[typing.Union[str, NumberType, dict]],
            "me": NotRequired[typing.Union[str, NumberType, dict]],
            "ml": NotRequired[typing.Union[str, NumberType, dict]],
            "mr": NotRequired[typing.Union[str, NumberType, dict]],
            "p": NotRequired[typing.Union[str, NumberType, dict]],
            "py": NotRequired[typing.Union[str, NumberType, dict]],
            "px": NotRequired[typing.Union[str, NumberType, dict]],
            "pt": NotRequired[typing.Union[str, NumberType, dict]],
            "pb": NotRequired[typing.Union[str, NumberType, dict]],
            "ps": NotRequired[typing.Union[str, NumberType, dict]],
            "pe": NotRequired[typing.Union[str, NumberType, dict]],
            "pl": NotRequired[typing.Union[str, NumberType, dict]],
            "pr": NotRequired[typing.Union[str, NumberType, dict]],
            "bd": NotRequired[typing.Union[str, NumberType, dict]],
            "bdrs": NotRequired[typing.Union[str, NumberType, dict]],
            "bg": NotRequired[typing.Union[str, dict]],
            "c": NotRequired[typing.Union[str, dict]],
            "opacity": NotRequired[typing.Union[str, NumberType, dict]],
            "ff": NotRequired[typing.Union[str, dict]],
            "fz": NotRequired[typing.Union[str, NumberType, dict]],
            "fw": NotRequired[typing.Union[NumberType, dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["bold"], Literal["normal"], Literal["bolder"], Literal["lighter"]]],
            "lts": NotRequired[typing.Union[str, NumberType, dict]],
            "ta": NotRequired[typing.Union[dict, Literal["right"], Literal["left"], Literal["end"], Literal["start"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["center"], Literal["-webkit-match-parent"], Literal["justify"], Literal["match-parent"]]],
            "lh": NotRequired[typing.Union[str, NumberType, dict]],
            "fs": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["normal"], Literal["italic"], Literal["oblique"]]],
            "tt": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["capitalize"], Literal["full-size-kana"], Literal["full-width"], Literal["lowercase"], Literal["uppercase"]]],
            "td": NotRequired[typing.Union[str, NumberType, dict]],
            "w": NotRequired[typing.Union[str, NumberType, dict]],
            "miw": NotRequired[typing.Union[str, NumberType, dict]],
            "maw": NotRequired[typing.Union[str, NumberType, dict]],
            "h": NotRequired[typing.Union[str, NumberType, dict]],
            "mih": NotRequired[typing.Union[str, NumberType, dict]],
            "mah": NotRequired[typing.Union[str, NumberType, dict]],
            "bgsz": NotRequired[typing.Union[str, NumberType, dict]],
            "bgp": NotRequired[typing.Union[str, NumberType, dict]],
            "bgr": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["no-repeat"], Literal["repeat"], Literal["repeat-x"], Literal["repeat-y"], Literal["round"], Literal["space"]]],
            "bga": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["local"], Literal["scroll"]]],
            "pos": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["absolute"], Literal["fixed"], Literal["-webkit-sticky"], Literal["relative"], Literal["static"], Literal["sticky"]]],
            "top": NotRequired[typing.Union[str, NumberType, dict]],
            "left": NotRequired[typing.Union[str, NumberType, dict]],
            "bottom": NotRequired[typing.Union[str, NumberType, dict]],
            "right": NotRequired[typing.Union[str, NumberType, dict]],
            "inset": NotRequired[typing.Union[str, NumberType, dict]],
            "display": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["flex"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]],
            "flex": NotRequired[typing.Union[str, NumberType, dict]],
            "className": NotRequired[str],
            "style": NotRequired[typing.Union[typing.Any]],
            "lightHidden": NotRequired[bool],
            "darkHidden": NotRequired[bool],
            "mis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "mie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "pis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "pie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        boxWrapperProps: typing.Optional["BoxWrapperProps"] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'boxWrapperProps']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'boxWrapperProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        if 'children' not in _explicit_args:
            raise TypeError('Required argument children was not specified.')

        super(PopoverTarget, self).__init__(children=children, **args)

setattr(PopoverTarget, "__init__", _explicitize_args(PopoverTarget.__init__))

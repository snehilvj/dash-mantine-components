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


class Tooltip(Component):
    """A Tooltip component.
Tooltip

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Target element, must support `ref` prop and `...others`.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- aria-* (string; optional):
    Wild card aria attributes.

- arrowOffset (number; optional):
    Arrow offset in px, `5` by default.

- arrowPosition (a value equal to: 'center', 'side', 'merge'; optional):
    Arrow position relative to the tooltip, `side` by default.

- arrowRadius (number; optional):
    Arrow `border-radius` in px, `0` by default.

- arrowSize (number; optional):
    Arrow size in px, `4` by default.

- attributes (boolean | number | string | dict | list; optional):
    Passes attributes to inner elements of a component.  See Styles
    API docs.

- autoContrast (boolean; optional):
    Determines whether tooltip text color should depend on
    background-color. If luminosity of the color prop is  less than
    theme.luminosityThreshold, then theme.white will be used for text
    color, otherwise theme.black.  Overrides theme.autoContrast.

- bd (string | number | dict; optional):
    Border – Accepts CSS values or a dict for responsive styles.

- bdrs (string | number | dict; optional):
    Border radius – Accepts theme radius keys, CSS values, or a dict
    for responsive styles.

- bg (string | dict; optional):
    Background – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- bga (dict; optional):
    Background attachment – Accepts CSS values or a dict for
    responsive styles.

- bgp (string | number | dict; optional):
    Background position – Accepts CSS values or a dict for responsive
    styles.

- bgr (dict; optional):
    Background repeat – Accepts CSS values or a dict for responsive
    styles.

- bgsz (string | number | dict; optional):
    Background size – Accepts CSS values or a dict for responsive
    styles.

- bottom (string | number | dict; optional):
    Bottom offset – Accepts CSS values or a dict for responsive
    styles.

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
        PaddingInlineEnd, theme key: theme.spacing.

- c (string | dict; optional):
    Color – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- className (string; optional):
    Class added to the root element, if applicable.

- classNames (dict; optional):
    Adds custom CSS class names to inner elements of a component.  See
    Styles API docs.

- closeDelay (number; optional):
    Close delay in ms, `0` by default.

- color (optional):
    Key of `theme.colors` or any valid CSS color, controls tooltip
    background, by default set based on current color scheme.

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data-* (string; optional):
    Wild card data attributes.

- disabled (boolean; optional):
    If set, tooltip element will not be rendered.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- events (dict; optional):
    Determines which events will be used to show tooltip, `{ hover:
    True, focus: False, touch: False }` by default.

    `events` is a dict with keys:

    - hover (boolean; required)

    - focus (boolean; required)

    - touch (boolean; required)

- ff (string | dict; optional):
    Font family – Accepts CSS values or a dict for responsive styles.

- flex (string | number | dict; optional):
    Flex – Accepts CSS values or a dict for responsive styles.

- floatingStrategy (a value equal to: 'fixed', 'absolute'; optional):
    Changes floating ui [position
    strategy](https://floating-ui.com/docs/usefloating#strategy),
    `'absolute'` by default.

- fs (dict; optional):
    Font style – Accepts CSS values or a dict for responsive styles.

- fw (number | dict; optional):
    Font weight – Accepts CSS values or a dict for responsive styles.

- fz (string | number | dict; optional):
    Font size – Accepts theme font size keys, CSS values, or a dict
    for responsive styles.

- h (string | number | dict; optional):
    Height – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- hiddenFrom (string; optional):
    Breakpoint above which the component is hidden with `display:
    none`.

- hideDetached (boolean; optional):
    If set, the tooltip is hidden when the target element is removed
    from the DOM, hidden with `display: none` or scrolled out of the
    visible area. Has no effect on `Tooltip.Floating` default True.

- inline (boolean; optional):
    Must be set if the tooltip target is an inline element.

- inset (string | number | dict; optional):
    Inset – Accepts CSS values or a dict for responsive styles.

- interactive (boolean; optional):
    If set, the tooltip stays open while the pointer is over it
    default False.

- keepMounted (boolean; optional):
    If set, the tooltip will not be unmounted from the DOM when it is
    hidden, `display: none` styles will be applied instead.

- label (a list of or a singular dash component, string or number; required):
    Tooltip content.

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- lh (string | number | dict; optional):
    Line height – Accepts theme line height keys, CSS values, or a
    dict for responsive styles.

- lightHidden (boolean; optional):
    Determines whether component should be hidden in light color
    scheme with `display: none`.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer. For use with dash<3.

    `loading_state` is a dict with keys:

    - is_loading (boolean; required):
        Determines if the component is loading or not.

    - prop_name (string; required):
        Holds which property is loading.

    - component_name (string; required):
        Holds the name of the component that is loading.

- lts (string | number | dict; optional):
    Letter spacing – Accepts CSS values or a dict for responsive
    styles.

- m (string | number | dict; optional):
    Margin – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- mah (string | number | dict; optional):
    Maximum height – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- maw (string | number | dict; optional):
    Maximum width – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mb (string | number | dict; optional):
    Margin bottom – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- me (string | number | dict; optional):
    Margin inline end – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- middlewares (dict; optional):
    Floating ui middlewares to configure position handling, `{ flip:
    True, shift: True, inline: False }` by default.

- mie (number; optional):
    MarginInlineEnd, theme key: theme.spacing.

- mih (string | number | dict; optional):
    Minimum height – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mis (number; optional):
    MarginInlineStart, theme key: theme.spacing.

- miw (string | number | dict; optional):
    Minimum width – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ml (string | number | dict; optional):
    Margin left – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mod (string | dict | list of string | dicts; optional):
    Element modifiers transformed into `data-` attributes.  For
    example: \"xl\" or {\"data-size\": \"xl\"}.  Can also be a list of
    strings or dicts for multiple modifiers.  Falsy values are
    removed.

- mr (string | number | dict; optional):
    Margin right – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ms (string | number | dict; optional):
    Margin inline start – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- mt (string | number | dict; optional):
    Margin top – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- multiline (boolean; optional):
    Determines whether content should be wrapped on to the next line,
    `False` by default.

- mx (string | number | dict; optional):
    Margin inline – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- my (string | number | dict; optional):
    Margin block – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- offset (number; optional):
    Space between target element and tooltip in px, `5` by default.
    Number or FloatingAxesOffsets.

- opacity (string | number | dict; optional):
    Opacity – Accepts CSS values or a dict for responsive styles.

- openDelay (number; optional):
    Open delay in ms.

- opened (boolean; optional):
    Controlled opened state.

- p (string | number | dict; optional):
    Padding – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- pb (string | number | dict; optional):
    Padding bottom – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- pe (string | number | dict; optional):
    Padding inline end – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- pie (number; optional):
    PaddingInlineEnd, theme key: theme.spacing.

- pis (number; optional):
    PaddingInlineStart, theme key: theme.spacing.

- pl (string | number | dict; optional):
    Padding left – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- portalProps (dict; optional):
    Props to pass down to the portal when withinPortal is True.

- pos (dict; optional):
    Position – Accepts CSS values or a dict for responsive styles.

- position (a value equal to: 'top', 'left', 'bottom', 'right', 'top-end', 'top-start', 'left-end', 'left-start', 'bottom-end', 'bottom-start', 'right-end', 'right-start'; optional):
    Tooltip position relative to target element (`Tooltip` component)
    or mouse (`Tooltip.Floating` component).

- pr (string | number | dict; optional):
    Padding right – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ps (string | number | dict; optional):
    Padding inline start – Accepts theme spacing keys, CSS values, or
    a dict for responsive styles.

- pt (string | number | dict; optional):
    Padding top – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- px (string | number | dict; optional):
    Padding inline – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- py (string | number | dict; optional):
    Padding block – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- radius (number; optional):
    Key of `theme.radius` or any valid CSS value to set border-radius,
    numbers are converted to rem, `theme.defaultRadius` by default.

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- styles (boolean | number | string | dict | list; optional):
    Adds inline styles directly to inner elements of a component.  See
    Styles API docs.

- ta (dict; optional):
    Text align – Accepts CSS values or a dict for responsive styles.

- tabIndex (number; optional):
    tab-index.

- target (string; optional):
    Selector, ref of an element or element itself that should be used
    for positioning.

- td (string | number | dict; optional):
    Text decoration – Accepts CSS values or a dict for responsive
    styles.

- top (string | number | dict; optional):
    Top offset – Accepts CSS values or a dict for responsive styles.

- transitionProps (dict; optional):
    Props passed down to the `Transition` component that used to
    animate tooltip presence, use to configure duration and animation
    type, `{ duration: 100, transition: 'fade' }` by default.

    `transitionProps` is a dict with keys:

    - keepMounted (boolean; optional):
        If set element will not be unmounted from the DOM when it is
        hidden, `display: none` styles will be applied instead.

    - transition (optional):
        Transition name or object.

    - duration (number; optional):
        Transition duration in ms, `250` by default.

    - exitDuration (number; optional):
        Exit transition duration in ms, `250` by default.

    - timingFunction (string; optional):
        Transition timing function, `theme.transitionTimingFunction`
        by default.

    - mounted (boolean; required):
        Determines whether component should be mounted to the DOM.

- tt (dict; optional):
    Text transform – Accepts CSS values or a dict for responsive
    styles.

- unstyled (boolean; optional):
    Remove all Mantine styling from the component.

- variant (string; optional):
    variant.

- visibleFrom (string; optional):
    Breakpoint below which the component is hidden with `display:
    none`.

- w (string | number | dict; optional):
    Width – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- withArrow (boolean; optional):
    Determines whether the tooltip should have an arrow, `False` by
    default.

- withinPortal (boolean; optional):
    Determines whether tooltip should be rendered within `Portal`,
    `True` by default.

- zIndex (string | number; optional):
    Tooltip z-index, `300` by default."""
    _children_props: typing.List[str] = ['label']
    _base_nodes = ['label', 'children']
    _namespace = 'dash_mantine_components'
    _type = 'Tooltip'
    TransitionProps = TypedDict(
        "TransitionProps",
            {
            "keepMounted": NotRequired[bool],
            "transition": NotRequired[typing.Union[Literal["fade"], Literal["fade-down"], Literal["fade-up"], Literal["fade-left"], Literal["fade-right"], Literal["skew-up"], Literal["skew-down"], Literal["rotate-right"], Literal["rotate-left"], Literal["slide-down"], Literal["slide-up"], Literal["slide-right"], Literal["slide-left"], Literal["scale-y"], Literal["scale-x"], Literal["scale"], Literal["pop"], Literal["pop-top-left"], Literal["pop-top-right"], Literal["pop-bottom-left"], Literal["pop-bottom-right"]]],
            "duration": NotRequired[NumberType],
            "exitDuration": NotRequired[NumberType],
            "timingFunction": NotRequired[str],
            "mounted": bool
        }
    )

    Events = TypedDict(
        "Events",
            {
            "hover": bool,
            "focus": bool,
            "touch": bool
        }
    )

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
            "ta": NotRequired[typing.Union[dict, Literal["left"], Literal["right"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["-webkit-match-parent"], Literal["center"], Literal["end"], Literal["justify"], Literal["match-parent"], Literal["start"]]],
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
            "pos": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["-webkit-sticky"], Literal["absolute"], Literal["relative"], Literal["static"], Literal["sticky"]]],
            "top": NotRequired[typing.Union[str, NumberType, dict]],
            "left": NotRequired[typing.Union[str, NumberType, dict]],
            "bottom": NotRequired[typing.Union[str, NumberType, dict]],
            "right": NotRequired[typing.Union[str, NumberType, dict]],
            "inset": NotRequired[typing.Union[str, NumberType, dict]],
            "display": NotRequired[typing.Union[dict, Literal["flex"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]],
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

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": bool,
            "prop_name": str,
            "component_name": str
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        openDelay: typing.Optional[NumberType] = None,
        closeDelay: typing.Optional[NumberType] = None,
        opened: typing.Optional[bool] = None,
        offset: typing.Optional[typing.Union[NumberType]] = None,
        withArrow: typing.Optional[bool] = None,
        arrowSize: typing.Optional[NumberType] = None,
        arrowOffset: typing.Optional[NumberType] = None,
        arrowRadius: typing.Optional[NumberType] = None,
        arrowPosition: typing.Optional[Literal["center", "side", "merge"]] = None,
        transitionProps: typing.Optional["TransitionProps"] = None,
        events: typing.Optional["Events"] = None,
        inline: typing.Optional[bool] = None,
        keepMounted: typing.Optional[bool] = None,
        floatingStrategy: typing.Optional[Literal["fixed", "absolute"]] = None,
        boxWrapperProps: typing.Optional["BoxWrapperProps"] = None,
        hideDetached: typing.Optional[bool] = None,
        interactive: typing.Optional[bool] = None,
        position: typing.Optional[Literal["top", "left", "bottom", "right", "top-end", "top-start", "left-end", "left-start", "bottom-end", "bottom-start", "right-end", "right-start"]] = None,
        label: typing.Optional[ComponentType] = None,
        withinPortal: typing.Optional[bool] = None,
        radius: typing.Optional[typing.Union[str, NumberType]] = None,
        color: typing.Optional[typing.Optional[str]] = None,
        multiline: typing.Optional[bool] = None,
        zIndex: typing.Optional[typing.Union[str, NumberType]] = None,
        disabled: typing.Optional[bool] = None,
        portalProps: typing.Optional[dict] = None,
        middlewares: typing.Optional[dict] = None,
        autoContrast: typing.Optional[bool] = None,
        target: typing.Optional[typing.Union[str]] = None,
        hiddenFrom: typing.Optional[str] = None,
        visibleFrom: typing.Optional[str] = None,
        mod: typing.Optional[typing.Union[str, dict, typing.Sequence[typing.Union[str, dict]]]] = None,
        m: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        my: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mx: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mt: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mb: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ms: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        me: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ml: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mr: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        p: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        py: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        px: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pt: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pb: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ps: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pe: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pl: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pr: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bd: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bdrs: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bg: typing.Optional[typing.Union[str, dict]] = None,
        c: typing.Optional[typing.Union[str, dict]] = None,
        opacity: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ff: typing.Optional[typing.Union[str, dict]] = None,
        fz: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        fw: typing.Optional[typing.Union[NumberType, dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["bold"], Literal["normal"], Literal["bolder"], Literal["lighter"]]] = None,
        lts: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ta: typing.Optional[typing.Union[dict, Literal["left"], Literal["right"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["-webkit-match-parent"], Literal["center"], Literal["end"], Literal["justify"], Literal["match-parent"], Literal["start"]]] = None,
        lh: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        fs: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["normal"], Literal["italic"], Literal["oblique"]]] = None,
        tt: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["capitalize"], Literal["full-size-kana"], Literal["full-width"], Literal["lowercase"], Literal["uppercase"]]] = None,
        td: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        w: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        miw: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        maw: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        h: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mih: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mah: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgsz: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgp: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgr: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["no-repeat"], Literal["repeat"], Literal["repeat-x"], Literal["repeat-y"], Literal["round"], Literal["space"]]] = None,
        bga: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["local"], Literal["scroll"]]] = None,
        pos: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["-webkit-sticky"], Literal["absolute"], Literal["relative"], Literal["static"], Literal["sticky"]]] = None,
        top: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        left: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bottom: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        right: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        inset: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        display: typing.Optional[typing.Union[dict, Literal["flex"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]] = None,
        flex: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        lightHidden: typing.Optional[bool] = None,
        darkHidden: typing.Optional[bool] = None,
        mis: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        mie: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        pis: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        pie: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        classNames: typing.Optional[dict] = None,
        styles: typing.Optional[typing.Any] = None,
        unstyled: typing.Optional[bool] = None,
        variant: typing.Optional[str] = None,
        attributes: typing.Optional[typing.Any] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'aria-*', 'arrowOffset', 'arrowPosition', 'arrowRadius', 'arrowSize', 'attributes', 'autoContrast', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'boxWrapperProps', 'c', 'className', 'classNames', 'closeDelay', 'color', 'darkHidden', 'data-*', 'disabled', 'display', 'events', 'ff', 'flex', 'floatingStrategy', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'hideDetached', 'inline', 'inset', 'interactive', 'keepMounted', 'label', 'left', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'middlewares', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'multiline', 'mx', 'my', 'offset', 'opacity', 'openDelay', 'opened', 'p', 'pb', 'pe', 'pie', 'pis', 'pl', 'portalProps', 'pos', 'position', 'pr', 'ps', 'pt', 'px', 'py', 'radius', 'right', 'style', 'styles', 'ta', 'tabIndex', 'target', 'td', 'top', 'transitionProps', 'tt', 'unstyled', 'variant', 'visibleFrom', 'w', 'withArrow', 'withinPortal', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'arrowOffset', 'arrowPosition', 'arrowRadius', 'arrowSize', 'attributes', 'autoContrast', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'boxWrapperProps', 'c', 'className', 'classNames', 'closeDelay', 'color', 'darkHidden', 'data-*', 'disabled', 'display', 'events', 'ff', 'flex', 'floatingStrategy', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'hideDetached', 'inline', 'inset', 'interactive', 'keepMounted', 'label', 'left', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'middlewares', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'multiline', 'mx', 'my', 'offset', 'opacity', 'openDelay', 'opened', 'p', 'pb', 'pe', 'pie', 'pis', 'pl', 'portalProps', 'pos', 'position', 'pr', 'ps', 'pt', 'px', 'py', 'radius', 'right', 'style', 'styles', 'ta', 'tabIndex', 'target', 'td', 'top', 'transitionProps', 'tt', 'unstyled', 'variant', 'visibleFrom', 'w', 'withArrow', 'withinPortal', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Tooltip, self).__init__(children=children, **args)

setattr(Tooltip, "__init__", _explicitize_args(Tooltip.__init__))

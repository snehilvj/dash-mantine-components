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


class LineChart(Component):
    """A LineChart component.
Mantine-themed line chart built on top of the Recharts library,

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Additional components that are rendered inside recharts
    `AreaChart` component.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- accessibilityLayer (boolean; optional):
    Determines whether the chart should be keyboard-navigable with the
    recharts accessibility layer, `True` by default.

- activeDotProps (boolean | number | string | dict | list; optional):
    Props passed down to all active dots. Ignored if
    `withDots={False}` is set.

- aria-* (string; optional):
    Wild card aria attributes.

- attributes (boolean | number | string | dict | list; optional):
    Passes attributes to inner elements of a component.  See Styles
    API docs.

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

- brushDragEnd (dict with strings as keys and values of type number; optional):
    The startIndex and endIndex  of the selected brush range when
    dragging ends. Read only.

- brushProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Brush` component.

- c (string | dict; optional):
    Color – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- className (string; optional):
    Class added to the root element, if applicable.

- classNames (dict; optional):
    Adds custom CSS class names to inner elements of a component.  See
    Styles API docs.

- clickData (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Click data.

- clickSeriesName (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Name of the series that was clicked.

- connectNulls (boolean; optional):
    Determines whether points with `None` values should be connected,
    `True` by default.

- curveType (a value equal to: 'bump', 'linear', 'natural', 'monotone', 'step', 'stepBefore', 'stepAfter'; optional):
    Type of the curve, `'monotone'` by default.

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data (list of dicts with strings as keys and values of type boolean | number | string | dict | list; required):
    Data used to display chart.

- data-* (string; optional):
    Wild card data attributes.

- dataKey (string; required):
    Key of the `data` object for x-axis values.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- dotProps (boolean | number | string | dict | list; optional):
    Props passed down to all dots. Ignored if `withDots={False}` is
    set.

- ff (string | dict; optional):
    Font family – Accepts CSS values or a dict for responsive styles.

- fillOpacity (number; optional):
    Controls fill opacity of all lines, `1` by default.

- flex (string | number | dict; optional):
    Flex – Accepts CSS values or a dict for responsive styles.

- fs (dict; optional):
    Font style – Accepts CSS values or a dict for responsive styles.

- fw (number | dict; optional):
    Font weight – Accepts CSS values or a dict for responsive styles.

- fz (string | number | dict; optional):
    Font size – Accepts theme font size keys, CSS values, or a dict
    for responsive styles.

- gradientStops (list of dicts; optional):
    Data used to generate gradient stops, [{ offset: 0, color: 'red'
    }, { offset: 100, color: 'blue' }] by default.

    `gradientStops` is a list of dicts with keys:

    - offset (number; required)

    - color (required)

- gridAxis (a value equal to: 'none', 'x', 'y', 'xy'; optional):
    Specifies which lines should be displayed in the grid, `'x'` by
    default.

- gridColor (optional):
    Color of the grid and cursor lines, by default depends on color
    scheme.

- gridProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `CartesianGrid` component.

- h (string | number | dict; optional):
    Height – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- hiddenFrom (string; optional):
    Breakpoint above which the component is hidden with `display:
    none`.

- highlightHover (boolean; optional):
    Determines whether a hovered series is highlighted. False by
    default. Mirrors the behaviour when hovering about chart legend
    items.

- hoverData (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Hover data.

- hoverSeriesName (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Name of the series that is hovered.

- inset (string | number | dict; optional):
    Inset – Accepts CSS values or a dict for responsive styles.

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- legendProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Legend` component.

- lh (string | number | dict; optional):
    Line height – Accepts theme line height keys, CSS values, or a
    dict for responsive styles.

- lightHidden (boolean; optional):
    Determines whether component should be hidden in light color
    scheme with `display: none`.

- lineChartProps (boolean | number | string | dict | list; optional):
    Props passed down to recharts `LineChart` component.

- lineProps (boolean | number | string | dict | list; optional):
    Props passed down to recharts `Line` component.

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

- mx (string | number | dict; optional):
    Margin inline – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- my (string | number | dict; optional):
    Margin block – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- opacity (string | number | dict; optional):
    Opacity – Accepts CSS values or a dict for responsive styles.

- orientation (a value equal to: 'horizontal', 'vertical'; optional):
    Chart orientation, `'horizontal'` by default.

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

- pos (dict; optional):
    Position – Accepts CSS values or a dict for responsive styles.

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

- referenceAreas (list of dicts with strings as keys and values of type boolean | number | string | dict | list; optional):
    Reference areas that should be displayed on the chart.

- referenceDots (list of dicts with strings as keys and values of type boolean | number | string | dict | list; optional):
    Reference dots that should be displayed on the chart.

- referenceLines (list of dicts with strings as keys and values of type boolean | number | string | dict | list; optional):
    Reference lines that should be displayed on the chart.

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- rightYAxisLabel (boolean | number | string | dict | list; optional):
    Props passed down to the YAxis recharts component rendered on the
    right side.

- rightYAxisProps (boolean | number | string | dict | list; optional):
    Props passed down to the YAxis recharts component rendered on the
    right side.

- series (list of dicts; required):
    An array of objects with `name` and `color` keys. Determines which
    data should be consumed from the `data` array.

    `series` is a list of dicts with keys:

    - strokeDasharray (string | number; optional)

    - curveType (a value equal to: 'bump', 'linear', 'natural', 'monotone', 'step', 'stepBefore', 'stepAfter'; optional)

    - name (string; required)

    - color (optional)

    - label (string; optional)

    - yAxisId (string; optional)

- strokeDasharray (string | number; optional):
    Dash array for the grid lines and cursor, `'5 5'` by default.

- strokeWidth (number; optional):
    Stroke width for the chart lines, `2` by default.

- styles (boolean | number | string | dict | list; optional):
    Adds inline styles directly to inner elements of a component.  See
    Styles API docs.

- ta (dict; optional):
    Text align – Accepts CSS values or a dict for responsive styles.

- tabIndex (number; optional):
    tab-index.

- td (string | number | dict; optional):
    Text decoration – Accepts CSS values or a dict for responsive
    styles.

- textColor (optional):
    Color of the text displayed inside the chart, `'dimmed'` by
    default.

- tickLine (a value equal to: 'none', 'x', 'y', 'xy'; optional):
    Specifies which axis should have tick line, `'y'` by default.

- tooltipAnimationDuration (number; optional):
    Tooltip position animation duration in ms, `0` by default.

- tooltipProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Tooltip` component.

- top (string | number | dict; optional):
    Top offset – Accepts CSS values or a dict for responsive styles.

- tt (dict; optional):
    Text transform – Accepts CSS values or a dict for responsive
    styles.

- type (a value equal to: 'default', 'gradient'; optional):
    Controls styles of the line 'default' | 'gradient'.   'default' by
    default.

- unit (string; optional):
    Unit displayed next to each tick in y-axis.

- unstyled (boolean; optional):
    Remove all Mantine styling from the component.

- valueFormatter (boolean | number | string | dict | list; optional):
    A function to format values on Y axis and inside the tooltip. See
    https://www.dash-mantine-components.com/functions-as-props.

- variant (string; optional):
    variant.

- visibleFrom (string; optional):
    Breakpoint below which the component is hidden with `display:
    none`.

- w (string | number | dict; optional):
    Width – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- withBrush (boolean; optional):
    Determines whether a brush (range selector) should be displayed
    under the chart, `False` by default.

- withDots (boolean; optional):
    Determines whether dots should be displayed, `True` by default.

- withLegend (boolean; optional):
    Determines whether chart legend should be displayed, `False` by
    default.

- withPointLabels (boolean; optional):
    Determines whether each point should have associated label, False
    by default.

- withRightYAxis (boolean; optional):
    Determines whether additional y-axis should be displayed on the
    right side of the chart, False by default.

- withTooltip (boolean; optional):
    Determines whether chart tooltip should be displayed, `True` by
    default.

- withXAxis (boolean; optional):
    Determines whether x-axis should be hidden, `True` by default.

- withYAxis (boolean; optional):
    Determines whether y-axis should be hidden, `True` by default.

- xAxisLabel (string; optional):
    A label to display below the x-axis.

- xAxisProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `XAxis` recharts component.

- yAxisLabel (string; optional):
    A label to display next to the y-axis.

- yAxisProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `YAxis` recharts component."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'LineChart'
    GradientStops = TypedDict(
        "GradientStops",
            {
            "offset": NumberType,
            "color": typing.Union[Literal["dark"], Literal["gray"], Literal["red"], Literal["pink"], Literal["grape"], Literal["violet"], Literal["indigo"], Literal["blue"], Literal["cyan"], Literal["green"], Literal["lime"], Literal["yellow"], Literal["orange"], Literal["teal"]]
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
        data: typing.Optional[typing.Sequence[typing.Dict[str, typing.Any]]] = None,
        series: typing.Optional[typing.Sequence[typing.Dict[str, typing.Any]]] = None,
        curveType: typing.Optional[Literal["bump", "linear", "natural", "monotone", "step", "stepBefore", "stepAfter"]] = None,
        fillOpacity: typing.Optional[NumberType] = None,
        withDots: typing.Optional[bool] = None,
        dotProps: typing.Optional[typing.Any] = None,
        activeDotProps: typing.Optional[typing.Any] = None,
        strokeWidth: typing.Optional[NumberType] = None,
        lineChartProps: typing.Optional[typing.Any] = None,
        lineProps: typing.Optional[typing.Any] = None,
        connectNulls: typing.Optional[bool] = None,
        clickData: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        hoverData: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        clickSeriesName: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        hoverSeriesName: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        highlightHover: typing.Optional[bool] = None,
        withPointLabels: typing.Optional[bool] = None,
        gradientStops: typing.Optional[typing.Sequence["GradientStops"]] = None,
        type: typing.Optional[Literal["default", "gradient"]] = None,
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
        dataKey: typing.Optional[str] = None,
        referenceLines: typing.Optional[typing.Sequence[typing.Dict[typing.Union[str, float, int], typing.Any]]] = None,
        withXAxis: typing.Optional[bool] = None,
        withYAxis: typing.Optional[bool] = None,
        xAxisProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        yAxisProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        gridProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        tickLine: typing.Optional[Literal["none", "x", "y", "xy"]] = None,
        strokeDasharray: typing.Optional[typing.Union[str, NumberType]] = None,
        gridAxis: typing.Optional[Literal["none", "x", "y", "xy"]] = None,
        unit: typing.Optional[str] = None,
        tooltipAnimationDuration: typing.Optional[NumberType] = None,
        legendProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        tooltipProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        withLegend: typing.Optional[bool] = None,
        withTooltip: typing.Optional[bool] = None,
        textColor: typing.Optional[typing.Optional[str]] = None,
        gridColor: typing.Optional[typing.Optional[str]] = None,
        orientation: typing.Optional[Literal["horizontal", "vertical"]] = None,
        xAxisLabel: typing.Optional[str] = None,
        yAxisLabel: typing.Optional[str] = None,
        withRightYAxis: typing.Optional[bool] = None,
        rightYAxisProps: typing.Optional[typing.Any] = None,
        rightYAxisLabel: typing.Optional[typing.Any] = None,
        valueFormatter: typing.Optional[typing.Any] = None,
        accessibilityLayer: typing.Optional[bool] = None,
        withBrush: typing.Optional[bool] = None,
        brushProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        brushDragEnd: typing.Optional[typing.Dict[typing.Union[str, float, int], NumberType]] = None,
        referenceAreas: typing.Optional[typing.Sequence[typing.Dict[typing.Union[str, float, int], typing.Any]]] = None,
        referenceDots: typing.Optional[typing.Sequence[typing.Dict[typing.Union[str, float, int], typing.Any]]] = None,
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
        self._prop_names = ['children', 'id', 'accessibilityLayer', 'activeDotProps', 'aria-*', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'brushDragEnd', 'brushProps', 'c', 'className', 'classNames', 'clickData', 'clickSeriesName', 'connectNulls', 'curveType', 'darkHidden', 'data', 'data-*', 'dataKey', 'display', 'dotProps', 'ff', 'fillOpacity', 'flex', 'fs', 'fw', 'fz', 'gradientStops', 'gridAxis', 'gridColor', 'gridProps', 'h', 'hiddenFrom', 'highlightHover', 'hoverData', 'hoverSeriesName', 'inset', 'left', 'legendProps', 'lh', 'lightHidden', 'lineChartProps', 'lineProps', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'opacity', 'orientation', 'p', 'pb', 'pe', 'pie', 'pis', 'pl', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'referenceAreas', 'referenceDots', 'referenceLines', 'right', 'rightYAxisLabel', 'rightYAxisProps', 'series', 'strokeDasharray', 'strokeWidth', 'style', 'styles', 'ta', 'tabIndex', 'td', 'textColor', 'tickLine', 'tooltipAnimationDuration', 'tooltipProps', 'top', 'tt', 'type', 'unit', 'unstyled', 'valueFormatter', 'variant', 'visibleFrom', 'w', 'withBrush', 'withDots', 'withLegend', 'withPointLabels', 'withRightYAxis', 'withTooltip', 'withXAxis', 'withYAxis', 'xAxisLabel', 'xAxisProps', 'yAxisLabel', 'yAxisProps']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'accessibilityLayer', 'activeDotProps', 'aria-*', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'brushDragEnd', 'brushProps', 'c', 'className', 'classNames', 'clickData', 'clickSeriesName', 'connectNulls', 'curveType', 'darkHidden', 'data', 'data-*', 'dataKey', 'display', 'dotProps', 'ff', 'fillOpacity', 'flex', 'fs', 'fw', 'fz', 'gradientStops', 'gridAxis', 'gridColor', 'gridProps', 'h', 'hiddenFrom', 'highlightHover', 'hoverData', 'hoverSeriesName', 'inset', 'left', 'legendProps', 'lh', 'lightHidden', 'lineChartProps', 'lineProps', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'opacity', 'orientation', 'p', 'pb', 'pe', 'pie', 'pis', 'pl', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'referenceAreas', 'referenceDots', 'referenceLines', 'right', 'rightYAxisLabel', 'rightYAxisProps', 'series', 'strokeDasharray', 'strokeWidth', 'style', 'styles', 'ta', 'tabIndex', 'td', 'textColor', 'tickLine', 'tooltipAnimationDuration', 'tooltipProps', 'top', 'tt', 'type', 'unit', 'unstyled', 'valueFormatter', 'variant', 'visibleFrom', 'w', 'withBrush', 'withDots', 'withLegend', 'withPointLabels', 'withRightYAxis', 'withTooltip', 'withXAxis', 'withYAxis', 'xAxisLabel', 'xAxisProps', 'yAxisLabel', 'yAxisProps']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['data', 'dataKey', 'series']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LineChart, self).__init__(children=children, **args)

setattr(LineChart, "__init__", _explicitize_args(LineChart.__init__))

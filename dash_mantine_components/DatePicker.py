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


class DatePicker(Component):
    """A DatePicker component.
Inline date, multiple dates and dates range picker

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- allowDeselect (boolean; optional):
    Determines whether user can deselect the date by clicking on
    selected item, applicable only when type=\"default\".

- allowSingleDateInRange (boolean; optional):
    Determines whether single year can be selected as range,
    applicable only when type=\"range\".

- aria-* (string; optional):
    Wild card aria attributes.

- ariaLabels (dict; optional):
    aria-label attributes for controls on different levels.

    `ariaLabels` is a dict with keys:

    - monthLevelControl (string; optional)

    - yearLevelControl (string; optional)

    - nextMonth (string; optional)

    - previousMonth (string; optional)

    - nextYear (string; optional)

    - previousYear (string; optional)

    - nextDecade (string; optional)

    - previousDecade (string; optional)

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

- c (string | dict; optional):
    Color – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- className (string; optional):
    Class added to the root element, if applicable.

- classNames (dict; optional):
    Adds custom CSS class names to inner elements of a component.  See
    Styles API docs.

- columnsToScroll (number; optional):
    Number of columns to scroll when user clicks next/prev buttons,
    defaults to numberOfColumns.

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data-* (string; optional):
    Wild card data attributes.

- decadeLabelFormat (string; optional):
    dayjs label format to display decade label or a function that
    returns decade label based on date value, defaults to \"YYYY\".

- defaultDate (string; optional):
    Initial displayed date.

- disabledDates (list of strings; optional):
    Specifies days that should be disabled.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- ff (string | dict; optional):
    Font family – Accepts CSS values or a dict for responsive styles.

- firstDayOfWeek (a value equal to: 0, 1, 2, 3, 4, 5, 6; optional):
    number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday.

- flex (string | number | dict; optional):
    Flex – Accepts CSS values or a dict for responsive styles.

- fs (dict; optional):
    Font style – Accepts CSS values or a dict for responsive styles.

- fullWidth (boolean; optional):
    Determines whether the calendar should take the full width of its
    container default False.

- fw (number | dict; optional):
    Font weight – Accepts CSS values or a dict for responsive styles.

- fz (string | number | dict; optional):
    Font size – Accepts theme font size keys, CSS values, or a dict
    for responsive styles.

- getDayProps (boolean | number | string | dict | list; optional):
    A function that passes props down Day component  based on date.
    (See https://www.dash-mantine-components.com/functions-as-props).

- getMonthControlProps (boolean | number | string | dict | list; optional):
    A function that passes props down month picker control based on
    date. (See
    https://www.dash-mantine-components.com/functions-as-props).

- getYearControlProps (boolean | number | string | dict | list; optional):
    A function that passes props down to year picker control based on
    date. (See
    https://www.dash-mantine-components.com/functions-as-props).

- h (string | number | dict; optional):
    Height – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- hasNextLevel (boolean; optional):
    Determines whether next level button should be enabled, defaults
    to True.

- headerControlsOrder (list of a value equal to: 'level', 'next', 'previous's; optional):
    Controls order, `['previous', 'level', 'next']`` by default.

- hiddenFrom (string; optional):
    Breakpoint above which the component is hidden with `display:
    none`.

- hideOutsideDates (boolean; optional):
    Determines whether outside dates should be hidden, defaults to
    False.

- hideWeekdays (boolean; optional):
    Determines whether weekdays row should be hidden, defaults to
    False.

- inset (string | number | dict; optional):
    Inset – Accepts CSS values or a dict for responsive styles.

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- level (a value equal to: 'month', 'year', 'decade'; optional):
    Current level displayed to the user (decade, year, month), used
    for controlled component.

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

- maxDate (string; optional):
    Maximum possible date.

- maxLevel (a value equal to: 'month', 'year', 'decade'; optional):
    Max level that user can go up to (decade, year, month), defaults
    to decade.

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

- minDate (string; optional):
    Minimum possible date.

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

- monthLabelFormat (string; optional):
    dayjs label format to display month label or a function that
    returns month label based on month value, defaults to \"MMMM
    YYYY\".

- monthsListFormat (string; optional):
    dayjs format for months list.

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

- nextIcon (a list of or a singular dash component, string or number; optional):
    Change next icon.

- nextLabel (string; optional):
    aria-label for next button.

- numberOfColumns (number; optional):
    Number of columns to render next to each other.

- opacity (string | number | dict; optional):
    Opacity – Accepts CSS values or a dict for responsive styles.

- p (string | number | dict; optional):
    Padding – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- pb (string | number | dict; optional):
    Padding bottom – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- pe (string | number | dict; optional):
    Padding inline end – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- persisted_props (list of strings; optional):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (string | number | boolean; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`. Note:
    The component must  have an `id` for persistence to work.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

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

- presets (list of dicts; optional):
    Predefined values to pick from.

    `presets` is a list of dicts with keys:

    - value (string | list of strings; required)

    - label (string; required)

- previousIcon (a list of or a singular dash component, string or number; optional):
    Change previous icon.

- previousLabel (string; optional):
    aria-label for previous button.

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

- renderDay (boolean | number | string | dict | list; optional):
    A function that controls day value rendering. (See
    https://www.dash-mantine-components.com/functions-as-props).

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- size (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl'; optional):
    Component size.

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

- top (string | number | dict; optional):
    Top offset – Accepts CSS values or a dict for responsive styles.

- tt (dict; optional):
    Text transform – Accepts CSS values or a dict for responsive
    styles.

- type (a value equal to: 'default', 'multiple', 'range'; optional):
    Picker type: range, multiple or default.

- unstyled (boolean; optional):
    Remove all Mantine styling from the component.

- value (string | list of strings; optional):
    Value for controlled component.

- variant (string; optional):
    variant.

- visibleFrom (string; optional):
    Breakpoint below which the component is hidden with `display:
    none`.

- w (string | number | dict; optional):
    Width – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- weekdayFormat (string; optional):
    dayjs format for weekdays names, defaults to \"dd\".

- weekendDays (list of a value equal to: 0, 1, 2, 3, 4, 5, 6s; optional):
    Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday,
    defaults to value defined in DatesProvider.

- withCellSpacing (boolean; optional):
    Determines whether controls should be separated by spacing, True
    by default.

- withNativeLevelSelect (boolean; optional):
    Determines whether level select controls should be rendered as
    native `<select>` elements default False.

- withWeekNumbers (boolean; optional):
    Determines whether week numbers should be displayed, False by
    default.

- yearLabelFormat (string; optional):
    dayjs label format to display year label or a function that
    returns year label based on year value, defaults to \"YYYY\".

- yearsListFormat (string; optional):
    dayjs format for years list, `'YYYY'` by default.

- yearsSelectRange (list of 2 elements: [number, number]; optional):
    Year range for native level select, tuple of `[startYear,
    endYear]`. Defaults to `[currentYear - 100, currentYear + 50]` or
    values derived from `minDate`/`maxDate` if set."""
    _children_props: typing.List[str] = ['nextIcon', 'previousIcon']
    _base_nodes = ['nextIcon', 'previousIcon', 'children']
    _namespace = 'dash_mantine_components'
    _type = 'DatePicker'
    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": bool,
            "prop_name": str,
            "component_name": str
        }
    )

    Presets = TypedDict(
        "Presets",
            {
            "value": typing.Union[str, typing.Sequence[str]],
            "label": str
        }
    )

    AriaLabels = TypedDict(
        "AriaLabels",
            {
            "monthLevelControl": NotRequired[str],
            "yearLevelControl": NotRequired[str],
            "nextMonth": NotRequired[str],
            "previousMonth": NotRequired[str],
            "nextYear": NotRequired[str],
            "previousYear": NotRequired[str],
            "nextDecade": NotRequired[str],
            "previousDecade": NotRequired[str]
        }
    )


    def __init__(
        self,
        disabledDates: typing.Optional[typing.Sequence[str]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        persistence: typing.Optional[typing.Union[str, NumberType, bool]] = None,
        persisted_props: typing.Optional[typing.Sequence[str]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
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
        ta: typing.Optional[typing.Union[dict, Literal["left"], Literal["right"], Literal["end"], Literal["start"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["center"], Literal["-webkit-match-parent"], Literal["justify"], Literal["match-parent"]]] = None,
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
        bga: typing.Optional[typing.Union[dict, Literal["local"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["scroll"]]] = None,
        pos: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["absolute"], Literal["fixed"], Literal["-webkit-sticky"], Literal["relative"], Literal["static"], Literal["sticky"]]] = None,
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
        maxLevel: typing.Optional[Literal["month", "year", "decade"]] = None,
        level: typing.Optional[Literal["month", "year", "decade"]] = None,
        presets: typing.Optional[typing.Sequence["Presets"]] = None,
        type: typing.Optional[Literal["default", "multiple", "range"]] = None,
        value: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        allowDeselect: typing.Optional[bool] = None,
        allowSingleDateInRange: typing.Optional[bool] = None,
        defaultDate: typing.Optional[str] = None,
        decadeLabelFormat: typing.Optional[str] = None,
        yearsListFormat: typing.Optional[str] = None,
        size: typing.Optional[typing.Optional[str]] = None,
        withCellSpacing: typing.Optional[bool] = None,
        getYearControlProps: typing.Optional[typing.Any] = None,
        minDate: typing.Optional[str] = None,
        maxDate: typing.Optional[str] = None,
        yearLabelFormat: typing.Optional[str] = None,
        monthsListFormat: typing.Optional[str] = None,
        getMonthControlProps: typing.Optional[typing.Any] = None,
        monthLabelFormat: typing.Optional[str] = None,
        firstDayOfWeek: typing.Optional[Literal[0, 1, 2, 3, 4, 5, 6]] = None,
        weekdayFormat: typing.Optional[str] = None,
        weekendDays: typing.Optional[typing.Sequence[Literal[0, 1, 2, 3, 4, 5, 6]]] = None,
        hideOutsideDates: typing.Optional[bool] = None,
        hideWeekdays: typing.Optional[bool] = None,
        withWeekNumbers: typing.Optional[bool] = None,
        getDayProps: typing.Optional[typing.Any] = None,
        renderDay: typing.Optional[typing.Any] = None,
        numberOfColumns: typing.Optional[NumberType] = None,
        columnsToScroll: typing.Optional[NumberType] = None,
        ariaLabels: typing.Optional["AriaLabels"] = None,
        fullWidth: typing.Optional[bool] = None,
        nextIcon: typing.Optional[ComponentType] = None,
        previousIcon: typing.Optional[ComponentType] = None,
        nextLabel: typing.Optional[str] = None,
        previousLabel: typing.Optional[str] = None,
        headerControlsOrder: typing.Optional[typing.Sequence[Literal["level", "next", "previous"]]] = None,
        withNativeLevelSelect: typing.Optional[bool] = None,
        yearsSelectRange: typing.Optional[typing.Tuple[NumberType, NumberType]] = None,
        hasNextLevel: typing.Optional[bool] = None,
        classNames: typing.Optional[dict] = None,
        styles: typing.Optional[typing.Any] = None,
        unstyled: typing.Optional[bool] = None,
        variant: typing.Optional[str] = None,
        attributes: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowDeselect', 'allowSingleDateInRange', 'aria-*', 'ariaLabels', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'columnsToScroll', 'darkHidden', 'data-*', 'decadeLabelFormat', 'defaultDate', 'disabledDates', 'display', 'ff', 'firstDayOfWeek', 'flex', 'fs', 'fullWidth', 'fw', 'fz', 'getDayProps', 'getMonthControlProps', 'getYearControlProps', 'h', 'hasNextLevel', 'headerControlsOrder', 'hiddenFrom', 'hideOutsideDates', 'hideWeekdays', 'inset', 'left', 'level', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDate', 'maxLevel', 'mb', 'me', 'mie', 'mih', 'minDate', 'mis', 'miw', 'ml', 'mod', 'monthLabelFormat', 'monthsListFormat', 'mr', 'ms', 'mt', 'mx', 'my', 'nextIcon', 'nextLabel', 'numberOfColumns', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'pos', 'pr', 'presets', 'previousIcon', 'previousLabel', 'ps', 'pt', 'px', 'py', 'renderDay', 'right', 'size', 'style', 'styles', 'ta', 'tabIndex', 'td', 'top', 'tt', 'type', 'unstyled', 'value', 'variant', 'visibleFrom', 'w', 'weekdayFormat', 'weekendDays', 'withCellSpacing', 'withNativeLevelSelect', 'withWeekNumbers', 'yearLabelFormat', 'yearsListFormat', 'yearsSelectRange']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'allowDeselect', 'allowSingleDateInRange', 'aria-*', 'ariaLabels', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'columnsToScroll', 'darkHidden', 'data-*', 'decadeLabelFormat', 'defaultDate', 'disabledDates', 'display', 'ff', 'firstDayOfWeek', 'flex', 'fs', 'fullWidth', 'fw', 'fz', 'getDayProps', 'getMonthControlProps', 'getYearControlProps', 'h', 'hasNextLevel', 'headerControlsOrder', 'hiddenFrom', 'hideOutsideDates', 'hideWeekdays', 'inset', 'left', 'level', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDate', 'maxLevel', 'mb', 'me', 'mie', 'mih', 'minDate', 'mis', 'miw', 'ml', 'mod', 'monthLabelFormat', 'monthsListFormat', 'mr', 'ms', 'mt', 'mx', 'my', 'nextIcon', 'nextLabel', 'numberOfColumns', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'pos', 'pr', 'presets', 'previousIcon', 'previousLabel', 'ps', 'pt', 'px', 'py', 'renderDay', 'right', 'size', 'style', 'styles', 'ta', 'tabIndex', 'td', 'top', 'tt', 'type', 'unstyled', 'value', 'variant', 'visibleFrom', 'w', 'weekdayFormat', 'weekendDays', 'withCellSpacing', 'withNativeLevelSelect', 'withWeekNumbers', 'yearLabelFormat', 'yearsListFormat', 'yearsSelectRange']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DatePicker, self).__init__(**args)

setattr(DatePicker, "__init__", _explicitize_args(DatePicker.__init__))

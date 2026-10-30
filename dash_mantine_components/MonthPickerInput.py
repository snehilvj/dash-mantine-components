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


class MonthPickerInput(Component):
    """A MonthPickerInput component.
MonthPickerInput

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

- clearButtonProps (dict; optional):
    Props passed down to clear button.

    `clearButtonProps` is a dict with keys:

    - size (optional):
        Size of the button, by default value is based on input
        context.

    - radius (number; optional):
        Key of `theme.radius` or any valid CSS value to set
        border-radius. Numbers are converted to rem.
        `theme.defaultRadius` by default.

    - disabled (boolean; optional):
        Sets `disabled` and `data-disabled` attributes on the button
        element.

    - iconSize (string | number; optional):
        `X` icon `width` and `height`, `80%` by default.

    - children (a list of or a singular dash component, string or number; optional):
        Content rendered inside the button, for example
        `VisuallyHidden` with label for screen readers.

    - icon (a list of or a singular dash component, string or number; optional):
        Replaces default close icon. If set, `iconSize` prop is
        ignored.

    - ButtonProps (dict; optional):
        props passed down to `Button` component *.

- clearSectionMode (a value equal to: 'rightSection', 'both', 'clear'; optional):
    Determines how the clear button and rightSection are rendered
    default 'both'.

- clearable (boolean; optional):
    Determines whether input value can be cleared, adds clear button
    to right section, False by default.

- closeOnChange (boolean; optional):
    Determines whether dropdown should be closed when date is
    selected, not applicable when type=\"multiple\", True by default.

- columnsToScroll (number; optional):
    Number of columns to scroll when user clicks next/prev buttons,
    defaults to numberOfColumns.

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data-* (string; optional):
    Wild card data attributes.

- debounce (number | boolean; default False):
    Debounce time in ms.

- decadeLabelFormat (string; optional):
    dayjs label format to display decade label or a function that
    returns decade label based on date value, defaults to \"YYYY\".

- defaultDate (string; optional):
    Initial displayed date.

- description (a list of or a singular dash component, string or number; optional):
    Contents of `Input.Description` component. If not set, description
    is not rendered.

- descriptionProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Description` component.

- disabled (boolean; optional):
    Sets `disabled` attribute on the `input` element.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- dropdownType (a value equal to: 'popover', 'modal'; optional):
    Type of dropdown, defaults to popover.

- error (a list of or a singular dash component, string or number; optional):
    Contents of `Input.Error` component. If not set, error is not
    rendered.

- errorProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Error` component.

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

- inputProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input` component.

- inputWrapperOrder (list of a value equal to: 'label', 'description', 'error', 'input's; optional):
    Controls order of the elements, `['label', 'description', 'input',
    'error']` by default.

- inset (string | number | dict; optional):
    Inset – Accepts CSS values or a dict for responsive styles.

- label (a list of or a singular dash component, string or number; optional):
    Contents of `Input.Label` component. If not set, label is not
    rendered.

- labelProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Label` component.

- labelSeparator (string; optional):
    Separator between range value.

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- leftSection (a list of or a singular dash component, string or number; optional):
    Content section rendered on the left side of the input.

- leftSectionPointerEvents (a value equal to: '-moz-initial', 'inherit', 'initial', 'revert', 'revert-layer', 'unset', 'auto', 'none', 'all', 'fill', 'painted', 'stroke', 'visible', 'visibleFill', 'visiblePainted', 'visibleStroke'; optional):
    Sets `pointer-events` styles on the `leftSection` element,
    `'none'` by default.

- leftSectionProps (dict; optional):
    Props passed down to the `leftSection` element.

- leftSectionWidth (string | number; optional):
    Left section width, used to set `width` of the section and input
    `padding-left`, by default equals to the input height.

- level (a value equal to: 'year', 'decade'; optional):
    Current level displayed to the user (decade, year), used for
    controlled component.

- lh (string | number | dict; optional):
    Line height – Accepts theme line height keys, CSS values, or a
    dict for responsive styles.

- lightHidden (boolean; optional):
    Determines whether component should be hidden in light color
    scheme with `display: none`.

- loading (boolean; optional):
    Displays loading indicator in the left or right section default
    False.

- loadingPosition (a value equal to: 'left', 'right'; optional):
    Position of the loading indicator default 'right'.

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

- maxLevel (a value equal to: 'year', 'decade'; optional):
    Max level that user can go up to (decade, year), defaults to
    decade.

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

- modalProps (dict; optional):
    Props passed down to Modal component.

    `modalProps` is a dict with keys:

    - className (string; optional):
        Class added to the root element, if applicable.

    - style (optional):
        Inline style added to root component element, can subscribe to
        theme defined on MantineProvider.

    - hiddenFrom (string; optional):
        Breakpoint above which the component is hidden with `display:
        none`.

    - visibleFrom (string; optional):
        Breakpoint below which the component is hidden with `display:
        none`.

    - lightHidden (boolean; optional):
        Determines whether component should be hidden in light color
        scheme with `display: none`.

    - darkHidden (boolean; optional):
        Determines whether component should be hidden in dark color
        scheme with `display: none`.

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

    - mis (number; optional):
        MarginInlineStart, theme key: theme.spacing.

    - mie (number; optional):
        MarginInlineEnd, theme key: theme.spacing.

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

    - pis (number; optional):
        PaddingInlineStart, theme key: theme.spacing.

    - pie (number; optional):
        PaddingInlineEnd, theme key: theme.spacing.

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

    - size (number; optional):
        Controls width of the content area, `'md'` by default.

    - radius (number; optional):
        Key of `theme.radius` or any valid CSS value to set
        `border-radius`, `theme.defaultRadius` by default.

    - opened (boolean; optional):
        Determines whether modal/drawer is opened.

    - closeOnClickOutside (boolean; optional):
        Determines whether the modal/drawer should be closed when user
        clicks on the overlay, `True` by default.

    - trapFocus (boolean; optional):
        Determines whether focus should be trapped, `True` by default.

    - closeOnEscape (boolean; optional):
        Determines whether `onClose` should be called when user
        presses the escape key, `True` by default.

    - keepMounted (boolean; optional):
        If set modal/drawer will not be unmounted from the DOM when it
        is hidden, `display: none` styles will be added instead,
        `False` by default.

    - transitionProps (dict; optional):
        Props added to the `Transition` component that used to animate
        overlay and body, use to configure duration and animation
        type, `{ duration: 200, transition: 'pop' }` by default.

        `transitionProps` is a dict with keys:

        - keepMounted (boolean; optional):
            If set element will not be unmounted from the DOM when it
            is hidden, `display: none` styles will be applied instead.

        - transition (optional):
            Transition name or object.

        - duration (number; optional):
            Transition duration in ms, `250` by default.

        - exitDuration (number; optional):
            Exit transition duration in ms, `250` by default.

        - timingFunction (string; optional):
            Transition timing function,
            `theme.transitionTimingFunction` by default.

        - mounted (boolean; required):
            Determines whether component should be mounted to the DOM.

    - withinPortal (boolean; optional):
        Determines whether the component should be rendered inside
        `Portal`, `True` by default.

    - portalProps (dict; optional):
        Props passed down to the Portal component when `withinPortal`
        is set.

    - zIndex (string | number; optional):
        `z-index` CSS property of the root element, `200` by default.

    - shadow (optional):
        Key of `theme.shadows` or any valid CSS box-shadow value, 'xl'
        by default.

    - returnFocus (boolean; optional):
        Determines whether focus should be returned to the last active
        element when `onClose` is called, `True` by default.

    - overlayProps (dict; optional):
        Props passed down to the `Overlay` component, use to configure
        opacity, `background-color`, styles and other properties.

        `overlayProps` is a dict with keys:

        - transitionProps (dict; optional):
            Props passed down to the `Transition` component.

            `transitionProps` is a dict with keys:

            - keepMounted (boolean; optional):
                If set element will not be unmounted from the DOM when
                it is hidden, `display: none` styles will be applied
                instead.

            - transition (optional):
                Transition name or object.

            - duration (number; optional):
                Transition duration in ms, `250` by default.

            - exitDuration (number; optional):
                Exit transition duration in ms, `250` by default.

            - timingFunction (string; optional):
                Transition timing function,
                `theme.transitionTimingFunction` by default.

            - mounted (boolean; required):
                Determines whether component should be mounted to the
                DOM.

        - className (string; optional):
            Class added to the root element, if applicable.

        - style (optional):
            Inline style added to root component element, can
            subscribe to theme defined on MantineProvider.

        - hiddenFrom (string; optional):
            Breakpoint above which the component is hidden with
            `display: none`.

        - visibleFrom (string; optional):
            Breakpoint below which the component is hidden with
            `display: none`.

        - lightHidden (boolean; optional):
            Determines whether component should be hidden in light
            color scheme with `display: none`.

        - darkHidden (boolean; optional):
            Determines whether component should be hidden in dark
            color scheme with `display: none`.

        - mod (string | dict | list of string | dicts; optional):
            Element modifiers transformed into `data-` attributes.
            For example: \"xl\" or {\"data-size\": \"xl\"}.  Can also
            be a list of strings or dicts for multiple modifiers.
            Falsy values are removed.

        - m (string | number | dict; optional):
            Margin – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - my (string | number | dict; optional):
            Margin block – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - mx (string | number | dict; optional):
            Margin inline – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - mt (string | number | dict; optional):
            Margin top – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - mb (string | number | dict; optional):
            Margin bottom – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - ms (string | number | dict; optional):
            Margin inline start – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - me (string | number | dict; optional):
            Margin inline end – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - mis (number; optional):
            MarginInlineStart, theme key: theme.spacing.

        - mie (number; optional):
            MarginInlineEnd, theme key: theme.spacing.

        - ml (string | number | dict; optional):
            Margin left – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - mr (string | number | dict; optional):
            Margin right – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - p (string | number | dict; optional):
            Padding – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - py (string | number | dict; optional):
            Padding block – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - px (string | number | dict; optional):
            Padding inline – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - pt (string | number | dict; optional):
            Padding top – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - pb (string | number | dict; optional):
            Padding bottom – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - ps (string | number | dict; optional):
            Padding inline start – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - pe (string | number | dict; optional):
            Padding inline end – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - pis (number; optional):
            PaddingInlineStart, theme key: theme.spacing.

        - pie (number; optional):
            PaddingInlineEnd, theme key: theme.spacing.

        - pl (string | number | dict; optional):
            Padding left – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - pr (string | number | dict; optional):
            Padding right – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - bd (string | number | dict; optional):
            Border – Accepts CSS values or a dict for responsive
            styles.

        - bdrs (string | number | dict; optional):
            Border radius – Accepts theme radius keys, CSS values, or
            a dict for responsive styles.

        - bg (string | dict; optional):
            Background – Accepts theme color keys, CSS values, or a
            dict for responsive styles.

        - c (string | dict; optional):
            Color – Accepts theme color keys, CSS values, or a dict
            for responsive styles.

        - opacity (string | number | dict; optional):
            Opacity – Accepts CSS values or a dict for responsive
            styles.

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
            Letter spacing – Accepts CSS values or a dict for
            responsive styles.

        - ta (dict; optional):
            Text align – Accepts CSS values or a dict for responsive
            styles.

        - lh (string | number | dict; optional):
            Line height – Accepts theme line height keys, CSS values,
            or a dict for responsive styles.

        - fs (dict; optional):
            Font style – Accepts CSS values or a dict for responsive
            styles.

        - tt (dict; optional):
            Text transform – Accepts CSS values or a dict for
            responsive styles.

        - td (string | number | dict; optional):
            Text decoration – Accepts CSS values or a dict for
            responsive styles.

        - w (string | number | dict; optional):
            Width – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - miw (string | number | dict; optional):
            Minimum width – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - maw (string | number | dict; optional):
            Maximum width – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - h (string | number | dict; optional):
            Height – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - mih (string | number | dict; optional):
            Minimum height – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - mah (string | number | dict; optional):
            Maximum height – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - bgsz (string | number | dict; optional):
            Background size – Accepts CSS values or a dict for
            responsive styles.

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
            Position – Accepts CSS values or a dict for responsive
            styles.

        - top (string | number | dict; optional):
            Top offset – Accepts CSS values or a dict for responsive
            styles.

        - left (string | number | dict; optional):
            Left offset – Accepts CSS values or a dict for responsive
            styles.

        - bottom (string | number | dict; optional):
            Bottom offset – Accepts CSS values or a dict for
            responsive styles.

        - right (string | number | dict; optional):
            Right offset – Accepts CSS values or a dict for responsive
            styles.

        - inset (string | number | dict; optional):
            Inset – Accepts CSS values or a dict for responsive
            styles.

        - display (dict; optional):
            Display – Accepts CSS values or a dict for responsive
            styles.

        - flex (string | number | dict; optional):
            Flex – Accepts CSS values or a dict for responsive styles.

        - radius (number; optional):
            Key of `theme.radius` or any valid CSS value to set
            border-radius, `0` by default.

        - unstyled (boolean; optional):
            Remove all Mantine styling from the component.

        - attributes (boolean | number | string | dict | list; optional):
            Passes attributes to inner elements of a component.  See
            Styles API docs.

        - children (a list of or a singular dash component, string or number; optional):
            Content inside overlay.

        - zIndex (string | number; optional):
            Overlay z-index, `200` by default.

        - fixed (boolean; optional):
            Determines whether overlay should have fixed position
            instead of absolute, `False` by default.

        - center (boolean; optional):
            Determines whether content inside overlay should be
            vertically and horizontally centered, `False` by default.

        - backgroundOpacity (number; optional):
            Controls overlay `background-color` opacity 0–1,
            disregarded when `gradient` prop is set, `0.6` by default.

        - color (optional):
            Overlay `background-color`, `#000` by default.

        - blur (string | number; optional):
            Overlay background blur, `0` by default.

        - gradient (string; optional):
            Changes overlay to gradient. If set, `color` prop is
            ignored.

    - withOverlay (boolean; optional):
        Determines whether the overlay should be rendered, `True` by
        default.

    - padding (number; optional):
        Key of `theme.spacing` or any valid CSS value to set content,
        header and footer padding, `'md'` by default.

    - title (a list of or a singular dash component, string or number; optional):
        Modal title.

    - withCloseButton (boolean; optional):
        Determines whether the close button should be rendered, `True`
        by default.

    - closeButtonProps (dict; optional):
        Props passed down to the close button.

        `closeButtonProps` is a dict with keys:

        - size (number; optional):
            Controls width and height of the button. Numbers are
            converted to rem. `'md'` by default.

        - radius (number; optional):
            Key of `theme.radius` or any valid CSS value to set
            border-radius. Numbers are converted to rem.
            `theme.defaultRadius` by default.

        - disabled (boolean; optional):
            Sets `disabled` and `data-disabled` attributes on the
            button element.

        - iconSize (string | number; optional):
            `X` icon `width` and `height`, `80%` by default.

        - children (a list of or a singular dash component, string or number; optional):
            Content rendered inside the button, for example
            `VisuallyHidden` with label for screen readers.

        - icon (a list of or a singular dash component, string or number; optional):
            Replaces default close icon. If set, `iconSize` prop is
            ignored.

        - ButtonProps (dict; optional):
            props passed down to `Button` component *.

        - hiddenFrom (string; optional):
            Breakpoint above which the component is hidden with
            `display: none`.

        - visibleFrom (string; optional):
            Breakpoint below which the component is hidden with
            `display: none`.

        - mod (string | dict | list of string | dicts; optional):
            Element modifiers transformed into `data-` attributes.
            For example: \"xl\" or {\"data-size\": \"xl\"}.  Can also
            be a list of strings or dicts for multiple modifiers.
            Falsy values are removed.

        - m (string | number | dict; optional):
            Margin – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - my (string | number | dict; optional):
            Margin block – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - mx (string | number | dict; optional):
            Margin inline – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - mt (string | number | dict; optional):
            Margin top – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - mb (string | number | dict; optional):
            Margin bottom – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - ms (string | number | dict; optional):
            Margin inline start – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - me (string | number | dict; optional):
            Margin inline end – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - ml (string | number | dict; optional):
            Margin left – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - mr (string | number | dict; optional):
            Margin right – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - p (string | number | dict; optional):
            Padding – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - py (string | number | dict; optional):
            Padding block – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - px (string | number | dict; optional):
            Padding inline – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - pt (string | number | dict; optional):
            Padding top – Accepts theme spacing keys, CSS values, or a
            dict for responsive styles.

        - pb (string | number | dict; optional):
            Padding bottom – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - ps (string | number | dict; optional):
            Padding inline start – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - pe (string | number | dict; optional):
            Padding inline end – Accepts theme spacing keys, CSS
            values, or a dict for responsive styles.

        - pl (string | number | dict; optional):
            Padding left – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - pr (string | number | dict; optional):
            Padding right – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - bd (string | number | dict; optional):
            Border – Accepts CSS values or a dict for responsive
            styles.

        - bdrs (string | number | dict; optional):
            Border radius – Accepts theme radius keys, CSS values, or
            a dict for responsive styles.

        - bg (string | dict; optional):
            Background – Accepts theme color keys, CSS values, or a
            dict for responsive styles.

        - c (string | dict; optional):
            Color – Accepts theme color keys, CSS values, or a dict
            for responsive styles.

        - opacity (string | number | dict; optional):
            Opacity – Accepts CSS values or a dict for responsive
            styles.

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
            Letter spacing – Accepts CSS values or a dict for
            responsive styles.

        - ta (dict; optional):
            Text align – Accepts CSS values or a dict for responsive
            styles.

        - lh (string | number | dict; optional):
            Line height – Accepts theme line height keys, CSS values,
            or a dict for responsive styles.

        - fs (dict; optional):
            Font style – Accepts CSS values or a dict for responsive
            styles.

        - tt (dict; optional):
            Text transform – Accepts CSS values or a dict for
            responsive styles.

        - td (string | number | dict; optional):
            Text decoration – Accepts CSS values or a dict for
            responsive styles.

        - w (string | number | dict; optional):
            Width – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - miw (string | number | dict; optional):
            Minimum width – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - maw (string | number | dict; optional):
            Maximum width – Accepts theme spacing keys, CSS values, or
            a dict for responsive styles.

        - h (string | number | dict; optional):
            Height – Accepts theme spacing keys, CSS values, or a dict
            for responsive styles.

        - mih (string | number | dict; optional):
            Minimum height – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - mah (string | number | dict; optional):
            Maximum height – Accepts theme spacing keys, CSS values,
            or a dict for responsive styles.

        - bgsz (string | number | dict; optional):
            Background size – Accepts CSS values or a dict for
            responsive styles.

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
            Position – Accepts CSS values or a dict for responsive
            styles.

        - top (string | number | dict; optional):
            Top offset – Accepts CSS values or a dict for responsive
            styles.

        - left (string | number | dict; optional):
            Left offset – Accepts CSS values or a dict for responsive
            styles.

        - bottom (string | number | dict; optional):
            Bottom offset – Accepts CSS values or a dict for
            responsive styles.

        - right (string | number | dict; optional):
            Right offset – Accepts CSS values or a dict for responsive
            styles.

        - inset (string | number | dict; optional):
            Inset – Accepts CSS values or a dict for responsive
            styles.

        - display (dict; optional):
            Display – Accepts CSS values or a dict for responsive
            styles.

        - flex (string | number | dict; optional):
            Flex – Accepts CSS values or a dict for responsive styles.

        - className (string; optional):
            Class added to the root element, if applicable.

        - style (optional):
            Inline style added to root component element, can
            subscribe to theme defined on MantineProvider.

        - lightHidden (boolean; optional):
            Determines whether component should be hidden in light
            color scheme with `display: none`.

        - darkHidden (boolean; optional):
            Determines whether component should be hidden in dark
            color scheme with `display: none`.

        - mis (number; optional):
            MarginInlineStart, theme key: theme.spacing.

        - mie (number; optional):
            MarginInlineEnd, theme key: theme.spacing.

        - pis (number; optional):
            PaddingInlineStart, theme key: theme.spacing.

        - pie (number; optional):
            PaddingInlineEnd, theme key: theme.spacing.

    - yOffset (string | number; optional):
        Top/bottom modal offset, `5dvh` by default.

    - xOffset (string | number; optional):
        Left/right modal offset, `5vw` by default.

    - centered (boolean; optional):
        Determines whether the modal should be centered vertically,
        `False` by default.

    - fullScreen (boolean; optional):
        Determines whether the modal should take the entire screen,
        `False` by default.

    - lockScroll (boolean; optional):
        Determines whether scroll should be locked when
        `opened={True}`, `True` by default.

    - removeScrollProps (dict; optional):
        Props passed down to react-remove-scroll, can be used to
        customize scroll lock behavior.

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

- n_submit (number; default 0):
    An integer that represents the number of times that this element
    has been submitted.

- name (string; optional):
    Name prop.

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

- placeholder (string; optional):
    Input placeholder.

- pointer (boolean; optional):
    Determines whether the input should have `cursor: pointer` style,
    `False` by default.

- popoverProps (dict; optional):
    Props passed down to Popover component.

    `popoverProps` is a dict with keys:

    - radius (number; optional):
        Key of `theme.radius` or any valid CSS value to set
        border-radius, `theme.defaultRadius` by default.

    - disabled (boolean; optional):
        If set, popover dropdown will not be rendered.

    - classNames (dict; optional):
        Adds custom CSS class names to inner elements of a component.
        See Styles API docs.

    - styles (boolean | number | string | dict | list; optional):
        Adds inline styles directly to inner elements of a component.
        See Styles API docs.

    - unstyled (boolean; optional):
        Remove all Mantine styling from the component.

    - variant (string; optional):
        variant.

    - attributes (boolean | number | string | dict | list; optional):
        Passes attributes to inner elements of a component.  See
        Styles API docs.

    - opened (boolean; optional):
        Controlled dropdown opened state.

    - closeOnClickOutside (boolean; optional):
        Determines whether dropdown should be closed on outside
        clicks, `True` by default.

    - clickOutsideEvents (list of strings; optional):
        Events that trigger outside clicks.

    - trapFocus (boolean; optional):
        Determines whether focus should be trapped within dropdown,
        `False` by default.

    - closeOnEscape (boolean; optional):
        Determines whether dropdown should be closed when `Escape` key
        is pressed, `True` by default.

    - withRoles (boolean; optional):
        Determines whether dropdown and target elements should have
        accessible roles, `True` by default.

    - position (a value equal to: 'top', 'left', 'bottom', 'right', 'top-end', 'top-start', 'left-end', 'left-start', 'bottom-end', 'bottom-start', 'right-end', 'right-start'; optional):
        Dropdown position relative to the target element, `'bottom'`
        by default.

    - offset (number; optional):
        Offset of the dropdown element, `8` by default.

    - keepMounted (boolean; optional):
        If set dropdown will not be unmounted from the DOM when it is
        hidden, `display: none` styles will be added instead.

    - transitionProps (dict; optional):
        Props passed down to the `Transition` component that used to
        animate dropdown presence, use to configure duration and
        animation type, `{ duration: 150, transition: 'fade' }` by
        default.

        `transitionProps` is a dict with keys:

        - keepMounted (boolean; optional):
            If set element will not be unmounted from the DOM when it
            is hidden, `display: none` styles will be applied instead.

        - transition (optional):
            Transition name or object.

        - duration (number; optional):
            Transition duration in ms, `250` by default.

        - exitDuration (number; optional):
            Exit transition duration in ms, `250` by default.

        - timingFunction (string; optional):
            Transition timing function,
            `theme.transitionTimingFunction` by default.

        - mounted (boolean; required):
            Determines whether component should be mounted to the DOM.

    - width (string | number; optional):
        Dropdown width, or `'target'` to make dropdown width the same
        as target element, `'max-content'` by default.

    - middlewares (dict; optional):
        Floating ui middlewares to configure position handling, `{
        flip: True, shift: True, inline: False }` by default.

        `middlewares` is a dict with keys:

        - shift (boolean; optional)

        - flip (dict; optional)

            `flip` is a boolean

          Or dict with keys:

    - mainAxis (boolean; optional):
        The axis that runs along the side of the floating element.
        Determines  whether overflow along this axis is checked to
        perform a flip. @,default,True.

    - crossAxis (boolean; optional):
        The axis that runs along the alignment of the floating
        element. Determines  whether overflow along this axis is
        checked to perform a flip.  - `True`: Whether to check cross
        axis overflow for both side and alignment flipping.  -
        `False`: Whether to disable all cross axis overflow checking.
        - `'alignment'`: Whether to check cross axis overflow for
        alignment flipping only. @,default,True.

    - rootBoundary (dict; optional):
        The root clipping area in which overflow will be checked.
        @,default,'viewport'.

        `rootBoundary` is a dict with keys:

        - x (number; required)

        - y (number; required)

        - width (number; required)

        - height (number; required)

    - elementContext (a value equal to: 'reference', 'floating'; optional):
        The element in which overflow is being checked relative to a
        boundary. @,default,'floating'.

    - altBoundary (boolean; optional):
        Whether to check for overflow using the alternate element's
        boundary  (`clippingAncestors` boundary only).
        @,default,False.

    - padding (dict; optional):
        Virtual padding for the resolved overflow detection offsets.
        @,default,0.

        `padding` is a number

              Or dict with keys:

        - top (number; optional)

        - left (number; optional)

        - bottom (number; optional)

        - right (number; optional)

    - fallbackPlacements (list of a value equal to: 'top', 'left', 'bottom', 'right', 'top-end', 'top-start', 'left-end', 'left-start', 'bottom-end', 'bottom-start', 'right-end', 'right-start's; optional):
        Placements to try sequentially if the preferred `placement`
        does not fit. @,default,[oppositePlacement] (computed).

    - fallbackStrategy (a value equal to: 'bestFit', 'initialPlacement'; optional):
        What strategy to use when no placements fit.
        @,default,'bestFit'.

    - fallbackAxisSideDirection (a value equal to: 'end', 'start', 'none'; optional):
        Whether to allow fallback to the perpendicular axis of the
        preferred  placement, and if so, which side direction along
        the axis to prefer. @,default,'none' (disallow fallback).

    - flipAlignment (boolean; optional):
        Whether to flip to placements with the opposite alignment if
        they fit  better. @,default,True.

    - boundary (dict; optional)

        `boundary` is a dict with keys:

        - x (number; required)

        - y (number; required)

        - width (number; required)

        - height (number; required) | list of a list of or a singular dash component, string or numbers

        - inline (boolean; optional)

        - size (boolean; optional)

    - withArrow (boolean; optional):
        Determines whether component should have an arrow, `False` by
        default.

    - arrowSize (number; optional):
        Arrow size in px, `7` by default.

    - arrowOffset (number; optional):
        Arrow offset in px, `5` by default.

    - arrowRadius (number; optional):
        Arrow `border-radius` in px, `0` by default.

    - arrowPosition (a value equal to: 'center', 'side', 'merge'; optional):
        Arrow position.

    - withinPortal (boolean; optional):
        Determines whether dropdown should be rendered within the
        `Portal`, `True` by default.

    - portalProps (dict; optional):
        Props to pass down to the `Portal` when `withinPortal` is
        True.

    - zIndex (string | number; optional):
        Dropdown `z-index`, `300` by default.

    - shadow (optional):
        Key of `theme.shadows` or any other valid CSS `box-shadow`
        value.

    - returnFocus (boolean; optional):
        Determines whether focus should be automatically returned to
        control when dropdown closes, `False` by default.

    - floatingStrategy (a value equal to: 'absolute', 'fixed'; optional):
        Changes floating ui [position
        strategy](https://floating-ui.com/docs/usefloating#strategy),
        `'absolute'` by default.

    - overlayProps (dict; optional):
        Props passed down to `Overlay` component.

    - withOverlay (boolean; optional):
        Determines whether the overlay should be displayed when the
        dropdown is opened, `False` by default.

    - hideDetached (boolean; optional):
        If set, the dropdown is hidden when the element is hidden with
        styles or not visible on the screen default True.

    - preventPositionChangeWhenVisible (boolean; optional):
        If `True`, the dropdown picks its side on open (flip runs
        once, preferring the `position` prop) and then never changes
        side — scrolling, resizing, and content size changes will not
        flip the dropdown. The side is recalculated fresh on the next
        open. Does not affect the `shift` middleware. Set to `False`
        to keep flip active and allow the dropdown to re-flip on every
        change. default True.

    - clickOutsideCapture (boolean; optional):
        If set, outside click listeners are registered in the capture
        phase default False.

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

- radius (number; optional):
    Key of `theme.radius` or any valid CSS value to set
    `border-radius`, numbers are converted to rem,
    `theme.defaultRadius` by default.

- readOnly (boolean; optional):
    Determines whether the user can modify the value.

- renderDay (boolean | number | string | dict | list; optional):
    A function that controls day value rendering. (See
    https://www.dash-mantine-components.com/functions-as-props).

- required (boolean; optional):
    Adds required attribute to the input and a red asterisk on the
    right side of label, `False` by default.

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- rightSection (a list of or a singular dash component, string or number; optional):
    Content section rendered on the right side of the input.

- rightSectionPointerEvents (a value equal to: '-moz-initial', 'inherit', 'initial', 'revert', 'revert-layer', 'unset', 'auto', 'none', 'all', 'fill', 'painted', 'stroke', 'visible', 'visibleFill', 'visiblePainted', 'visibleStroke'; optional):
    Sets `pointer-events` styles on the `rightSection` element,
    `'none'` by default.

- rightSectionProps (dict; optional):
    Props passed down to the `rightSection` element.

- rightSectionWidth (string | number; optional):
    Right section width, used to set `width` of the section and input
    `padding-right`, by default equals to the input height.

- size (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl'; optional):
    Component size.

- sortDates (boolean; optional):
    Determines whether dates value should be sorted before onChange
    call, only applicable when type=\"multiple\", True by default.

- styles (boolean | number | string | dict | list; optional):
    Adds inline styles directly to inner elements of a component.  See
    Styles API docs.

- success (a list of or a singular dash component, string or number; optional):
    Determines whether the input should have success styles.

- successProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Success` component.

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

- valueFormat (string; optional):
    Dayjs format to display input value, \"MMMM D, YYYY\" by default.

- valueFormatter (boolean | number | string | dict | list; optional):
    A function to format selected dates values into a string. By
    default, date is formatted based on the input type.

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

- withAsterisk (boolean; optional):
    Determines whether the required asterisk should be displayed.
    Overrides `required` prop. Does not add required attribute to the
    input. `False` by default.

- withCellSpacing (boolean; optional):
    Determines whether controls should be separated by spacing, True
    by default.

- withErrorStyles (boolean; optional):
    Determines whether the input should have red border and red text
    color when the `error` prop is set, `True` by default.

- withNativeLevelSelect (boolean; optional):
    Determines whether level select controls should be rendered as
    native `<select>` elements default False.

- withSuccessStyles (boolean; optional):
    Determines whether the input should have green border when the
    `success` prop is set @,default,True.

- withWeekNumbers (boolean; optional):
    Determines whether week numbers should be displayed, False by
    default.

- wrapperProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the root element.

- yearLabelFormat (string; optional):
    dayjs label format to display year label or a function that
    returns year label based on year value, defaults to \"YYYY\".

- yearsListFormat (string; optional):
    dayjs format for years list, `'YYYY'` by default.

- yearsSelectRange (list of 2 elements: [number, number]; optional):
    Year range for native level select, tuple of `[startYear,
    endYear]`. Defaults to `[currentYear - 100, currentYear + 50]` or
    values derived from `minDate`/`maxDate` if set."""
    _children_props: typing.List[str] = ['popoverProps.middlewares.flip.boundary', 'modalProps.overlayProps.children', 'modalProps.title', 'modalProps.closeButtonProps.children', 'modalProps.closeButtonProps.icon', 'clearButtonProps.children', 'clearButtonProps.icon', 'leftSection', 'rightSection', 'label', 'description', 'error', 'success', 'nextIcon', 'previousIcon']
    _base_nodes = ['leftSection', 'rightSection', 'label', 'description', 'error', 'success', 'nextIcon', 'previousIcon', 'children']
    _namespace = 'dash_mantine_components'
    _type = 'MonthPickerInput'
    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": bool,
            "prop_name": str,
            "component_name": str
        }
    )

    PopoverPropsTransitionProps = TypedDict(
        "PopoverPropsTransitionProps",
            {
            "keepMounted": NotRequired[bool],
            "transition": NotRequired[typing.Union[Literal["fade"], Literal["fade-down"], Literal["fade-up"], Literal["fade-left"], Literal["fade-right"], Literal["skew-up"], Literal["skew-down"], Literal["rotate-right"], Literal["rotate-left"], Literal["slide-down"], Literal["slide-up"], Literal["slide-right"], Literal["slide-left"], Literal["scale-y"], Literal["scale-x"], Literal["scale"], Literal["pop"], Literal["pop-top-left"], Literal["pop-top-right"], Literal["pop-bottom-left"], Literal["pop-bottom-right"]]],
            "duration": NotRequired[NumberType],
            "exitDuration": NotRequired[NumberType],
            "timingFunction": NotRequired[str],
            "mounted": bool
        }
    )

    PopoverPropsMiddlewaresFlipRootBoundary = TypedDict(
        "PopoverPropsMiddlewaresFlipRootBoundary",
            {
            "x": NumberType,
            "y": NumberType,
            "width": NumberType,
            "height": NumberType
        }
    )

    PopoverPropsMiddlewaresFlipPadding = TypedDict(
        "PopoverPropsMiddlewaresFlipPadding",
            {
            "top": NotRequired[NumberType],
            "left": NotRequired[NumberType],
            "bottom": NotRequired[NumberType],
            "right": NotRequired[NumberType]
        }
    )

    PopoverPropsMiddlewaresFlipBoundary = TypedDict(
        "PopoverPropsMiddlewaresFlipBoundary",
            {
            "x": NumberType,
            "y": NumberType,
            "width": NumberType,
            "height": NumberType
        }
    )

    PopoverPropsMiddlewaresFlip = TypedDict(
        "PopoverPropsMiddlewaresFlip",
            {
            "mainAxis": NotRequired[bool],
            "crossAxis": NotRequired[typing.Union[bool, Literal["alignment"]]],
            "rootBoundary": NotRequired[typing.Union[Literal["viewport"], Literal["layoutViewport"], Literal["document"], "PopoverPropsMiddlewaresFlipRootBoundary"]],
            "elementContext": NotRequired[Literal["reference", "floating"]],
            "altBoundary": NotRequired[bool],
            "padding": NotRequired[typing.Union[NumberType, "PopoverPropsMiddlewaresFlipPadding"]],
            "fallbackPlacements": NotRequired[typing.Sequence[Literal["top", "left", "bottom", "right", "top-end", "top-start", "left-end", "left-start", "bottom-end", "bottom-start", "right-end", "right-start"]]],
            "fallbackStrategy": NotRequired[Literal["bestFit", "initialPlacement"]],
            "fallbackAxisSideDirection": NotRequired[Literal["end", "start", "none"]],
            "flipAlignment": NotRequired[bool],
            "boundary": NotRequired[typing.Union["PopoverPropsMiddlewaresFlipBoundary", Literal["clippingAncestors"], typing.Sequence[ComponentType]]]
        }
    )

    PopoverPropsMiddlewares = TypedDict(
        "PopoverPropsMiddlewares",
            {
            "shift": NotRequired[typing.Union[bool, typing.Any]],
            "flip": NotRequired[typing.Union[bool, "PopoverPropsMiddlewaresFlip"]],
            "inline": NotRequired[typing.Union[bool]],
            "size": NotRequired[typing.Union[bool, typing.Any]]
        }
    )

    PopoverProps = TypedDict(
        "PopoverProps",
            {
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "disabled": NotRequired[bool],
            "classNames": NotRequired[dict],
            "styles": NotRequired[typing.Any],
            "unstyled": NotRequired[bool],
            "variant": NotRequired[str],
            "attributes": NotRequired[typing.Any],
            "opened": NotRequired[bool],
            "closeOnClickOutside": NotRequired[bool],
            "clickOutsideEvents": NotRequired[typing.Sequence[str]],
            "trapFocus": NotRequired[bool],
            "closeOnEscape": NotRequired[bool],
            "withRoles": NotRequired[bool],
            "position": NotRequired[Literal["top", "left", "bottom", "right", "top-end", "top-start", "left-end", "left-start", "bottom-end", "bottom-start", "right-end", "right-start"]],
            "offset": NotRequired[typing.Union[NumberType]],
            "keepMounted": NotRequired[bool],
            "transitionProps": NotRequired["PopoverPropsTransitionProps"],
            "width": NotRequired[typing.Union[str, NumberType]],
            "middlewares": NotRequired["PopoverPropsMiddlewares"],
            "withArrow": NotRequired[bool],
            "arrowSize": NotRequired[NumberType],
            "arrowOffset": NotRequired[NumberType],
            "arrowRadius": NotRequired[NumberType],
            "arrowPosition": NotRequired[Literal["center", "side", "merge"]],
            "withinPortal": NotRequired[bool],
            "portalProps": NotRequired[dict],
            "zIndex": NotRequired[typing.Union[str, NumberType]],
            "shadow": NotRequired[typing.Union[Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "returnFocus": NotRequired[bool],
            "floatingStrategy": NotRequired[Literal["absolute", "fixed"]],
            "overlayProps": NotRequired[dict],
            "withOverlay": NotRequired[bool],
            "hideDetached": NotRequired[bool],
            "preventPositionChangeWhenVisible": NotRequired[bool],
            "clickOutsideCapture": NotRequired[bool]
        }
    )

    ModalPropsTransitionProps = TypedDict(
        "ModalPropsTransitionProps",
            {
            "keepMounted": NotRequired[bool],
            "transition": NotRequired[typing.Union[Literal["fade"], Literal["fade-down"], Literal["fade-up"], Literal["fade-left"], Literal["fade-right"], Literal["skew-up"], Literal["skew-down"], Literal["rotate-right"], Literal["rotate-left"], Literal["slide-down"], Literal["slide-up"], Literal["slide-right"], Literal["slide-left"], Literal["scale-y"], Literal["scale-x"], Literal["scale"], Literal["pop"], Literal["pop-top-left"], Literal["pop-top-right"], Literal["pop-bottom-left"], Literal["pop-bottom-right"]]],
            "duration": NotRequired[NumberType],
            "exitDuration": NotRequired[NumberType],
            "timingFunction": NotRequired[str],
            "mounted": bool
        }
    )

    ModalPropsOverlayPropsTransitionProps = TypedDict(
        "ModalPropsOverlayPropsTransitionProps",
            {
            "keepMounted": NotRequired[bool],
            "transition": NotRequired[typing.Union[Literal["fade"], Literal["fade-down"], Literal["fade-up"], Literal["fade-left"], Literal["fade-right"], Literal["skew-up"], Literal["skew-down"], Literal["rotate-right"], Literal["rotate-left"], Literal["slide-down"], Literal["slide-up"], Literal["slide-right"], Literal["slide-left"], Literal["scale-y"], Literal["scale-x"], Literal["scale"], Literal["pop"], Literal["pop-top-left"], Literal["pop-top-right"], Literal["pop-bottom-left"], Literal["pop-bottom-right"]]],
            "duration": NotRequired[NumberType],
            "exitDuration": NotRequired[NumberType],
            "timingFunction": NotRequired[str],
            "mounted": bool
        }
    )

    ModalPropsOverlayProps = TypedDict(
        "ModalPropsOverlayProps",
            {
            "transitionProps": NotRequired["ModalPropsOverlayPropsTransitionProps"],
            "className": NotRequired[str],
            "style": NotRequired[typing.Union[typing.Any]],
            "hiddenFrom": NotRequired[str],
            "visibleFrom": NotRequired[str],
            "lightHidden": NotRequired[bool],
            "darkHidden": NotRequired[bool],
            "mod": NotRequired[typing.Union[str, dict, typing.Sequence[typing.Union[str, dict]]]],
            "m": NotRequired[typing.Union[str, NumberType, dict]],
            "my": NotRequired[typing.Union[str, NumberType, dict]],
            "mx": NotRequired[typing.Union[str, NumberType, dict]],
            "mt": NotRequired[typing.Union[str, NumberType, dict]],
            "mb": NotRequired[typing.Union[str, NumberType, dict]],
            "ms": NotRequired[typing.Union[str, NumberType, dict]],
            "me": NotRequired[typing.Union[str, NumberType, dict]],
            "mis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "mie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "ml": NotRequired[typing.Union[str, NumberType, dict]],
            "mr": NotRequired[typing.Union[str, NumberType, dict]],
            "p": NotRequired[typing.Union[str, NumberType, dict]],
            "py": NotRequired[typing.Union[str, NumberType, dict]],
            "px": NotRequired[typing.Union[str, NumberType, dict]],
            "pt": NotRequired[typing.Union[str, NumberType, dict]],
            "pb": NotRequired[typing.Union[str, NumberType, dict]],
            "ps": NotRequired[typing.Union[str, NumberType, dict]],
            "pe": NotRequired[typing.Union[str, NumberType, dict]],
            "pis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "pie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
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
            "ta": NotRequired[typing.Union[dict, Literal["left"], Literal["right"], Literal["end"], Literal["start"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["center"], Literal["-webkit-match-parent"], Literal["justify"], Literal["match-parent"]]],
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
            "bga": NotRequired[typing.Union[dict, Literal["local"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["scroll"]]],
            "pos": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["absolute"], Literal["fixed"], Literal["-webkit-sticky"], Literal["relative"], Literal["static"], Literal["sticky"]]],
            "top": NotRequired[typing.Union[str, NumberType, dict]],
            "left": NotRequired[typing.Union[str, NumberType, dict]],
            "bottom": NotRequired[typing.Union[str, NumberType, dict]],
            "right": NotRequired[typing.Union[str, NumberType, dict]],
            "inset": NotRequired[typing.Union[str, NumberType, dict]],
            "display": NotRequired[typing.Union[dict, Literal["flex"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]],
            "flex": NotRequired[typing.Union[str, NumberType, dict]],
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "unstyled": NotRequired[bool],
            "attributes": NotRequired[typing.Any],
            "children": NotRequired[ComponentType],
            "zIndex": NotRequired[typing.Union[str, NumberType]],
            "fixed": NotRequired[bool],
            "center": NotRequired[bool],
            "backgroundOpacity": NotRequired[NumberType],
            "color": NotRequired[typing.Union[Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["aliceblue"], Literal["antiquewhite"], Literal["aqua"], Literal["aquamarine"], Literal["azure"], Literal["beige"], Literal["bisque"], Literal["black"], Literal["blanchedalmond"], Literal["blue"], Literal["blueviolet"], Literal["brown"], Literal["burlywood"], Literal["cadetblue"], Literal["chartreuse"], Literal["chocolate"], Literal["coral"], Literal["cornflowerblue"], Literal["cornsilk"], Literal["crimson"], Literal["cyan"], Literal["darkblue"], Literal["darkcyan"], Literal["darkgoldenrod"], Literal["darkgray"], Literal["darkgreen"], Literal["darkgrey"], Literal["darkkhaki"], Literal["darkmagenta"], Literal["darkolivegreen"], Literal["darkorange"], Literal["darkorchid"], Literal["darkred"], Literal["darksalmon"], Literal["darkseagreen"], Literal["darkslateblue"], Literal["darkslategray"], Literal["darkslategrey"], Literal["darkturquoise"], Literal["darkviolet"], Literal["deeppink"], Literal["deepskyblue"], Literal["dimgray"], Literal["dimgrey"], Literal["dodgerblue"], Literal["firebrick"], Literal["floralwhite"], Literal["forestgreen"], Literal["fuchsia"], Literal["gainsboro"], Literal["ghostwhite"], Literal["gold"], Literal["goldenrod"], Literal["gray"], Literal["green"], Literal["greenyellow"], Literal["grey"], Literal["honeydew"], Literal["hotpink"], Literal["indianred"], Literal["indigo"], Literal["ivory"], Literal["khaki"], Literal["lavender"], Literal["lavenderblush"], Literal["lawngreen"], Literal["lemonchiffon"], Literal["lightblue"], Literal["lightcoral"], Literal["lightcyan"], Literal["lightgoldenrodyellow"], Literal["lightgray"], Literal["lightgreen"], Literal["lightgrey"], Literal["lightpink"], Literal["lightsalmon"], Literal["lightseagreen"], Literal["lightskyblue"], Literal["lightslategray"], Literal["lightslategrey"], Literal["lightsteelblue"], Literal["lightyellow"], Literal["lime"], Literal["limegreen"], Literal["linen"], Literal["magenta"], Literal["maroon"], Literal["mediumaquamarine"], Literal["mediumblue"], Literal["mediumorchid"], Literal["mediumpurple"], Literal["mediumseagreen"], Literal["mediumslateblue"], Literal["mediumspringgreen"], Literal["mediumturquoise"], Literal["mediumvioletred"], Literal["midnightblue"], Literal["mintcream"], Literal["mistyrose"], Literal["moccasin"], Literal["navajowhite"], Literal["navy"], Literal["oldlace"], Literal["olive"], Literal["olivedrab"], Literal["orange"], Literal["orangered"], Literal["orchid"], Literal["palegoldenrod"], Literal["palegreen"], Literal["paleturquoise"], Literal["palevioletred"], Literal["papayawhip"], Literal["peachpuff"], Literal["peru"], Literal["pink"], Literal["plum"], Literal["powderblue"], Literal["purple"], Literal["rebeccapurple"], Literal["red"], Literal["rosybrown"], Literal["royalblue"], Literal["saddlebrown"], Literal["salmon"], Literal["sandybrown"], Literal["seagreen"], Literal["seashell"], Literal["sienna"], Literal["silver"], Literal["skyblue"], Literal["slateblue"], Literal["slategray"], Literal["slategrey"], Literal["snow"], Literal["springgreen"], Literal["steelblue"], Literal["tan"], Literal["teal"], Literal["thistle"], Literal["tomato"], Literal["transparent"], Literal["turquoise"], Literal["violet"], Literal["wheat"], Literal["white"], Literal["whitesmoke"], Literal["yellow"], Literal["yellowgreen"], Literal["ActiveBorder"], Literal["ActiveCaption"], Literal["AppWorkspace"], Literal["Background"], Literal["ButtonFace"], Literal["ButtonHighlight"], Literal["ButtonShadow"], Literal["ButtonText"], Literal["CaptionText"], Literal["GrayText"], Literal["Highlight"], Literal["HighlightText"], Literal["InactiveBorder"], Literal["InactiveCaption"], Literal["InactiveCaptionText"], Literal["InfoBackground"], Literal["InfoText"], Literal["Menu"], Literal["MenuText"], Literal["Scrollbar"], Literal["ThreeDDarkShadow"], Literal["ThreeDFace"], Literal["ThreeDHighlight"], Literal["ThreeDLightShadow"], Literal["ThreeDShadow"], Literal["Window"], Literal["WindowFrame"], Literal["WindowText"], Literal["currentcolor"]]],
            "blur": NotRequired[typing.Union[str, NumberType]],
            "gradient": NotRequired[str]
        }
    )

    ModalPropsCloseButtonProps = TypedDict(
        "ModalPropsCloseButtonProps",
            {
            "size": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "disabled": NotRequired[bool],
            "iconSize": NotRequired[typing.Union[str, NumberType]],
            "children": NotRequired[ComponentType],
            "icon": NotRequired[ComponentType],
            "ButtonProps": NotRequired[dict],
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
            "ta": NotRequired[typing.Union[dict, Literal["left"], Literal["right"], Literal["end"], Literal["start"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["center"], Literal["-webkit-match-parent"], Literal["justify"], Literal["match-parent"]]],
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
            "bga": NotRequired[typing.Union[dict, Literal["local"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["scroll"]]],
            "pos": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["absolute"], Literal["fixed"], Literal["-webkit-sticky"], Literal["relative"], Literal["static"], Literal["sticky"]]],
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

    ModalProps = TypedDict(
        "ModalProps",
            {
            "className": NotRequired[str],
            "style": NotRequired[typing.Union[typing.Any]],
            "hiddenFrom": NotRequired[str],
            "visibleFrom": NotRequired[str],
            "lightHidden": NotRequired[bool],
            "darkHidden": NotRequired[bool],
            "mod": NotRequired[typing.Union[str, dict, typing.Sequence[typing.Union[str, dict]]]],
            "m": NotRequired[typing.Union[str, NumberType, dict]],
            "my": NotRequired[typing.Union[str, NumberType, dict]],
            "mx": NotRequired[typing.Union[str, NumberType, dict]],
            "mt": NotRequired[typing.Union[str, NumberType, dict]],
            "mb": NotRequired[typing.Union[str, NumberType, dict]],
            "ms": NotRequired[typing.Union[str, NumberType, dict]],
            "me": NotRequired[typing.Union[str, NumberType, dict]],
            "mis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "mie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "ml": NotRequired[typing.Union[str, NumberType, dict]],
            "mr": NotRequired[typing.Union[str, NumberType, dict]],
            "p": NotRequired[typing.Union[str, NumberType, dict]],
            "py": NotRequired[typing.Union[str, NumberType, dict]],
            "px": NotRequired[typing.Union[str, NumberType, dict]],
            "pt": NotRequired[typing.Union[str, NumberType, dict]],
            "pb": NotRequired[typing.Union[str, NumberType, dict]],
            "ps": NotRequired[typing.Union[str, NumberType, dict]],
            "pe": NotRequired[typing.Union[str, NumberType, dict]],
            "pis": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "pie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
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
            "ta": NotRequired[typing.Union[dict, Literal["left"], Literal["right"], Literal["end"], Literal["start"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["center"], Literal["-webkit-match-parent"], Literal["justify"], Literal["match-parent"]]],
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
            "bga": NotRequired[typing.Union[dict, Literal["local"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["scroll"]]],
            "pos": NotRequired[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["absolute"], Literal["fixed"], Literal["-webkit-sticky"], Literal["relative"], Literal["static"], Literal["sticky"]]],
            "top": NotRequired[typing.Union[str, NumberType, dict]],
            "left": NotRequired[typing.Union[str, NumberType, dict]],
            "bottom": NotRequired[typing.Union[str, NumberType, dict]],
            "right": NotRequired[typing.Union[str, NumberType, dict]],
            "inset": NotRequired[typing.Union[str, NumberType, dict]],
            "display": NotRequired[typing.Union[dict, Literal["flex"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]],
            "flex": NotRequired[typing.Union[str, NumberType, dict]],
            "size": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "opened": NotRequired[bool],
            "closeOnClickOutside": NotRequired[bool],
            "trapFocus": NotRequired[bool],
            "closeOnEscape": NotRequired[bool],
            "keepMounted": NotRequired[bool],
            "transitionProps": NotRequired["ModalPropsTransitionProps"],
            "withinPortal": NotRequired[bool],
            "portalProps": NotRequired[dict],
            "zIndex": NotRequired[typing.Union[str, NumberType]],
            "shadow": NotRequired[typing.Union[Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "returnFocus": NotRequired[bool],
            "overlayProps": NotRequired["ModalPropsOverlayProps"],
            "withOverlay": NotRequired[bool],
            "padding": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "title": NotRequired[ComponentType],
            "withCloseButton": NotRequired[bool],
            "closeButtonProps": NotRequired["ModalPropsCloseButtonProps"],
            "yOffset": NotRequired[typing.Union[str, NumberType]],
            "xOffset": NotRequired[typing.Union[str, NumberType]],
            "centered": NotRequired[bool],
            "fullScreen": NotRequired[bool],
            "lockScroll": NotRequired[bool],
            "removeScrollProps": NotRequired[dict]
        }
    )

    ClearButtonProps = TypedDict(
        "ClearButtonProps",
            {
            "size": NotRequired[typing.Union[Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "disabled": NotRequired[bool],
            "iconSize": NotRequired[typing.Union[str, NumberType]],
            "children": NotRequired[ComponentType],
            "icon": NotRequired[ComponentType],
            "ButtonProps": NotRequired[dict]
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
        valueFormat: typing.Optional[str] = None,
        n_submit: typing.Optional[NumberType] = None,
        debounce: typing.Optional[typing.Union[NumberType, bool]] = None,
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
        closeOnChange: typing.Optional[bool] = None,
        dropdownType: typing.Optional[Literal["popover", "modal"]] = None,
        popoverProps: typing.Optional["PopoverProps"] = None,
        modalProps: typing.Optional["ModalProps"] = None,
        clearable: typing.Optional[bool] = None,
        clearButtonProps: typing.Optional["ClearButtonProps"] = None,
        readOnly: typing.Optional[bool] = None,
        sortDates: typing.Optional[bool] = None,
        labelSeparator: typing.Optional[str] = None,
        placeholder: typing.Optional[str] = None,
        clearSectionMode: typing.Optional[Literal["rightSection", "both", "clear"]] = None,
        valueFormatter: typing.Optional[typing.Any] = None,
        wrapperProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        leftSection: typing.Optional[ComponentType] = None,
        leftSectionWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        leftSectionProps: typing.Optional[dict] = None,
        leftSectionPointerEvents: typing.Optional[Literal["-moz-initial", "inherit", "initial", "revert", "revert-layer", "unset", "auto", "none", "all", "fill", "painted", "stroke", "visible", "visibleFill", "visiblePainted", "visibleStroke"]] = None,
        rightSection: typing.Optional[ComponentType] = None,
        rightSectionWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        rightSectionProps: typing.Optional[dict] = None,
        rightSectionPointerEvents: typing.Optional[Literal["-moz-initial", "inherit", "initial", "revert", "revert-layer", "unset", "auto", "none", "all", "fill", "painted", "stroke", "visible", "visibleFill", "visiblePainted", "visibleStroke"]] = None,
        required: typing.Optional[bool] = None,
        radius: typing.Optional[typing.Union[str, NumberType]] = None,
        disabled: typing.Optional[bool] = None,
        pointer: typing.Optional[bool] = None,
        withErrorStyles: typing.Optional[bool] = None,
        withSuccessStyles: typing.Optional[bool] = None,
        name: typing.Optional[str] = None,
        inputProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        loading: typing.Optional[bool] = None,
        loadingPosition: typing.Optional[Literal["left", "right"]] = None,
        label: typing.Optional[ComponentType] = None,
        description: typing.Optional[ComponentType] = None,
        error: typing.Optional[ComponentType] = None,
        success: typing.Optional[ComponentType] = None,
        withAsterisk: typing.Optional[bool] = None,
        labelProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        descriptionProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        errorProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        successProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        inputWrapperOrder: typing.Optional[typing.Sequence[Literal["label", "description", "error", "input"]]] = None,
        maxLevel: typing.Optional[Literal["year", "decade"]] = None,
        level: typing.Optional[Literal["year", "decade"]] = None,
        presets: typing.Optional[typing.Sequence["Presets"]] = None,
        withNativeLevelSelect: typing.Optional[bool] = None,
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
        numberOfColumns: typing.Optional[NumberType] = None,
        columnsToScroll: typing.Optional[NumberType] = None,
        ariaLabels: typing.Optional["AriaLabels"] = None,
        fullWidth: typing.Optional[bool] = None,
        nextIcon: typing.Optional[ComponentType] = None,
        previousIcon: typing.Optional[ComponentType] = None,
        nextLabel: typing.Optional[str] = None,
        previousLabel: typing.Optional[str] = None,
        headerControlsOrder: typing.Optional[typing.Sequence[Literal["level", "next", "previous"]]] = None,
        yearsSelectRange: typing.Optional[typing.Tuple[NumberType, NumberType]] = None,
        hasNextLevel: typing.Optional[bool] = None,
        monthLabelFormat: typing.Optional[str] = None,
        firstDayOfWeek: typing.Optional[Literal[0, 1, 2, 3, 4, 5, 6]] = None,
        weekdayFormat: typing.Optional[str] = None,
        weekendDays: typing.Optional[typing.Sequence[Literal[0, 1, 2, 3, 4, 5, 6]]] = None,
        hideOutsideDates: typing.Optional[bool] = None,
        hideWeekdays: typing.Optional[bool] = None,
        withWeekNumbers: typing.Optional[bool] = None,
        getDayProps: typing.Optional[typing.Any] = None,
        renderDay: typing.Optional[typing.Any] = None,
        classNames: typing.Optional[dict] = None,
        styles: typing.Optional[typing.Any] = None,
        unstyled: typing.Optional[bool] = None,
        variant: typing.Optional[str] = None,
        attributes: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowDeselect', 'allowSingleDateInRange', 'aria-*', 'ariaLabels', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'clearButtonProps', 'clearSectionMode', 'clearable', 'closeOnChange', 'columnsToScroll', 'darkHidden', 'data-*', 'debounce', 'decadeLabelFormat', 'defaultDate', 'description', 'descriptionProps', 'disabled', 'display', 'dropdownType', 'error', 'errorProps', 'ff', 'firstDayOfWeek', 'flex', 'fs', 'fullWidth', 'fw', 'fz', 'getDayProps', 'getMonthControlProps', 'getYearControlProps', 'h', 'hasNextLevel', 'headerControlsOrder', 'hiddenFrom', 'hideOutsideDates', 'hideWeekdays', 'inputProps', 'inputWrapperOrder', 'inset', 'label', 'labelProps', 'labelSeparator', 'left', 'leftSection', 'leftSectionPointerEvents', 'leftSectionProps', 'leftSectionWidth', 'level', 'lh', 'lightHidden', 'loading', 'loadingPosition', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDate', 'maxLevel', 'mb', 'me', 'mie', 'mih', 'minDate', 'mis', 'miw', 'ml', 'mod', 'modalProps', 'monthLabelFormat', 'monthsListFormat', 'mr', 'ms', 'mt', 'mx', 'my', 'n_submit', 'name', 'nextIcon', 'nextLabel', 'numberOfColumns', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'placeholder', 'pointer', 'popoverProps', 'pos', 'pr', 'presets', 'previousIcon', 'previousLabel', 'ps', 'pt', 'px', 'py', 'radius', 'readOnly', 'renderDay', 'required', 'right', 'rightSection', 'rightSectionPointerEvents', 'rightSectionProps', 'rightSectionWidth', 'size', 'sortDates', 'style', 'styles', 'success', 'successProps', 'ta', 'tabIndex', 'td', 'top', 'tt', 'type', 'unstyled', 'value', 'valueFormat', 'valueFormatter', 'variant', 'visibleFrom', 'w', 'weekdayFormat', 'weekendDays', 'withAsterisk', 'withCellSpacing', 'withErrorStyles', 'withNativeLevelSelect', 'withSuccessStyles', 'withWeekNumbers', 'wrapperProps', 'yearLabelFormat', 'yearsListFormat', 'yearsSelectRange']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'allowDeselect', 'allowSingleDateInRange', 'aria-*', 'ariaLabels', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'clearButtonProps', 'clearSectionMode', 'clearable', 'closeOnChange', 'columnsToScroll', 'darkHidden', 'data-*', 'debounce', 'decadeLabelFormat', 'defaultDate', 'description', 'descriptionProps', 'disabled', 'display', 'dropdownType', 'error', 'errorProps', 'ff', 'firstDayOfWeek', 'flex', 'fs', 'fullWidth', 'fw', 'fz', 'getDayProps', 'getMonthControlProps', 'getYearControlProps', 'h', 'hasNextLevel', 'headerControlsOrder', 'hiddenFrom', 'hideOutsideDates', 'hideWeekdays', 'inputProps', 'inputWrapperOrder', 'inset', 'label', 'labelProps', 'labelSeparator', 'left', 'leftSection', 'leftSectionPointerEvents', 'leftSectionProps', 'leftSectionWidth', 'level', 'lh', 'lightHidden', 'loading', 'loadingPosition', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDate', 'maxLevel', 'mb', 'me', 'mie', 'mih', 'minDate', 'mis', 'miw', 'ml', 'mod', 'modalProps', 'monthLabelFormat', 'monthsListFormat', 'mr', 'ms', 'mt', 'mx', 'my', 'n_submit', 'name', 'nextIcon', 'nextLabel', 'numberOfColumns', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'placeholder', 'pointer', 'popoverProps', 'pos', 'pr', 'presets', 'previousIcon', 'previousLabel', 'ps', 'pt', 'px', 'py', 'radius', 'readOnly', 'renderDay', 'required', 'right', 'rightSection', 'rightSectionPointerEvents', 'rightSectionProps', 'rightSectionWidth', 'size', 'sortDates', 'style', 'styles', 'success', 'successProps', 'ta', 'tabIndex', 'td', 'top', 'tt', 'type', 'unstyled', 'value', 'valueFormat', 'valueFormatter', 'variant', 'visibleFrom', 'w', 'weekdayFormat', 'weekendDays', 'withAsterisk', 'withCellSpacing', 'withErrorStyles', 'withNativeLevelSelect', 'withSuccessStyles', 'withWeekNumbers', 'wrapperProps', 'yearLabelFormat', 'yearsListFormat', 'yearsSelectRange']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(MonthPickerInput, self).__init__(**args)

setattr(MonthPickerInput, "__init__", _explicitize_args(MonthPickerInput.__init__))

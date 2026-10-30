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


class Select(Component):
    """A Select component.
Select

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- allowDeselect (boolean; optional):
    Determines whether it should be possible to deselect value by
    clicking on the selected option, `True` by default.

- aria-* (string; optional):
    Wild card aria attributes.

- attributes (boolean | number | string | dict | list; optional):
    Passes attributes to inner elements of a component.  See Styles
    API docs.

- autoSelectOnBlur (boolean; optional):
    If set, the highlighted option is selected when the input loses
    focus. default `False`.

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

- checkIconPosition (a value equal to: 'left', 'right'; optional):
    Position of the check icon relative to the option label, `'left'`
    by default.

- className (string; optional):
    Class added to the root element, if applicable.

- classNames (dict; optional):
    Adds custom CSS class names to inner elements of a component.  See
    Styles API docs.

- clearButtonProps (dict; optional):
    Props passed down to the clear button.

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

- clearSearchOnFocus (boolean; default False):
    Clears search value when dropdown is opened.  Ignored if
    searchable=False.

- clearSectionMode (a value equal to: 'rightSection', 'both', 'clear'; optional):
    Determines how the clear button and rightSection are rendered
    default 'both'.

- clearable (boolean; optional):
    Determines whether the clear button should be displayed in the
    right section when the component has value, `False` by default.

- comboboxProps (dict; optional):
    Props passed down to `Combobox` component.

    `comboboxProps` is a dict with keys:

    - children (a list of or a singular dash component, string or number; optional):
        Combobox content.

    - size (optional):
        Controls items `font-size` and `padding`, `'sm'` by default.

    - dropdownPadding (string | number; optional):
        Controls `padding` of the dropdown, `4` by default.

    - resetSelectionOnOptionHover (boolean; optional):
        Determines whether selection should be reset when option is
        hovered, `False` by default.

    - readOnly (boolean; optional):
        Determines whether Combobox value can be changed.

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

    - padding (dict; optional):
        Virtual padding for the resolved overflow detection offsets.
        @,default,0.

        `padding` is a number

              Or dict with keys:

        - top (number; optional)

        - left (number; optional)

        - bottom (number; optional)

        - right (number; optional)

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

    - fallbackPlacements (list of a value equal to: 'top', 'left', 'bottom', 'right', 'top-end', 'top-start', 'left-end', 'left-start', 'bottom-end', 'bottom-start', 'right-end', 'right-start's; optional):
        Placements to try sequentially if the preferred `placement`
        does not fit. @,default,[oppositePlacement] (computed).

    - fallbackStrategy (a value equal to: 'bestFit', 'initialPlacement'; optional):
        What strategy to use when no placements fit.
        @,default,'bestFit'.

    - fallbackAxisSideDirection (a value equal to: 'none', 'end', 'start'; optional):
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

    - radius (number; optional):
        Key of `theme.radius` or any valid CSS value to set
        border-radius, `theme.defaultRadius` by default.

    - shadow (optional):
        Key of `theme.shadows` or any other valid CSS `box-shadow`
        value.

    - disabled (boolean; optional):
        If set, popover dropdown will not be rendered.

    - returnFocus (boolean; optional):
        Determines whether focus should be automatically returned to
        control when dropdown closes, `False` by default.

    - floatingStrategy (a value equal to: 'fixed', 'absolute'; optional):
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

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data (list of strings; optional):
    Data used to generate options.

- data-* (string; optional):
    Wild card data attributes.

- debounce (number | boolean; default False):
    (boolean | number; default False): If True, changes to input will
    be sent back to the Dash server only on enter or when losing
    focus. If it's False, it will send the value back on every change.
    If a number, it will not send anything back to the Dash server
    until the user has stopped typing for that number of milliseconds.

- description (a list of or a singular dash component, string or number; optional):
    Contents of `Input.Description` component. If not set, description
    is not rendered.

- descriptionProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Description` component.

- disabled (boolean; optional):
    Sets `disabled` attribute on the `input` element.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- dropdownOpened (boolean; optional):
    Controlled dropdown opened state.

- error (a list of or a singular dash component, string or number; optional):
    Contents of `Input.Error` component. If not set, error is not
    rendered.

- errorProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the `Input.Error` component.

- ff (string | dict; optional):
    Font family – Accepts CSS values or a dict for responsive styles.

- filter (boolean | number | string | dict | list; optional):
    A Function based on which items are filtered and sorted. See
    https://www.dash-mantine-components.com/functions-as-props.

- flex (string | number | dict; optional):
    Flex – Accepts CSS values or a dict for responsive styles.

- floatingHeight (string; optional):
    If set to `'viewport'`, the dropdown grows to fill the available
    vertical space in the viewport. Disables the `flip` middleware.

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

- hiddenInputProps (dict; optional):
    Props passed down to the hidden input.

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

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- leftSection (a list of or a singular dash component, string or number; optional):
    Content section rendered on the left side of the input.

- leftSectionPointerEvents (a value equal to: 'auto', '-moz-initial', 'inherit', 'initial', 'revert', 'revert-layer', 'unset', 'none', 'all', 'fill', 'painted', 'stroke', 'visible', 'visibleFill', 'visiblePainted', 'visibleStroke'; optional):
    Sets `pointer-events` styles on the `leftSection` element,
    `'none'` by default.

- leftSectionProps (dict; optional):
    Props passed down to the `leftSection` element.

- leftSectionWidth (string | number; optional):
    Left section width, used to set `width` of the section and input
    `padding-left`, by default equals to the input height.

- lh (string | number | dict; optional):
    Line height – Accepts theme line height keys, CSS values, or a
    dict for responsive styles.

- lightHidden (boolean; optional):
    Determines whether component should be hidden in light color
    scheme with `display: none`.

- limit (number; optional):
    Maximum number of options displayed at a time, `Infinity` by
    default.

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

- maxDropdownHeight (string | number; optional):
    `max-height` of the dropdown, only applicable when
    `withScrollArea` prop is `True`, `250` by default.

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

- n_blur (number; default 0):
    An integer that represents the number of times that this element
    has lost focus.

- n_submit (number; default 0):
    An integer that represents the number of times that this element
    has been submitted.

- name (string; optional):
    Name prop.

- nothingFoundMessage (a list of or a singular dash component, string or number; optional):
    Message displayed when no option matched current search query,
    only applicable when `searchable` prop is set.

- opacity (string | number | dict; optional):
    Opacity – Accepts CSS values or a dict for responsive styles.

- openOnFocus (boolean; optional):
    If set, the dropdown opens when the input receives focus default
    `True`.

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
    Placeholder.

- pointer (boolean; optional):
    Determines whether the input should have `cursor: pointer` style,
    `False` by default.

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

- radius (number; optional):
    Key of `theme.radius` or any valid CSS value to set
    `border-radius`, numbers are converted to rem,
    `theme.defaultRadius` by default.

- readOnly (boolean; optional):
    Readonly.

- renderOption (boolean | number | string | dict | list; optional):
    A function to render content of the option, replaces the default
    content of the option.  See
    https://www.dash-mantine-components.com/functions-as-props.

- required (boolean; optional):
    Adds required attribute to the input and a red asterisk on the
    right side of label, `False` by default.

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- rightSection (a list of or a singular dash component, string or number; optional):
    Content section rendered on the right side of the input.

- rightSectionPointerEvents (a value equal to: 'auto', '-moz-initial', 'inherit', 'initial', 'revert', 'revert-layer', 'unset', 'none', 'all', 'fill', 'painted', 'stroke', 'visible', 'visibleFill', 'visiblePainted', 'visibleStroke'; optional):
    Sets `pointer-events` styles on the `rightSection` element,
    `'none'` by default.

- rightSectionProps (dict; optional):
    Props passed down to the `rightSection` element.

- rightSectionWidth (string | number; optional):
    Right section width, used to set `width` of the section and input
    `padding-right`, by default equals to the input height.

- scrollAreaProps (dict; optional):
    Props passed down to the underlying `ScrollArea` component in the
    dropdown.

    `scrollAreaProps` is a dict with keys:

    - scrollbarSize (string | number; optional):
        Scrollbar size, any valid CSS value for width/height, numbers
        are converted to rem, default value is 0.75rem.

    - type (a value equal to: 'auto', 'always', 'scroll', 'hover', 'never'; optional):
        Defines scrollbars behavior, `hover` by default  - `hover` –
        scrollbars are visible when mouse is over the scroll area  -
        `scroll` – scrollbars are visible when the scroll area is
        scrolled  - `always` – scrollbars are always visible  -
        `never` – scrollbars are always hidden  - `auto` – similar to
        `overflow: auto` – scrollbars are always visible when the
        content is overflowing.

    - scrollHideDelay (number; optional):
        Scroll hide delay in ms, applicable only when type is set to
        `hover` or `scroll`, `1000` by default.

    - scrollbars (boolean; optional):
        Axis at which scrollbars must be rendered, `'xy'` by default.

    - offsetScrollbars (boolean; optional):
        Determines whether scrollbars should be offset with padding on
        given axis, `False` by default.

    - overscrollBehavior (optional):
        Defines `overscroll-behavior` of the viewport.
        https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior.

    - startScrollPosition (dict; optional):
        Initial scroll position set on mount. Type: dictionary with
        optional `x` and `y` number properties.

        `startScrollPosition` is a dict with keys:

        - x (number; optional)

        - y (number; optional)

    - verticalScrollbarPosition (a value equal to: 'left', 'right'; optional):
        Pins the vertical scrollbar to a physical side (`left` or
        `right`) regardless of direction.  By default, the scrollbar
        follows the inline-end edge (right in LTR, left in RTL).

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

- searchValue (string; optional):
    Controlled search value.

- searchable (boolean; optional):
    Determines whether the select should be searchable, `False` by
    default.

- selectFirstOptionOnChange (boolean; optional):
    Determines whether the first option should be selected when value
    changes, `False` by default.

- selectFirstOptionOnDropdownOpen (boolean; optional):
    If set, the first option is selected when dropdown opens, `False`
    by default.

- size (optional):
    Controls input `height` and horizontal `padding`, `'sm'` by
    default.

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

- unstyled (boolean; optional):
    Remove all Mantine styling from the component.

- value (string | number | boolean; optional):
    Controlled component value.

- variant (string; optional):
    variant.

- visibleFrom (string; optional):
    Breakpoint below which the component is hidden with `display:
    none`.

- w (string | number | dict; optional):
    Width – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- withAlignedLabels (boolean; optional):
    If set, unchecked labels are aligned with the checked one
    @,default,`False`.

- withAsterisk (boolean; optional):
    Determines whether the required asterisk should be displayed.
    Overrides `required` prop. Does not add required attribute to the
    input. `False` by default.

- withCheckIcon (boolean; optional):
    Determines whether check icon should be displayed near the
    selected option label, `True` by default.

- withErrorStyles (boolean; optional):
    Determines whether the input should have red border and red text
    color when the `error` prop is set, `True` by default.

- withScrollArea (boolean; optional):
    Determines whether the options should be wrapped with
    `ScrollArea.AutoSize`, `True` by default.

- withSuccessStyles (boolean; optional):
    Determines whether the input should have green border when the
    `success` prop is set @,default,True.

- wrapperProps (dict with strings as keys and values of type boolean | number | string | dict | list; optional):
    Props passed down to the root element."""
    _children_props: typing.List[str] = ['nothingFoundMessage', 'clearButtonProps.children', 'clearButtonProps.icon', 'label', 'description', 'error', 'success', 'leftSection', 'rightSection', 'comboboxProps.children', 'comboboxProps.middlewares.flip.boundary']
    _base_nodes = ['nothingFoundMessage', 'label', 'description', 'error', 'success', 'leftSection', 'rightSection', 'children']
    _namespace = 'dash_mantine_components'
    _type = 'Select'
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

    ScrollAreaPropsStartScrollPosition = TypedDict(
        "ScrollAreaPropsStartScrollPosition",
            {
            "x": NotRequired[NumberType],
            "y": NotRequired[NumberType]
        }
    )

    ScrollAreaProps = TypedDict(
        "ScrollAreaProps",
            {
            "scrollbarSize": NotRequired[typing.Union[str, NumberType]],
            "type": NotRequired[Literal["auto", "always", "scroll", "hover", "never"]],
            "scrollHideDelay": NotRequired[NumberType],
            "scrollbars": NotRequired[typing.Union[bool, Literal["x"], Literal["y"], Literal["xy"]]],
            "offsetScrollbars": NotRequired[typing.Union[bool, Literal["x"], Literal["y"], Literal["present"]]],
            "overscrollBehavior": NotRequired[typing.Union[Literal["auto"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["contain"], Literal["none"]]],
            "startScrollPosition": NotRequired["ScrollAreaPropsStartScrollPosition"],
            "verticalScrollbarPosition": NotRequired[Literal["left", "right"]],
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
            "bga": NotRequired[typing.Union[dict, Literal["local"], Literal["scroll"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"]]],
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
            "pie": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "classNames": NotRequired[dict],
            "styles": NotRequired[typing.Any],
            "unstyled": NotRequired[bool],
            "variant": NotRequired[str],
            "attributes": NotRequired[typing.Any]
        }
    )

    ComboboxPropsTransitionProps = TypedDict(
        "ComboboxPropsTransitionProps",
            {
            "keepMounted": NotRequired[bool],
            "transition": NotRequired[typing.Union[Literal["fade"], Literal["fade-down"], Literal["fade-up"], Literal["fade-left"], Literal["fade-right"], Literal["skew-up"], Literal["skew-down"], Literal["rotate-right"], Literal["rotate-left"], Literal["slide-down"], Literal["slide-up"], Literal["slide-right"], Literal["slide-left"], Literal["scale-y"], Literal["scale-x"], Literal["scale"], Literal["pop"], Literal["pop-top-left"], Literal["pop-top-right"], Literal["pop-bottom-left"], Literal["pop-bottom-right"]]],
            "duration": NotRequired[NumberType],
            "exitDuration": NotRequired[NumberType],
            "timingFunction": NotRequired[str],
            "mounted": bool
        }
    )

    ComboboxPropsMiddlewaresFlipPadding = TypedDict(
        "ComboboxPropsMiddlewaresFlipPadding",
            {
            "top": NotRequired[NumberType],
            "left": NotRequired[NumberType],
            "bottom": NotRequired[NumberType],
            "right": NotRequired[NumberType]
        }
    )

    ComboboxPropsMiddlewaresFlipRootBoundary = TypedDict(
        "ComboboxPropsMiddlewaresFlipRootBoundary",
            {
            "x": NumberType,
            "y": NumberType,
            "width": NumberType,
            "height": NumberType
        }
    )

    ComboboxPropsMiddlewaresFlipBoundary = TypedDict(
        "ComboboxPropsMiddlewaresFlipBoundary",
            {
            "x": NumberType,
            "y": NumberType,
            "width": NumberType,
            "height": NumberType
        }
    )

    ComboboxPropsMiddlewaresFlip = TypedDict(
        "ComboboxPropsMiddlewaresFlip",
            {
            "padding": NotRequired[typing.Union[NumberType, "ComboboxPropsMiddlewaresFlipPadding"]],
            "mainAxis": NotRequired[bool],
            "crossAxis": NotRequired[typing.Union[bool, Literal["alignment"]]],
            "rootBoundary": NotRequired[typing.Union[Literal["viewport"], Literal["layoutViewport"], Literal["document"], "ComboboxPropsMiddlewaresFlipRootBoundary"]],
            "elementContext": NotRequired[Literal["reference", "floating"]],
            "altBoundary": NotRequired[bool],
            "fallbackPlacements": NotRequired[typing.Sequence[Literal["top", "left", "bottom", "right", "top-end", "top-start", "left-end", "left-start", "bottom-end", "bottom-start", "right-end", "right-start"]]],
            "fallbackStrategy": NotRequired[Literal["bestFit", "initialPlacement"]],
            "fallbackAxisSideDirection": NotRequired[Literal["none", "end", "start"]],
            "flipAlignment": NotRequired[bool],
            "boundary": NotRequired[typing.Union["ComboboxPropsMiddlewaresFlipBoundary", Literal["clippingAncestors"], typing.Sequence[ComponentType]]]
        }
    )

    ComboboxPropsMiddlewares = TypedDict(
        "ComboboxPropsMiddlewares",
            {
            "shift": NotRequired[typing.Union[bool, typing.Any]],
            "flip": NotRequired[typing.Union[bool, "ComboboxPropsMiddlewaresFlip"]],
            "inline": NotRequired[typing.Union[bool]],
            "size": NotRequired[typing.Union[bool, typing.Any]]
        }
    )

    ComboboxProps = TypedDict(
        "ComboboxProps",
            {
            "children": NotRequired[ComponentType],
            "size": NotRequired[typing.Union[Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "dropdownPadding": NotRequired[typing.Union[str, NumberType]],
            "resetSelectionOnOptionHover": NotRequired[bool],
            "readOnly": NotRequired[bool],
            "position": NotRequired[Literal["top", "left", "bottom", "right", "top-end", "top-start", "left-end", "left-start", "bottom-end", "bottom-start", "right-end", "right-start"]],
            "offset": NotRequired[typing.Union[NumberType]],
            "keepMounted": NotRequired[bool],
            "transitionProps": NotRequired["ComboboxPropsTransitionProps"],
            "width": NotRequired[typing.Union[str, NumberType]],
            "middlewares": NotRequired["ComboboxPropsMiddlewares"],
            "withArrow": NotRequired[bool],
            "arrowSize": NotRequired[NumberType],
            "arrowOffset": NotRequired[NumberType],
            "arrowRadius": NotRequired[NumberType],
            "arrowPosition": NotRequired[Literal["center", "side", "merge"]],
            "withinPortal": NotRequired[bool],
            "portalProps": NotRequired[dict],
            "zIndex": NotRequired[typing.Union[str, NumberType]],
            "radius": NotRequired[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "shadow": NotRequired[typing.Union[Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]],
            "disabled": NotRequired[bool],
            "returnFocus": NotRequired[bool],
            "floatingStrategy": NotRequired[Literal["fixed", "absolute"]],
            "overlayProps": NotRequired[dict],
            "withOverlay": NotRequired[bool],
            "hideDetached": NotRequired[bool],
            "preventPositionChangeWhenVisible": NotRequired[bool],
            "clickOutsideCapture": NotRequired[bool],
            "classNames": NotRequired[dict],
            "styles": NotRequired[typing.Any],
            "unstyled": NotRequired[bool],
            "variant": NotRequired[str],
            "attributes": NotRequired[typing.Any]
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
        value: typing.Optional[typing.Union[str, NumberType, bool]] = None,
        searchable: typing.Optional[bool] = None,
        withCheckIcon: typing.Optional[bool] = None,
        withAlignedLabels: typing.Optional[bool] = None,
        checkIconPosition: typing.Optional[Literal["left", "right"]] = None,
        nothingFoundMessage: typing.Optional[ComponentType] = None,
        searchValue: typing.Optional[str] = None,
        allowDeselect: typing.Optional[bool] = None,
        clearable: typing.Optional[bool] = None,
        clearButtonProps: typing.Optional["ClearButtonProps"] = None,
        hiddenInputProps: typing.Optional[dict] = None,
        scrollAreaProps: typing.Optional["ScrollAreaProps"] = None,
        autoSelectOnBlur: typing.Optional[bool] = None,
        clearSearchOnFocus: typing.Optional[bool] = None,
        openOnFocus: typing.Optional[bool] = None,
        clearSectionMode: typing.Optional[Literal["rightSection", "both", "clear"]] = None,
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
        bga: typing.Optional[typing.Union[dict, Literal["local"], Literal["scroll"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"]]] = None,
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
        wrapperProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        readOnly: typing.Optional[bool] = None,
        label: typing.Optional[ComponentType] = None,
        description: typing.Optional[ComponentType] = None,
        error: typing.Optional[ComponentType] = None,
        success: typing.Optional[ComponentType] = None,
        required: typing.Optional[bool] = None,
        withAsterisk: typing.Optional[bool] = None,
        labelProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        descriptionProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        errorProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        successProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        inputWrapperOrder: typing.Optional[typing.Sequence[Literal["label", "description", "error", "input"]]] = None,
        leftSection: typing.Optional[ComponentType] = None,
        leftSectionWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        leftSectionProps: typing.Optional[dict] = None,
        leftSectionPointerEvents: typing.Optional[Literal["auto", "-moz-initial", "inherit", "initial", "revert", "revert-layer", "unset", "none", "all", "fill", "painted", "stroke", "visible", "visibleFill", "visiblePainted", "visibleStroke"]] = None,
        rightSection: typing.Optional[ComponentType] = None,
        rightSectionWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        rightSectionProps: typing.Optional[dict] = None,
        rightSectionPointerEvents: typing.Optional[Literal["auto", "-moz-initial", "inherit", "initial", "revert", "revert-layer", "unset", "none", "all", "fill", "painted", "stroke", "visible", "visibleFill", "visiblePainted", "visibleStroke"]] = None,
        radius: typing.Optional[typing.Union[str, NumberType]] = None,
        disabled: typing.Optional[bool] = None,
        size: typing.Optional[typing.Optional[str]] = None,
        pointer: typing.Optional[bool] = None,
        withErrorStyles: typing.Optional[bool] = None,
        withSuccessStyles: typing.Optional[bool] = None,
        placeholder: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        inputProps: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        loading: typing.Optional[bool] = None,
        loadingPosition: typing.Optional[Literal["left", "right"]] = None,
        data: typing.Optional[typing.Sequence[typing.Union[str, int, bool, typing.Dict[str, typing.Any]]]] = None,
        dropdownOpened: typing.Optional[bool] = None,
        selectFirstOptionOnChange: typing.Optional[bool] = None,
        selectFirstOptionOnDropdownOpen: typing.Optional[bool] = None,
        comboboxProps: typing.Optional["ComboboxProps"] = None,
        limit: typing.Optional[NumberType] = None,
        withScrollArea: typing.Optional[bool] = None,
        maxDropdownHeight: typing.Optional[typing.Union[str, NumberType]] = None,
        renderOption: typing.Optional[typing.Any] = None,
        filter: typing.Optional[typing.Any] = None,
        floatingHeight: typing.Optional[str] = None,
        classNames: typing.Optional[dict] = None,
        styles: typing.Optional[typing.Any] = None,
        unstyled: typing.Optional[bool] = None,
        variant: typing.Optional[str] = None,
        attributes: typing.Optional[typing.Any] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        n_blur: typing.Optional[NumberType] = None,
        n_submit: typing.Optional[NumberType] = None,
        debounce: typing.Optional[typing.Union[NumberType, bool]] = None,
        persistence: typing.Optional[typing.Union[str, NumberType, bool]] = None,
        persisted_props: typing.Optional[typing.Sequence[str]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowDeselect', 'aria-*', 'attributes', 'autoSelectOnBlur', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'checkIconPosition', 'className', 'classNames', 'clearButtonProps', 'clearSearchOnFocus', 'clearSectionMode', 'clearable', 'comboboxProps', 'darkHidden', 'data', 'data-*', 'debounce', 'description', 'descriptionProps', 'disabled', 'display', 'dropdownOpened', 'error', 'errorProps', 'ff', 'filter', 'flex', 'floatingHeight', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'hiddenInputProps', 'inputProps', 'inputWrapperOrder', 'inset', 'label', 'labelProps', 'left', 'leftSection', 'leftSectionPointerEvents', 'leftSectionProps', 'leftSectionWidth', 'lh', 'lightHidden', 'limit', 'loading', 'loadingPosition', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDropdownHeight', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'n_blur', 'n_submit', 'name', 'nothingFoundMessage', 'opacity', 'openOnFocus', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'placeholder', 'pointer', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'radius', 'readOnly', 'renderOption', 'required', 'right', 'rightSection', 'rightSectionPointerEvents', 'rightSectionProps', 'rightSectionWidth', 'scrollAreaProps', 'searchValue', 'searchable', 'selectFirstOptionOnChange', 'selectFirstOptionOnDropdownOpen', 'size', 'style', 'styles', 'success', 'successProps', 'ta', 'tabIndex', 'td', 'top', 'tt', 'unstyled', 'value', 'variant', 'visibleFrom', 'w', 'withAlignedLabels', 'withAsterisk', 'withCheckIcon', 'withErrorStyles', 'withScrollArea', 'withSuccessStyles', 'wrapperProps']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'allowDeselect', 'aria-*', 'attributes', 'autoSelectOnBlur', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'checkIconPosition', 'className', 'classNames', 'clearButtonProps', 'clearSearchOnFocus', 'clearSectionMode', 'clearable', 'comboboxProps', 'darkHidden', 'data', 'data-*', 'debounce', 'description', 'descriptionProps', 'disabled', 'display', 'dropdownOpened', 'error', 'errorProps', 'ff', 'filter', 'flex', 'floatingHeight', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'hiddenInputProps', 'inputProps', 'inputWrapperOrder', 'inset', 'label', 'labelProps', 'left', 'leftSection', 'leftSectionPointerEvents', 'leftSectionProps', 'leftSectionWidth', 'lh', 'lightHidden', 'limit', 'loading', 'loadingPosition', 'loading_state', 'lts', 'm', 'mah', 'maw', 'maxDropdownHeight', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'n_blur', 'n_submit', 'name', 'nothingFoundMessage', 'opacity', 'openOnFocus', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'placeholder', 'pointer', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'radius', 'readOnly', 'renderOption', 'required', 'right', 'rightSection', 'rightSectionPointerEvents', 'rightSectionProps', 'rightSectionWidth', 'scrollAreaProps', 'searchValue', 'searchable', 'selectFirstOptionOnChange', 'selectFirstOptionOnDropdownOpen', 'size', 'style', 'styles', 'success', 'successProps', 'ta', 'tabIndex', 'td', 'top', 'tt', 'unstyled', 'value', 'variant', 'visibleFrom', 'w', 'withAlignedLabels', 'withAsterisk', 'withCheckIcon', 'withErrorStyles', 'withScrollArea', 'withSuccessStyles', 'wrapperProps']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Select, self).__init__(**args)

setattr(Select, "__init__", _explicitize_args(Select.__init__))

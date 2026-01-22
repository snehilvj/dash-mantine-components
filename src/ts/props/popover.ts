import {
    ArrowPosition,
    FloatingAxesOffsets,
    FloatingPosition,
    FloatingStrategy,
    MantineRadius,
    MantineShadow,
    PopoverWidth,
} from '@mantine/core';
import { PopoverMiddlewares } from '@mantine/core/lib/components/Popover/Popover.types';
import { StylesApiProps } from './styles';
import { TransitionProps } from './transition';

export interface __PopoverProps {
    /** Dropdown position relative to the target element, `'bottom'` by default */
    position?: FloatingPosition;
    /** Offset of the dropdown element, `8` by default */
    offset?: number | FloatingAxesOffsets;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** If set dropdown will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead */
    keepMounted?: boolean;
    /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
    transitionProps?: TransitionProps;
    /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
    width?: PopoverWidth;
    /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `7` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position */
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within the `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` when `withinPortal` is true */
    portalProps?: object;
    /** Dropdown `z-index`, `300` by default */
    zIndex?: string | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: MantineRadius | number;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: MantineShadow;
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
    /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy), `'absolute'` by default */
    floatingStrategy?: FloatingStrategy;
    /** Props passed down to `Overlay` component */
    overlayProps?: object;
    /** Determines whether the overlay should be displayed when the dropdown is opened, `false` by default */
    withOverlay?: boolean;
}

export interface PopoverProps extends __PopoverProps, StylesApiProps {
    /** `Popover.Target` and `Popover.Dropdown` components */
    children?: React.ReactNode;
    /** Controlled dropdown opened state */
    opened?: boolean;
    /** Determines whether dropdown should be closed on outside clicks, `true` by default */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, `false` by default */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
    closeOnEscape?: boolean;
    /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
    withRoles?: boolean;
    /** If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen, `true` by default */
    hideDetached?: boolean;
}

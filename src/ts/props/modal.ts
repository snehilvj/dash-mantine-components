import {
    MantineShadow,
    MantineSize,
    MantineSpacing,
    TransitionOverride,
} from "@mantine/core";
import { BoxProps } from "./box";
import { __CloseButtonProps } from "./button";
import { OverlayProps } from "./overlay";

export interface ModalBaseProps extends BoxProps {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened: boolean;
    /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
    lockScroll?: boolean;
    /** Determines whether focus should be trapped, `true` by default */
    trapFocus?: boolean;
    /** Determines whether the component should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props passed down to the Portal component when `withinPortal` is set */
    portalProps?: object;
    /** Modal/drawer content */
    children?: React.ReactNode;
    /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
    closeOnClickOutside?: boolean;
    /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
    transitionProps?: TransitionOverride;
    /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
    closeOnEscape?: boolean;
    /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
    returnFocus?: boolean;
    /** `z-index` CSS property of the root element, `200` by default */
    zIndex?: string | number;
    /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
    shadow?: MantineShadow;
    /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
    padding?: MantineSpacing;
    /** Controls width of the content area, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Props passed down to react-remove-scroll, can be used to customize scroll lock behavior */
    removeScrollProps?: object;
}

export interface ModalBaseOverlayProps
    extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}

export interface ModalBaseCloseButtonProps
    extends __CloseButtonProps,
        BoxProps {}

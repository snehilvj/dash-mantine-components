import {
    MantineRadius,
    MantineShadow,
    MantineSize,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "./box";
import { __CloseButtonProps } from "./button";
import { OverlayProps } from "./overlay";
import { TransitionProps } from "./transition";


export interface ModalBaseProps extends BoxProps {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened?: boolean;
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
    transitionProps?: TransitionProps;
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
    transitionProps?: TransitionProps;
}


export interface ModalBaseCloseButtonProps
    extends __CloseButtonProps,
        BoxProps {}

export interface ModalProps extends ModalBaseProps {
    /** Modal title */
    title?: React.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: React.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
    /** Top/bottom modal offset, `5dvh` by default */
    yOffset?: React.CSSProperties["marginTop"];
    /** Left/right modal offset, `5vw` by default */
    xOffset?: React.CSSProperties["marginLeft"];
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether the modal should be centered vertically, `false` by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen, `false` by default */
    fullScreen?: boolean;
}

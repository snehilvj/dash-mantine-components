import {
    HorizontalSectionPosition,
    HorizontalSectionWidth,
} from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection.styles";
import { VerticalSectionPosition } from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection.styles";
import {
    ArrowPosition,
    FloatingAxesOffsets,
    FloatingPosition,
} from "@mantine/core/lib/Floating/types";
import { PopoverMiddlewares } from "@mantine/core/lib/Popover/Popover.types";
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";
import {
    BackgroundAttachment,
    BackgroundColor,
    BackgroundPosition,
    BackgroundRepeat,
    BackgroundSize,
    Display,
    FontStyle,
    FontWeight,
    HTMLInputTypeAttribute,
    LetterSpacing,
    LineHeight,
    Margin,
    Position,
    TextAlign,
    TextDecoration,
    TextTransform,
    TopLeftRightBottom,
} from "./css";
import { ColorFormat } from "@mantine/core/lib/ColorPicker/types";
import { MantineGradient } from "@mantine/core";

export type MantineSize = "xs" | "sm" | "md" | "lg" | "xl" | string;
export type MantineNumberSize = MantineSize | number;
export type MantineShadow = MantineSize;

export type DefaultMantineColor =
    | "dark"
    | "gray"
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "teal";

export type MantineColor = DefaultMantineColor | string;

export type MantineStyleSystemProps = {
    /** margin */
    m?: MantineNumberSize;
    /** marginTop, marginBottom */
    my?: MantineNumberSize;
    /** marginRight, marginLeft */
    mx?: MantineNumberSize;
    /** marginTop */
    mt?: MantineNumberSize;
    /** marginBottom */
    mb?: MantineNumberSize;
    /** marginLeft */
    ml?: MantineNumberSize;
    /** marginRight */
    mr?: MantineNumberSize;
    /** padding */
    p?: MantineNumberSize;
    /** paddingTop, paddingBottom */
    py?: MantineNumberSize;
    /** paddingRight, paddingLeft */
    px?: MantineNumberSize;
    /** paddingTop */
    pt?: MantineNumberSize;
    /** paddingBottom */
    pb?: MantineNumberSize;
    /** paddingLeft */
    pl?: MantineNumberSize;
    /** paddingRight */
    pr?: MantineNumberSize;
    /** background */
    bg?: MantineColor;
    /** color */
    c?: MantineColor;
    /** opacity */
    opacity?: number;
    /** fontFamily */
    ff?: "initial" | "inherit" | string;
    /** fontSize */
    fz?: MantineNumberSize;
    /** fontWeight */
    fw?: FontWeight;
    /** letterSpacing */
    lts?: LetterSpacing;
    /** textAlign */
    ta?: TextAlign;
    /** lineHeight */
    lh?: LineHeight;
    /** fontStyle */
    fs?: FontStyle;
    /** textTransform */
    tt?: TextTransform;
    /** textDecoration */
    td?: TextDecoration;
    /** width */
    w?: MantineNumberSize;
    /** minWidth */
    miw?: MantineNumberSize;
    /** maxWidth */
    maw?: MantineNumberSize;
    /** height */
    h?: MantineNumberSize;
    /** minHeight */
    mih?: MantineNumberSize;
    /** minHeight */
    mah?: MantineNumberSize;
    /** backgroundSize */
    bgsz?: BackgroundSize;
    /** backgroundPosition */
    bgp?: BackgroundPosition;
    /** backgroundRepeat */
    bgr?: BackgroundRepeat;
    /** backgroundAttachment */
    bga?: BackgroundAttachment;
    /** position */
    pos?: Position;
    /** top */
    top?: TopLeftRightBottom;
    /** left */
    left?: TopLeftRightBottom;
    /** bottom */
    bottom?: TopLeftRightBottom;
    /** right */
    right?: TopLeftRightBottom;
    /** inset */
    inset?: TopLeftRightBottom;
    /** display */
    display?: Display;
};

export type MantineStylesAPIProps = {
    /** add class names to Mantine components */
    classNames?: object;
    /** Mantine styles API  */
    styles?: any;
    /** Remove all Mantine styling from the component */
    unstyled?: boolean;
    /** With sx you can add styles to component root element. If you need to customize styles of other elements within component use styles prop */
    sx?: any;
};

export type LoaderProps = {
    /** Defines width of loader */
    size?: MantineNumberSize;
    /** Loader color from theme */
    color?: MantineColor;
    /** Loader appearance */
    variant?: "bars" | "oval" | "dots";
};

export type InputWrapperBaseProps = {
    /** Input label, displayed before input */
    label?: React.ReactNode;
    /** Input description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** Adds required attribute to the input and red asterisk on the right side of label */
    required?: boolean;
    /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input */
    withAsterisk?: boolean;
    /** Props spread to label element */
    labelProps?: Record<string, any>;
    /** Props spread to description element */
    descriptionProps?: Record<string, any>;
    /** Props spread to error element */
    errorProps?: Record<string, any>;
    /** Controls order of the Input.Wrapper elements */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
};

export type InputSharedProps = {
    /** Adds icon on the left side of input */
    icon?: React.ReactNode;
    /** Width of icon section */
    iconWidth?: string | number;
    /** Right section of input, similar to icon but on the right */
    rightSection?: React.ReactNode;
    /** Width of right section, is used to calculate input padding-right */
    rightSectionWidth?: string | number;
    /** Props spread to rightSection div element */
    rightSectionProps?: Record<string, any>;
    /** Properties spread to root element */
    wrapperProps?: Record<string, any>;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Defines input appearance, defaults to default in light color scheme and filled in dark */
    variant?: "default" | "filled" | "unstyled";
    /** Disabled input state */
    disabled?: boolean;
    /** Input size */
    size?: MantineSize;
    /** Placeholder */
    placeholder?: string;
    /** Name prop */
    name?: string;
};

export type InputComponentProps = InputSharedProps & InputWrapperBaseProps;

export type TransitionProps = {
    /** If set element will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Predefined transition name or transition styles */
    transition: MantineTransitionName;
    /** Transition duration in ms */
    duration?: number;
    /** Exit transition duration in ms */
    exitDuration?: number;
    /** Transition timing function, defaults to theme.transitionTimingFunction */
    timingFunction?: string;
    /** When true, component will be mounted */
    mounted: boolean;
};

export type CloseButtonProps = {
    /** Width and height of X icon */
    iconSize?: number | string;
    /** Icon */
    children?: React.ReactNode;
    /** Controls appearance, subtle by default */
    variant?:
        | "subtle"
        | "filled"
        | "outline"
        | "light"
        | "default"
        | "transparent"
        | "gradient";
    /** Key of theme.colors */
    color?: MantineColor;
    /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
    gradient?: MantineGradient;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Predefined button size or any valid CSS value to set width and height */
    size?: MantineNumberSize;
    /** Props added to Loader component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps & MantineStylesAPIProps & MantineStyleSystemProps;
    /** Indicates loading state */
    loading?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Indicates disabled state */
    disabled?: boolean;
};

export type PopoverBaseProps = {
    /** Dropdown position relative to target */
    position?: FloatingPosition;
    /** Default Y axis or either (main, cross, alignment) X and Y axis space between target element and dropdown  */
    offset?: number | FloatingAxesOffsets;
    /** useEffect dependencies to force update dropdown position */
    positionDependencies?: any[];
    /** If set dropdown will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 150, transition: 'fade' } by default */
    transitionProps?: Omit<TransitionProps, "mounted">;
    /** Dropdown width, or 'target' to make dropdown width the same as target element */
    width?: "target" | number;
    /** Floating ui middlewares to configure position handling */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size */
    arrowSize?: number;
    /** Arrow offset */
    arrowOffset?: number;
    /** Arrow border-radius */
    arrowRadius?: number;
    /** Arrow position **/
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within Portal, defaults to false */
    withinPortal?: boolean;
    /** Dropdown z-index */
    zIndex?: number;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Key of theme.shadow or any other valid css box-shadow value */
    shadow?: MantineShadow;
    /** If set, popover dropdown will not render */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, false by default */
    returnFocus?: boolean;
};

export type PopoverProps = {
    /** Popover.Target and Popover.Dropdown components */
    children: React.ReactNode;
    /** Initial opened state for uncontrolled component */
    defaultOpened?: boolean;
    /** Controls dropdown opened state */
    opened?: boolean;
    /** Determines whether dropdown should be closed on outside clicks, default to true */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, default to false */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
    closeOnEscape?: boolean;
    /** id base to create accessibility connections */
    id?: string;
    /** Determines whether dropdown and target element should have accessible roles, defaults to true */
    withRoles?: boolean;
} & PopoverBaseProps;

export type ModalBaseSettings = {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened: boolean;
    /** Child component */
    children?: React.ReactNode;
    /** Determines whether the modal/drawer should be closed when user clicks on the overlay, true by default */
    closeOnClickOutside?: boolean;
    /** Props added to Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'pop' } by default */
    transitionProps?: TransitionProps;
    /** Determines whether component should be rendered inside Portal, true by default */
    withinPortal?: boolean;
    /** Target element selector where Portal should be rendered, by default new element is created and appended to the document.body */
    target?: string;
    /** Determines whether scroll should be locked when opened={true}, defaults to true */
    lockScroll?: boolean;
    /** Determines whether focus should be trapped, true by default */
    trapFocus?: boolean;
    /** z-index CSS property of root element, 200 by default */
    zIndex?: number;
    /** Key of theme.spacing or any valid CSS value to set content, header and footer padding, 'md' by default */
    padding?: MantineNumberSize;
    /** Determines whether focus should be returned to the last active element onClose is called, true by default */
    returnFocus?: boolean;
    /** Determines whether onClose should be called when user presses escape key, true by default */
    closeOnEscape?: boolean;
    /** Controls content width, 'md' by default */
    size?: MantineNumberSize;
    /** Key of theme.shadows or any valid css box-shadow value, 'xl' by default */
    shadow?: MantineShadow;
};

export type ModalRootProps = {
    /** Top/bottom modal offset, 5vh by default */
    yOffset?: Margin;
    /** Left/right modal offset, 5vw by default */
    xOffset?: Margin;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Determines whether the modal should be centered vertically, false by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen */
    fullScreen?: boolean;
} & ModalBaseSettings;

export type OverlayProps = {
    variant?: string;
    /** Overlay background-color opacity 0–1, disregarded when gradient prop is set, 0.6 by default */
    opacity?: number;
    /** Overlay background-color, #000 by default */
    color?: BackgroundColor;
    /** Overlay background blur, 0 by default */
    blur?: number | string;
    /** Changes overlay to gradient, if set color prop is ignored */
    gradient?: string;
    /** Overlay z-index, 200 by default */
    zIndex?: number;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Determines whether content inside overlay should be vertically and horizontally centered, false by default */
    center?: boolean;
    /** Determines whether overlay should have fixed position instead of absolute, false by default */
    fixed?: boolean;
};

export type ModalBaseOverlayProps = {
    /** Props added to Transition component */
    transitionProps?: TransitionProps;
} & OverlayProps;

export type ModalProps = {
    /** Modal title */
    title?: React.ReactNode;
    /** Determines whether overlay should be rendered, true by default */
    withOverlay?: boolean;
    /** Props added to Overlay component, use configure opacity, background color, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: React.ReactNode;
    /** Determines whether close button should be rendered, true by default */
    withCloseButton?: boolean;
    /** Props added to close button */
    closeButtonProps?: CloseButtonProps;
} & Omit<ModalRootProps, "title">;

export type VerticalSectionSharedProps = {
    variant?: string;
    /** Section content */
    children: React.ReactNode;
    /** Component height with breakpoints */
    height: number | string;
    /** Determines whether the element should have border */
    withBorder?: boolean;
    /** Changes position to fixed, controlled by AppShell component if rendered inside */
    fixed?: boolean;
    /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
    position?: VerticalSectionPosition;
    /** z-index */
    zIndex?: number;
};

export type HorizontalSectionSharedProps = {
    variant?: string;
    /** Component width with breakpoints */
    width?: HorizontalSectionWidth;
    /** Component height */
    height?: string | number;
    /** HorizontalSection content */
    children: React.ReactNode;
    /** Determines whether the element should have border */
    withBorder?: boolean;
    /** Set position to fixed */
    fixed?: boolean;
    /** Position for fixed variant */
    position?: HorizontalSectionPosition;
    /** Breakpoint at which component will be hidden if hidden prop is true */
    hiddenBreakpoint?: MantineNumberSize;
    /** Set to true to hide component at hiddenBreakpoint */
    hidden?: boolean;
    /** z-index */
    zIndex?: number;
};

type SelectItem = {
    value: string;
    label?: string;
    selected?: boolean;
    disabled?: boolean;
    group?: string;
};

export type SelectSharedProps = {
    /** Input size */
    size?: MantineSize;
    /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 0, transition: 'fade' } by default */
    transitionProps?: TransitionProps;
    /** Dropdown shadow from theme or any value to set box-shadow */
    shadow?: MantineShadow;
    /** Initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Limit amount of items displayed at a time for searchable select */
    limit?: number;
    /** Nothing found label */
    nothingFound?: React.ReactNode;
    /** Dropdown z-index */
    zIndex?: number;
    /** Dropdown positioning behavior */
    dropdownPosition?: "bottom" | "top" | "flip";
    /** Whether to switch item order and keyboard navigation on dropdown position flip */
    switchDirectionOnFlip?: boolean;
};

export type ColorPickerBaseProps = {
    /** Controlled component value */
    value?: string;
    /** Color format */
    format?: ColorFormat;
    /** Set to false to display swatches only */
    withPicker?: boolean;
    /** Predefined colors */
    swatches?: string[];
    /** Number of swatches displayed in one row */
    swatchesPerRow?: number;
    /** Predefined component size */
    size?: MantineSize;
};

export type TextareaProps = {
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Props passed to root element */
    wrapperProps?: Record<string, any>;
    /** Input size */
    size?: MantineSize;
};

export type TextInputProps = {
    /** Input element type */
    type?: HTMLInputTypeAttribute;
    /** Props passed to root element (InputWrapper component) */
    wrapperProps?: Record<string, any>;
    /** Input size */
    size?: MantineSize;
};

export type TextProps = {
    /** Text content */
    children?: React.ReactNode;
    /** Key of theme.fontSizes or any valid CSS value to set font-size */
    size?: MantineNumberSize;
    /** Key of theme.colors or any valid CSS color */
    color?: "dimmed" | MantineColor;
    /** Sets font-weight css property */
    weight?: FontWeight;
    /** Sets text-transform css property */
    transform?: TextTransform;
    /** Sets text-align css property */
    align?: TextAlign;
    /** Link or text variant */
    variant?: "text" | "gradient";
    /** CSS -webkit-line-clamp property */
    lineClamp?: number;
    /** CSS truncate overflowing text with an ellipsis */
    truncate?: "end" | "start" | true;
    /** Sets line-height to 1 for centering */
    inline?: boolean;
    /** Underline the text */
    underline?: boolean;
    /** Add strikethrough styles */
    strikethrough?: boolean;
    /** Adds font-style: italic style */
    italic?: boolean;
    /** Inherit font properties from parent element */
    inherit?: boolean;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
    /** Shorthand for component="span" */
    span?: boolean;
};

export type TooltipBaseProps = {
    /** Target element */
    children: React.ReactNode;
    /** Tooltip position relative to target element (default) or mouse (floating) */
    position?: FloatingPosition;
    /** Key of the prop that should be used to get element ref */
    refProp?: string;
    /** Tooltip label */
    label: React.ReactNode;
    /** Determines whether tooltip should be rendered within Portal */
    withinPortal?: boolean;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Defines whether content should be wrapped on to the next line */
    multiline?: boolean;
    /** Tooltip width */
    width?: number | "auto";
    /** Tooltip z-index */
    zIndex?: number;
    /** Disables tooltip */
    disabled?: boolean;
};

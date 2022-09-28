import type {
    MantineGradient,
    MantineTheme,
    MantineSize,
    MantineNumberSize,
    MantineShadow,
    MantineColor,
} from "@mantine/styles";
import { InputVariant } from "@mantine/core/lib/Input";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { PopoverWidth } from "@mantine/core/lib/Popover/Popover.types";
import { SelectItem } from "@mantine/core/lib/Select/";

export type MantineStyleSystemProps = {
    /** margin props */
    m?: MantineNumberSize;
    /** margin props */
    my?: MantineNumberSize;
    /** margin props */
    mx?: MantineNumberSize;
    /** margin props */
    mt?: MantineNumberSize;
    /** margin props */
    mb?: MantineNumberSize;
    /** margin props */
    ml?: MantineNumberSize;
    /** margin props */
    mr?: MantineNumberSize;
    /** padding props */
    p?: MantineNumberSize;
    /** padding props */
    py?: MantineNumberSize;
    /** padding props */
    px?: MantineNumberSize;
    /** padding props */
    pt?: MantineNumberSize;
    /** padding props */
    pb?: MantineNumberSize;
    /** padding props */
    pl?: MantineNumberSize;
    /** padding props */
    pr?: MantineNumberSize;
};

export type DashBaseProps = {
    /** Often used with CSS to style elements with common properties */
    className?: string;
    /** Inline style */
    style?: any;
    /** Mantine styles API  */
    styles?: object;
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Remove all Mantine styling from the component */
    unstyled?: boolean;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
};

export type DefaultProps = DashBaseProps & MantineStyleSystemProps;

export type MantineColors =
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

export type FontWeight =
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit"
    | number;

export type TextProps = {
    /** Content */
    children?: React.ReactNode;
    /** Key of theme.fontSizes or number to set font-size in px */
    size?: MantineNumberSize;
    /** Key of theme.colors or any valid CSS color */
    color?: "dimmed" | MantineColor;
    /** Sets font-weight css property */
    weight?: FontWeight;
    /** Sets text-transform css property */
    transform?:
        | "-moz-initial"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "capitalize"
        | "full-size-kana"
        | "full-width"
        | "lowercase"
        | "uppercase";
    /** Sets text-align css property */
    align?: AlignContentProps;
    /** Link or text variant */
    variant?: "text" | "link" | "gradient";
    /** CSS -webkit-line-clamp property */
    lineClamp?: number;
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

export type LoaderProps = {
    /** Defines width of loader */
    size?: MantineNumberSize;
    /** Loader color from theme */
    color?: MantineColor;
    /** Loader appearance */
    variant?: MantineTheme["loader"];
} & DefaultProps;

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
    /** Controls order of the Input.Wrapper elements */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
};

export interface InputSharedProps {
    /** Adds icon on the left side of input */
    icon?: React.ReactNode;
    /** Width of icon section in px */
    iconWidth?: number;
    /** Right section of input, similar to icon but on the right */
    rightSection?: React.ReactNode;
    /** Width of right section, is used to calculate input padding-right */
    rightSectionWidth?: number;
    /** Sets required on input element */
    required?: boolean;
    /** Input border-radius from theme or number to set border-radius in px */
    radius?: MantineSize;
    /** Defines input appearance, defaults to default in light color scheme and filled in dark */
    variant?: InputVariant;
    /** Disabled input state */
    disabled?: boolean;
    /** Input size */
    size?: MantineSize;
}

export type TextAreaProps = {
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Props passed to root element */
} & InputSharedProps &
    InputWrapperBaseProps;

export type MantineTransition =
    | "fade"
    | "skew-up"
    | "skew-down"
    | "rotate-right"
    | "rotate-left"
    | "slide-down"
    | "slide-up"
    | "slide-right"
    | "slide-left"
    | "scale-y"
    | "scale-x"
    | "scale"
    | "pop"
    | "pop-top-left"
    | "pop-top-right"
    | "pop-bottom-left"
    | "pop-bottom-right";

export type AlignContentProps =
    | "left"
    | "right"
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "center"
    | "end"
    | "start"
    | "justify"
    | "match-parent";

export type JustifyContentProps =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";

export type LoadingStateProps = {
    /** Object that holds the loading state object coming from dash-renderer */
    loading_state?: {
        /** Determines if the component is loading or not */
        is_loading: boolean;
        /** Holds which property is loading */
        prop_name: string;
        /** Holds the name of the component that is loading */
        component_name: string;
    };
};

export type PopoverBaseProps = {
    /** Dropdown position relative to target */
    position?: FloatingPosition;
    /** Space between target element and dropdown in px */
    offset?: number;
    /** One of premade transitions ot transition object */
    transition?: MantineTransition;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Exit transition duration in ms */
    exitTransitionDuration?: number;
    /** Dropdown width, or 'target' to make dropdown width the same as target element */
    width?: PopoverWidth;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size in px */
    arrowSize?: number;
    /** Arrow offset in px */
    arrowOffset?: number;
    /** Dropdown z-index */
    zIndex?: number;
    /** Radius from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Key of theme.shadow or any other valid css box-shadow value */
    shadow?: MantineShadow;
};

export type SelectSharedProps = {
    /** Select data used to renderer items in dropdown */
    data: (string | SelectItem)[];
    /** Input size */
    size?: MantineSize;
    /** Dropdown body appear/disappear transition */
    transition?: MantineTransition;
    /** Dropdown body transition duration */
    transitionDuration?: number;
    /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or any value to set box-shadow */
    shadow?: MantineSize;
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
    /** Placeholder */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
} & InputSharedProps &
    InputWrapperBaseProps;

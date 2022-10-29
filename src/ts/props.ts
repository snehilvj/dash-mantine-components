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
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";
import { FirstDayOfWeek } from "@mantine/dates/lib/types";
import { VerticalSectionPosition } from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection.styles";
import {
    HorizontalSectionPosition,
    HorizontalSectionWidth,
} from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection.styles";
import {
    AccordionChevronPosition,
    AccordionHeadingOrder,
    AccordionVariant,
} from "@mantine/core/lib/Accordion/Accordion.types";

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
    /** With sx you can add styles to component root element. If you need to customize styles of other elements within component use styles prop */
    sx?: any;
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
    radius?: MantineNumberSize;
    /** Defines input appearance, defaults to default in light color scheme and filled in dark */
    variant?: InputVariant;
    /** Disabled input state */
    disabled?: boolean;
    /** Input size */
    size?: MantineSize;
    /** Placeholder */
    placeholder?: string;
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
    transition?: MantineTransitionName;
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
    /** Maximum dropdown height in px */
    maxDropdownHeight?: number;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Dropdown body appear/disappear transition */
    transition?: MantineTransitionName;
    /** Dropdown body transition duration */
    transitionDuration?: number;
    /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or any value to set box-shadow */
    shadow?: MantineShadow;
    /** Initial dropdown opened state */
    initiallyOpened?: boolean;
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
    /** Allow to clear item */
    clearable?: boolean;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Enable items searching */
    searchable?: boolean;
    /** Whether the input is disabled */
    disabled?: boolean;
} & InputWrapperBaseProps &
    Omit<InputSharedProps, "size">;

export type InputComponentProps = InputSharedProps & InputWrapperBaseProps;

export type DatePickerSharedProps = {
    /** Dropdown appear/disappear transition */
    transition?: MantineTransitionName;
    /** Dropdown appear/disappear transition duration */
    transitionDuration?: number;
    /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or css value for custom box-shadow */
    shadow?: MantineSize;
    /** Input size */
    size?: MantineSize;
    /** Where to show calendar in modal or popover */
    dropdownType?: "popover" | "modal";
    /** Dropdown positioning behavior */
    dropdownPosition?: "bottom-start" | "top-start" | "flip";
    /** Allow to clear value */
    clearable?: boolean;
    /** Dropdown zIndex */
    zIndex?: number;
    /** call onChange with last valid value onBlur */
    fixOnBlur?: boolean;
    /** Events that should trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Modal z-index */
    modalZIndex?: number;
    /** Set the clear button tab index to disabled or default after input field */
    clearButtonTabIndex?: -1 | 0;
    /** Amount of months */
    amountOfMonths?: number;
    /** Paginate by amount of months */
    paginateBy?: number;
    /** Allow to change level (date - month - year) */
    allowLevelChange?: boolean;
    /** Initial date selection level */
    initialLevel?: "date" | "month" | "year";
    /** Specifies additional days between min_date_allowed and max_date_allowed that should be disabled */
    disabledDates?: string[];
    /** When true dates that are outside of given month cannot be clicked or focused */
    disableOutsideEvents?: boolean;
    /** Set to true to make calendar take 100% of container width */
    fullWidth?: boolean;
    /** Prevent focusing upon clicking */
    preventFocus?: boolean;
    /** Should focusable days have tabIndex={0}? */
    focusable?: boolean;
    /** Maximum possible date */
    maxDate?: string;
    /** Minimum possible date */
    minDate?: string;
    /** Set to false to remove weekdays row */
    hideWeekdays?: boolean;
    /** Remove outside dates */
    hideOutsideDates?: boolean;
    /** Indices of weekend days */
    weekendDays?: number[];
    /** Set first day of the week */
    firstDayOfWeek?: FirstDayOfWeek;
    /** Set to false to force dropdown to stay open after date was selected */
    closeCalendarOnChange?: boolean;
    /** Set to true to open dropdown on clear */
    openDropdownOnClear?: boolean;
    /** dayjs input format */
    inputFormat?: string;
    /** Control initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Initial month for uncontrolled calendar */
    initialMonth?: string;
    /** Locale used for labels formatting, defaults to theme.datesLocale */
    locale?: string;
} & InputComponentProps;

export type VerticalSectionSharedProps = {
    /** Section content */
    children?: React.ReactNode;
    /** Section height */
    height: number | string;
    /** Border */
    withBorder?: boolean;
    /** Changes position to fixed, controlled by AppShell component if rendered inside */
    fixed?: boolean;
    /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
    position?: VerticalSectionPosition;
    /** z-index */
    zIndex?: number;
} & DefaultProps;

export type HorizontalSectionSharedProps = {
    /** Section Content */
    children?: React.ReactNode;
    /** Component width with breakpoints */
    width?: HorizontalSectionWidth;
    /** Component height */
    height?: string | number;
    /** Border */
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
} & DefaultProps;

export type SliderSharedProps = {
    /** Color from theme.colors */
    color?: MantineColor;
    /** Track border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined track and thumb size, number to set sizes in px */
    size?: MantineNumberSize;
    /** Minimal possible value */
    min?: number;
    /** Maximum possible value */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows */
    step?: number;
    /** Amount of digits after the decimal point */
    precision?: number;
    /** Marks which will be placed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Label appear/disappear transition */
    labelTransition?: MantineTransitionName;
    /** Label appear/disappear transition duration in ms */
    labelTransitionDuration?: number;
    /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
    labelTransitionTimingFunction?: string;
    /** If true label will be not be hidden when user stops dragging */
    labelAlwaysOn?: boolean;
    /** If true slider label will appear on hover */
    showLabelOnHover?: boolean;
    /** Thumb children, can be used to add icon */
    thumbChildren?: React.ReactNode;
    /** Disables slider */
    disabled?: boolean;
    /** Thumb width and height in px */
    thumbSize?: number;
    /** Determines when the component should update its value property. If mouseup (the default) then the slider will only trigger its value when the user has finished dragging the slider. If drag, then the slider will update its value continuously as it is being dragged. */
    updatemode: "mouseup" | "drag";
};

export type AccordionSharedProps = {
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Accordion content */
    children?: React.ReactNode;
    /** Transition duration in ms, set 0 to disable transitions */
    transitionDuration?: number;
    /** Determines whether chevron rotation should be disabled */
    disableChevronRotation?: boolean;
    /** Determines position of the chevron */
    chevronPosition?: AccordionChevronPosition;
    /** Chevron size in px */
    chevronSize?: number;
    /** Heading order, has no effect on visuals */
    order?: AccordionHeadingOrder;
    /** Replaces chevron on all items */
    chevron?: React.ReactNode;
    /** Controls visuals */
    variant?: AccordionVariant;
    /** border-radius from theme.radius or number to set value in px, will not be applied to default variant  */
    radius?: MantineNumberSize;
} & DefaultProps;

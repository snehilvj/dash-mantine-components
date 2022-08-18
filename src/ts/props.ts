import type {
    MantineNumberSize,
    MantineGradient,
    MantineTheme,
} from "@mantine/styles";

declare type MantineStyleSystemValue = MantineNumberSize | (string & {});
type MantineStyleSystemProps = {
    /** margin props */
    m?: MantineStyleSystemValue;
    /** margin props */
    my?: MantineStyleSystemValue;
    /** margin props */
    mx?: MantineStyleSystemValue;
    /** margin props */
    mt?: MantineStyleSystemValue;
    /** margin props */
    mb?: MantineStyleSystemValue;
    /** margin props */
    ml?: MantineStyleSystemValue;
    /** margin props */
    mr?: MantineStyleSystemValue;
    /** padding props */
    p?: MantineStyleSystemValue;
    /** padding props */
    py?: MantineStyleSystemValue;
    /** padding props */
    px?: MantineStyleSystemValue;
    /** padding props */
    pt?: MantineStyleSystemValue;
    /** padding props */
    pb?: MantineStyleSystemValue;
    /** padding props */
    pl?: MantineStyleSystemValue;
    /** padding props */
    pr?: MantineStyleSystemValue;
};

export type DefaultProps = {
    /** Often used with CSS to style elements with common properties */
    className?: string;
    /** Inline style */
    style?: any;
};

export type DashComponentProps = {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
} & DefaultProps &
    MantineStyleSystemProps;

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

export type TextProps = {
    /** Text content */
    children?: React.ReactNode;
    /** Key of theme.fontSizes or number to set font-size in px */
    size?: MantineNumberSize;
    /** Key of theme.colors or any valid CSS color */
    color?: "dimmed" | MantineColors;
    /** Sets font-weight css property */
    weight?:
        | "normal"
        | "bold"
        | "bolder"
        | "lighter"
        | "initial"
        | "inherit"
        | number;
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
    align?:
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
    color?: MantineColors;
    /** Loader appearance */
    variant?: MantineTheme["loader"];
} & DefaultProps;

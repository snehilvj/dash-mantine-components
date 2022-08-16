import type { MantineNumberSize } from "@mantine/core";

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

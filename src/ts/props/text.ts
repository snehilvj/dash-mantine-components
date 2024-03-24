import { MantineGradient, MantineSize } from "@mantine/core";
import { BoxProps } from "./box";
import { __BaseInputProps } from "./input";
import { StylesApiProps } from "./styles";

type TextTruncate = "end" | "start" | boolean;

export interface TextProps extends BoxProps, StylesApiProps {
    /** Controls `font-size` and `line-height`, `'md'` by default */
    size?: MantineSize | (string & {});
    /** Number of lines after which Text will be truncated */
    lineClamp?: number;
    /** Side on which Text must be truncated, if `true`, text is truncated from the start */
    truncate?: TextTruncate;
    /** Sets `line-height` to 1 for centering, `false` by default */
    inline?: boolean;
    /** Determines whether font properties should be inherited from the parent, `false` by default */
    inherit?: boolean;
    /** Gradient configuration, ignored when `variant` is not `gradient`, `theme.defaultGradient` by default */
    gradient?: MantineGradient;
    /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
    span?: boolean;
}

export interface TextareaProps
    extends BoxProps,
        __BaseInputProps,
        StylesApiProps {
    /** Determines whether the textarea height should grow with its content, `false` by default */
    autosize?: boolean;
    /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
    maxRows?: number;
    /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
    minRows?: number;
    /** Controls `resize` CSS property, `'none'` by default */
    resize?: React.CSSProperties["resize"];
}

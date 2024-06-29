import { MantineColor, MantineSize } from "@mantine/core";
import { BoxProps } from "./box";
import { StylesApiProps } from "./styles";

export interface LoaderProps extends BoxProps, StylesApiProps {
    /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: MantineColor;
    /** Loader type, key of `loaders` prop, default value is `'oval'` */
    type?: "bars" | "dots" | "oval";
    /** Overrides default loader with given content */
    children?: React.ReactNode;
}

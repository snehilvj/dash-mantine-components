import { MantineRadius, MantineSize } from "@mantine/core";
import { BoxProps } from "./box";
import { StylesApiProps } from "./styles";

export interface __ProgressRootProps extends BoxProps {
    /** Controls track height, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether label text color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Controls sections width transition duration, value is specified in ms, `100` by default */
    transitionDuration?: number;
}
export interface ProgressRootProps extends __ProgressRootProps, StylesApiProps {
    /** Content */
    children?: React.ReactNode;
}

import { FloatingPosition, MantineColor, MantineRadius } from "@mantine/core";
import { BoxProps } from "./box";
import { StylesApiProps } from "./styles";

export interface TooltipBaseProps extends BoxProps, StylesApiProps {
    /** Target element, must support `ref` prop and `...others` */
    children: React.ReactNode;
    /** Tooltip position relative to target element (`Tooltip` component) or mouse (`Tooltip.Floating` component) */
    position?: FloatingPosition;
    /** Tooltip content */
    label: React.ReactNode;
    /** Determines whether tooltip should be rendered within `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color, controls tooltip background, by default set based on current color scheme */
    color?: MantineColor;
    /** Determines whether content should be wrapped on to the next line, `false` by default */
    multiline?: boolean;
    /** Tooltip z-index, `300` by default */
    zIndex?: string | number;
    /** If set, tooltip element will not be rendered */
    disabled?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: object;
}

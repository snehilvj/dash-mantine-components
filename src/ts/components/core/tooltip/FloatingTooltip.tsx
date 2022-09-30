import React from "react";
import { DefaultProps } from "../../../props";
import { Tooltip, Box } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";
import { FloatingPosition } from "@mantine/core/lib/Floating/types";
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";

type Props = {
    /** Offset from mouse in px */
    offset?: number;
    /** Target element */
    children?: React.ReactNode;
    /** Tooltip position relative to target element (default) or mouse (floating) */
    position?: FloatingPosition;
    /** Tooltip label */
    label: React.ReactNode;
    /** Radius from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Defines whether content should be wrapped on to the next line */
    multiline?: boolean;
    /** Tooltip width in px */
    width?: number | "auto";
    /** Tooltip z-index */
    zIndex?: number;
    /** Disables tooltip */
    disabled?: boolean;
} & DefaultProps;

/**
 * Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
 */
const FloatingTooltip = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <Tooltip.Floating {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </Tooltip.Floating>
    );
};

FloatingTooltip.defaultProps = {};

export default FloatingTooltip;

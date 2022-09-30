import React from "react";
import { DefaultProps } from "../../../props";
import { Tooltip as MantineTooltip, Box } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";
import { FloatingPosition } from "@mantine/core/lib/Floating/types";
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";

type Props = {
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
    /** Controls opened state */
    opened?: boolean;
    /** Space between target element and tooltip in px */
    offset?: number;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size in px */
    arrowSize?: number;
    /** Arrow offset in px */
    arrowOffset?: number;
    /** One of premade transitions ot transition object */
    transition?: MantineTransitionName;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Determines which events will be used to show tooltip */
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
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
const Tooltip = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineTooltip {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </MantineTooltip>
    );
};

Tooltip.defaultProps = {};

export default Tooltip;

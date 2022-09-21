import React from "react";
import {
    DashComponentProps,
    MantineTransition,
    MantineColors,
} from "../../props";
import { Tooltip as MantineTooltip, Box } from "@mantine/core";
import { MantineSize } from "@mantine/styles";
import { FloatingPosition } from "@mantine/core/lib/Floating/types";

type Props = {
    openDelay?: number;
    /** Open delay in ms */
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
    transition?: MantineTransition;
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
    /** Key of the prop that should be used to get element ref */
    refProp?: string;
    /** Tooltip label */
    label: React.ReactNode;
    /** Determines whether tooltip should be rendered within Portal */
    withinPortal?: boolean;
    /** Radius from theme.radius or number to set border-radius in px */
    radius?: MantineSize;
    /** Key of theme.colors */
    color?: MantineColors;
    /** Defines whether content should be wrapped on to the next line */
    multiline?: boolean;
    /** Tooltip width in px */
    width?: number | "auto";
    /** Tooltip z-index */
    zIndex?: number;
    /** Disables tooltip */
    disabled?: boolean;
} & DashComponentProps;

/**
 * Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
 */
const Tooltip = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineTooltip {...other}>
            <Box>{children}</Box>
        </MantineTooltip>
    );
};

Tooltip.defaultProps = {};

export default Tooltip;

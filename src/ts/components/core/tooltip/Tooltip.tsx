import React from "react";
import { Tooltip as MantineTooltip, Box } from "@mantine/core";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TooltipBaseProps,
    TransitionProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";
import { ArrowPosition } from "@mantine/core/lib/Floating";

type Props = {
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
    /** Controls opened state */
    opened?: boolean;
    /** Space between target element and tooltip */
    offset?: number;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size */
    arrowSize?: number;
    /** Arrow offset */
    arrowOffset?: number;
    /** Arrow radius */
    arrowRadius?: number;
    /** Arrow position **/
    arrowPosition?: ArrowPosition;
    /** Props added to Transition component that used to animate tooltip presence, use to configure duration and animation type, { duration: 100, transition: 'fade' } by default */
    transitionProps?: TransitionProps;
    /** Determines which events will be used to show tooltip */
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
    /** useEffect dependencies to force update tooltip position */
    positionDependencies?: any[];
    /** Set if tooltip is attached to an inline element */
    inline?: boolean;
    /** If set tooltip will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
} & DashBaseProps &
    TooltipBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Renders tooltip at given element on mouse over or any other event */
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

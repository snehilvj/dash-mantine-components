import {
    ArrowPosition,
    Box,
    FloatingAxesOffsets,
    FloatingStrategy,
    Tooltip as MantineTooltip,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { TooltipBaseProps } from "props/tooltip";
import { TransitionProps } from "props/transition";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends TooltipBaseProps, DashBaseProps {
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms, `0` by default */
    closeDelay?: number;
    /** Controlled opened state */
    opened?: boolean;
    /** Space between target element and tooltip in px, `5` by default.  Number or FloatingAxesOffsets. */
    offset?: number | FloatingAxesOffsets;
    /** Determines whether the tooltip should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `4` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position relative to the tooltip, `side` by default */
    arrowPosition?: ArrowPosition;
    /** Props passed down to the `Transition` component that used to animate tooltip presence, use to configure duration and animation type, `{ duration: 100, transition: 'fade' }` by default */
    transitionProps?: TransitionProps;
    /** Determines which events will be used to show tooltip, `{ hover: true, focus: false, touch: false }` by default */
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
    /** `useEffect` dependencies to force update tooltip position */
    positionDependencies?: any[];
    /** Must be set if the tooltip target is an inline element */
    inline?: boolean;
    /** If set, the tooltip will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
    /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy), `'absolute'` by default */
    floatingStrategy?: FloatingStrategy;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** Tooltip */
const Tooltip = (props: Props) => {
    const { children, boxWrapperProps, setProps, loading_state, ...others } =
        props;
    const boxProps = { w: "fit-content", key: "tooltip-target", ...boxWrapperProps };

    return (
        <MantineTooltip
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            <Box {...boxProps}>{children}</Box>
        </MantineTooltip>
    );
};


Tooltip.childrenLayoutHashes = true

export default Tooltip;

import { Box, Tooltip } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { TooltipBaseProps } from "props/tooltip";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";


interface Props extends TooltipBaseProps, DashBaseProps {
    /** Offset from mouse in px, `10` by default */
    offset?: number;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** FloatingTooltip */
const FloatingTooltip = (props: Props) => {
    const { children, boxWrapperProps, setProps, loading_state, ...others } =
        props;
    const boxProps = { w: "fit-content", key: "tooltip-target", ...boxWrapperProps };

    return (
        <Tooltip.Floating
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            <Box {...boxProps}>{children}</Box>
        </Tooltip.Floating>
    );
};

FloatingTooltip.dashChildrenUpdate = true

export default FloatingTooltip;

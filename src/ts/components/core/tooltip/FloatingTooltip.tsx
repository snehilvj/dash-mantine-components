import { Box, Tooltip } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { TooltipBaseProps } from "props/tooltip";
import React from "react";

interface Props extends TooltipBaseProps, DashBaseProps {
    /** Offset from mouse in px, `10` by default */
    offset?: number;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** FloatingTooltip */
const FloatingTooltip = (props: Props) => {
    const { children, boxWrapperProps, setProps, ...others } = props;
    const boxProps = { w: "fit-content", key: "tooltip-target", ...boxWrapperProps };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Tooltip.Floating
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            <Box {...boxProps}>{children}</Box>
        </Tooltip.Floating>
    );
};

FloatingTooltip.defaultProps = {};

export default FloatingTooltip;

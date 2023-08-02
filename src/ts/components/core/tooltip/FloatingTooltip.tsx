import React from "react";
import { Tooltip, Box } from "@mantine/core";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TooltipBaseProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    variant?: string;
    /** Offset from mouse */
    offset?: number;
} & DashBaseProps &
    TooltipBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Renders tooltip at given element on mouse over or any other event */
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

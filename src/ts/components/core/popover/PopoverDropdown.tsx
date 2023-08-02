import React from "react";
import { Popover, Box } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** Popover dropdown content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display popover section relative to given target element */
const PopoverDropdown = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <Popover.Dropdown {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </Popover.Dropdown>
    );
};

PopoverDropdown.defaultProps = {};

export default PopoverDropdown;

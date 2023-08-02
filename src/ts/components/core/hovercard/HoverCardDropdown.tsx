import React from "react";
import { HoverCard, Box } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** HoverCard dropdown content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display popover section when target element is hovered */
const HoverCardDropdown = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <HoverCard.Dropdown {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </HoverCard.Dropdown>
    );
};

HoverCardDropdown.defaultProps = {};

export default HoverCardDropdown;

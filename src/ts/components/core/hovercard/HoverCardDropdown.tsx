import React from "react";
import { DefaultProps } from "../../../props";
import { HoverCard, Box } from "@mantine/core";

type Props = {
    /** HoverCard dropdown content */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Display popover section when target element is hovered. For more information, see: https://mantine.dev/core/hover-card/
 */
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

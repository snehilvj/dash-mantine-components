import { Popover } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** PopoverDropdown */
const PopoverDropdown = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Popover.Dropdown {...others}>{children}</Popover.Dropdown>;
};

PopoverDropdown.defaultProps = {};

export default PopoverDropdown;

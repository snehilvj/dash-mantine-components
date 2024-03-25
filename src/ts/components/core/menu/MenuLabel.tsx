import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** MenuLabel */
const MenuLabel = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Menu.Label {...others}>{children}</Menu.Label>;
};

MenuLabel.defaultProps = {};

export default MenuLabel;

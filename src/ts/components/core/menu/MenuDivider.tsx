import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {}

/** MenuDivider */
const MenuDivider = (props: Props) => {
    const { setProps, ...others } = props;

    return (
        <Menu.Divider
            {...others}
        />
    );
};

MenuDivider.defaultProps = {};

export default MenuDivider;

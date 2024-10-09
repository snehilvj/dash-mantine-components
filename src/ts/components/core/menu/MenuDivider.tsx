import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {}

/** MenuDivider */
const MenuDivider = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <Menu.Divider
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

MenuDivider.defaultProps = {};

export default MenuDivider;

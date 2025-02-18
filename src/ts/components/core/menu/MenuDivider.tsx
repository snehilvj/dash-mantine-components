import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {}

/** MenuDivider */
const MenuDivider = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <Menu.Divider
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default MenuDivider;

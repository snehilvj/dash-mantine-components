import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** MenuDropdown */
const MenuDropdown = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Menu.Dropdown
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </Menu.Dropdown>
    );
};



MenuDropdown.childrenLayoutHashes = true

export default MenuDropdown;

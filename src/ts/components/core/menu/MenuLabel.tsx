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
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Menu.Label
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Menu.Label>
    );
};

MenuLabel.defaultProps = {};

export default MenuLabel;

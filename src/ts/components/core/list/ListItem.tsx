import { List } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Icon to replace item bullet */
    icon?: React.ReactNode;
    /** Content */
    children?: React.ReactNode;
}

/** ListItem */
const ListItem = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <List.Item
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </List.Item>
    );
};

ListItem.defaultProps = {};

export default ListItem;

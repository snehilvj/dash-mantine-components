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
    const { setProps, children, ...other } = props;

    return <List.Item {...other}>{children}</List.Item>;
};

ListItem.defaultProps = {};

export default ListItem;

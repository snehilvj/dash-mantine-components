import React from "react";
import { List } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** ListItem content */
    children?: React.ReactNode;
    /** Icon to replace bullet */
    icon?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display ordered or unordered list */
const ListItem = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <List.Item {...other}>{children}</List.Item>;
};

ListItem.defaultProps = {};

export default ListItem;

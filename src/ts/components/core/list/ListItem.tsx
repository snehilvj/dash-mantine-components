import React from "react";
import { DefaultProps } from "../../../props";
import { List } from "@mantine/core";

type Props = {
    /** ListItem content */
    children?: React.ReactNode;
    /** Icon to replace bullet */
    icon?: React.ReactNode;
} & DefaultProps;

/**
 * Display ordered or unordered list, see: https://mantine.dev/core/list/
 */
const ListItem = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <List.Item {...other}>{children}</List.Item>;
};

ListItem.defaultProps = {};

export default ListItem;

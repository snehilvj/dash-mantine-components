import React from "react";
import { List as MantineList } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";
import { ListStyle } from "props/css";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** dmc.ListItem components only */
    children?: React.ReactNode;
    /** List type: ol or ul */
    type?: "ordered" | "unordered";
    /** Include padding-left to offset list from main content */
    withPadding?: boolean;
    /** Font size from theme or number to set value in px */
    size?: MantineNumberSize;
    /** Icon that should replace list item dot */
    icon?: React.ReactNode;
    /** Spacing between items from theme or number to set value in px */
    spacing?: MantineNumberSize;
    /** Center items with icon */
    center?: boolean;
    /** List style */
    listStyleType?: ListStyle;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display ordered or unordered list */
const List = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineList {...other}>{children}</MantineList>;
};

List.defaultProps = {};

export default List;

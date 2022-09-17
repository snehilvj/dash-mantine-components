import React from "react";
import { DashComponentProps } from "../../../props";
import { List as MantineList } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** ListItem components only */
    children?: React.ReactNode;
    /** List type: ol or ul */
    type?: "ordered" | "unordered";
    /** Include padding-left to offset list from main content */
    withPadding?: boolean;
    /** Font size from theme or number to set value in px */
    size?: MantineSize;
    /** Icon that should replace list item dot */
    icon?: React.ReactNode;
    /** Spacing between items from theme or number to set value in px */
    spacing?: MantineSize;
    /** Center items with icon */
    center?: boolean;
    /** List style */
    listStyleType?:
        | "disc"
        | "circle"
        | "square"
        | "decimal"
        | "lower-roman"
        | "upper-roman"
        | "lower-greek"
        | "lower-latin"
        | "upper-latin"
        | "lower-alpha"
        | "upper-alpha"
        | "none"
        | "inherit";
} & DashComponentProps;

/**
 * Display ordered or unordered list, see: https://mantine.dev/core/list/
 */
const List = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineList {...other}>{children}</MantineList>;
};

List.defaultProps = {};

export default List;

import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Table as MantineTable } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** If true every odd row of table will have gray background color */
    striped?: boolean;
    /** If true row will have hover color */
    highlightOnHover?: boolean;
    /** Table caption position */
    captionSide?: "top" | "bottom";
    /** Horizontal cells spacing from theme.spacing or number to set value in px */
    horizontalSpacing?: MantineSize;
    /** Vertical cells spacing from theme.spacing or number to set value in px */
    verticalSpacing?: MantineSize;
    /** Sets font size of all text inside table */
    fontSize?: MantineSize;
    /** Children, specifically an HTML representation of the table */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineTable {...other}>{children}</MantineTable>;
};

Table.defaultProps = {};

export default Table;

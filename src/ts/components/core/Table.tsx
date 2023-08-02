import React from "react";
import { Table as MantineTable } from "@mantine/core";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** If true every odd row of table will have gray background color */
    striped?: boolean;
    /** If true row will have hover color */
    highlightOnHover?: boolean;
    /** Table caption position */
    captionSide?: "top" | "bottom";
    /** Horizontal cells spacing from theme.spacing or number to set value in px */
    horizontalSpacing?: MantineNumberSize;
    /** Vertical cells spacing from theme.spacing or number to set value in px */
    verticalSpacing?: MantineNumberSize;
    /** Sets font size of all text inside table */
    fontSize?: MantineNumberSize;
    /** Children, specifically an HTML representation of the table */
    children?: React.ReactNode;
    /** Add border to table */
    withBorder?: boolean;
    /** Add border to columns */
    withColumnBorders?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** A simple table component */
const Table = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineTable {...other}>{children}</MantineTable>;
};

Table.defaultProps = {};

export default Table;

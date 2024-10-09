import {
    MantineColor,
    MantineSpacing,
    Table as MantineTable,
    TableData,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Value of `table-layout` style, `auto` by default */
    layout?: React.CSSProperties["tableLayout"];
    /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
    captionSide?: "top" | "bottom";
    /** Color of table borders, key of `theme.colors` or any valid CSS color */
    borderColor?: MantineColor;
    /** Determines whether the table should have outer border, `false` by default */
    withTableBorder?: boolean;
    /** Determines whether the table should have borders between columns, `false` by default */
    withColumnBorders?: boolean;
    /** Determines whether the table should have borders between rows, `true` by default */
    withRowBorders?: boolean;
    /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    horizontalSpacing?: MantineSpacing;
    /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    verticalSpacing?: MantineSpacing;
    /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
    striped?: boolean | "odd" | "even";
    /** Background color of striped rows, key of `theme.colors` or any valid CSS color */
    stripedColor?: MantineColor;
    /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
    highlightOnHover?: boolean;
    /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color */
    highlightOnHoverColor?: MantineColor;
    /** Data that should be used to generate table, ignored if `children` prop is set */
    data?: TableData;
    /** Determines whether `Table.Thead` should be sticky, `false` by default */
    stickyHeader?: boolean;
    /** Offset from top at which `Table.Thead` should become sticky, `0` by default */
    stickyHeaderOffset?: number | string;
    /** Headers, rows and footer */
    children?: React.ReactNode;
}

/** Table */
const Table = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineTable
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineTable>
    );
};

Table.defaultProps = {};

export default Table;

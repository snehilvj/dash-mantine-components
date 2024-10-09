import { Grid, StyleProp } from "@mantine/core";
import { ColSpan } from "@mantine/core/lib/components/Grid/GridCol/GridCol";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Column span, `12` by default */
    span?: StyleProp<ColSpan>;
    /** Column order, can be used to reorder columns at different viewport sizes */
    order?: StyleProp<number>;
    /** Column offset on the left side – number of columns that should be left empty before this column */
    offset?: StyleProp<number>;
}

/** GridCol */
const GridCol = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Grid.Col
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Grid.Col>
    );
};

GridCol.defaultProps = {};

export default GridCol;

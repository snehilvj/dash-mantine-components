import { Grid as MantineGrid, MantineSpacing, StyleProp } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    gutter?: StyleProp<MantineSpacing>;
    /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
    grow?: boolean;
    /** Sets `justify-content`, `flex-start` by default */
    justify?: React.CSSProperties["justifyContent"];
    /** Sets `align-items`, `stretch` by default */
    align?: React.CSSProperties["alignItems"];
    /** Number of columns in each row, `12` by default */
    columns?: number;
    /** Sets `overflow` CSS property on the root element, `'visible'` by default */
    overflow?: React.CSSProperties["overflow"];
}

/** Grid */
const Grid = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineGrid
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineGrid>
    );
};

export default Grid;

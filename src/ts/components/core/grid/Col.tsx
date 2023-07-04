import { Grid } from "@mantine/core";
import { ColSpan } from "@mantine/core/lib/Grid/Col/Col.styles";
import { Order } from "props/css";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Col content */
    children?: React.ReactNode;
    /** Default col span */
    span?: ColSpan;
    /** Column left offset */
    offset?: number;
    /** Default col order */
    order?: Order;
    /** Col order at (min-width: theme.breakpoints.xs) */
    orderXs?: Order;
    /** Col order at (min-width: theme.breakpoints.sm) */
    orderSm?: Order;
    /** Col order at (min-width: theme.breakpoints.md) */
    orderMd?: Order;
    /** Col order at (min-width: theme.breakpoints.lg) */
    orderLg?: Order;
    /** Col order at (min-width: theme.breakpoints.xl) */
    orderXl?: Order;
    /** Column left offset at (min-width: theme.breakpoints.xs) */
    offsetXs?: number;
    /** Column left offset at (min-width: theme.breakpoints.sm) */
    offsetSm?: number;
    /** Column left offset at (min-width: theme.breakpoints.md) */
    offsetMd?: number;
    /** Column left offset at (min-width: theme.breakpoints.lg) */
    offsetLg?: number;
    /** Column left offset at (min-width: theme.breakpoints.xl) */
    offsetXl?: number;
    /** Col span at (min-width: theme.breakpoints.xs) */
    xs?: ColSpan;
    /** Col span at (min-width: theme.breakpoints.sm) */
    sm?: ColSpan;
    /** Col span at (min-width: theme.breakpoints.md) */
    md?: ColSpan;
    /** Col span at (min-width: theme.breakpoints.lg) */
    lg?: ColSpan;
    /** Col span at (min-width: theme.breakpoints.xl) */
    xl?: ColSpan;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Flexbox grid system with variable amount of columns */
const Col = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Grid.Col {...other}>{children}</Grid.Col>;
};

Col.defaultProps = {};

export default Col;

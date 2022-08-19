import React from "react";
import { DashComponentProps } from "../../props";
import { Grid } from "@mantine/core";

type Props = {
    /** Col content */
    children?: React.ReactNode;
    /** Default col span */
    span?: number;
    /** Column left offset */
    offset?: number;
    /** Default col order */
    order?: number;
    /** Col order at (min-width: theme.breakpoints.xs) */
    orderXs?: number;
    /** Col order at (min-width: theme.breakpoints.sm) */
    orderSm?: number;
    /** Col order at (min-width: theme.breakpoints.md) */
    orderMd?: number;
    /** Col order at (min-width: theme.breakpoints.lg) */
    orderLg?: number;
    /** Col order at (min-width: theme.breakpoints.xl) */
    orderXl?: number;
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
    xs?: number;
    /** Col span at (min-width: theme.breakpoints.sm) */
    sm?: number;
    /** Col span at (min-width: theme.breakpoints.md) */
    md?: number;
    /** Col span at (min-width: theme.breakpoints.lg) */
    lg?: number;
    /** Col span at (min-width: theme.breakpoints.xl) */
    xl?: number;
} & DashComponentProps;

/**
 * Inline or block code without syntax highlight. For more information, see: https://mantine.dev/core/code/
 */
const Col = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Grid.Col {...other}>{children}</Grid.Col>;
};

Col.defaultProps = {};

export default Col;

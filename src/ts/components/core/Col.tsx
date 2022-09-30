import React from "react";
import { DefaultProps } from "../../props";
import { Grid } from "@mantine/core";
import { ColSpan } from "@mantine/core/lib/Grid/Col/Col.styles";

type OrderType = "inherit" | "initial" | number;

type Props = {
    /** Col content */
    children?: React.ReactNode;
    /** Default col span */
    span?: ColSpan;
    /** Column left offset */
    offset?: number;
    /** Default col order */
    order?: OrderType;
    /** Col order at (min-width: theme.breakpoints.xs) */
    orderXs?: OrderType;
    /** Col order at (min-width: theme.breakpoints.sm) */
    orderSm?: OrderType;
    /** Col order at (min-width: theme.breakpoints.md) */
    orderMd?: OrderType;
    /** Col order at (min-width: theme.breakpoints.lg) */
    orderLg?: OrderType;
    /** Col order at (min-width: theme.breakpoints.xl) */
    orderXl?: OrderType;
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
} & DefaultProps;

/**
 * Inline or block code without syntax highlight. For more information, see: https://mantine.dev/core/code/
 */
const Col = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Grid.Col {...other}>{children}</Grid.Col>;
};

Col.defaultProps = {};

export default Col;

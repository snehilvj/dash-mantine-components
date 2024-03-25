import {
    Breadcrumbs as MantineBreadcrumbs,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Separator between children, `'/'` by default */
    separator?: React.ReactNode;
    /** Controls spacing between separator and breadcrumb, `'xs'` by default */
    separatorMargin?: MantineSpacing;
    /** React nodes that should be separated with `separator` */
    children: React.ReactNode;
}

/** Breadcrumbs */
const Breadcrumbs = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBreadcrumbs {...other}>{children}</MantineBreadcrumbs>;
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;

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
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineBreadcrumbs
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineBreadcrumbs>
    );
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;

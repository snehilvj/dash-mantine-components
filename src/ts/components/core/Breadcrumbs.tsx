import {
    Breadcrumbs as MantineBreadcrumbs,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

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
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineBreadcrumbs>
    );
};

export default Breadcrumbs;

import React from "react";
import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Separator between breadcrumbs */
    separator?: React.ReactNode;
    /** React nodes that should be separated */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Separate list of react nodes with given separator */
const Breadcrumbs = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBreadcrumbs {...other}>{children}</MantineBreadcrumbs>;
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;

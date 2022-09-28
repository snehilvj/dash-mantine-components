import React from "react";
import { DefaultProps } from "../../props";
import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";

type Props = {
    /** Separator between breadcrumbs */
    separator?: React.ReactNode;
    /** React nodes that should be separated */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
 */
const Breadcrumbs = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBreadcrumbs {...other}>{children}</MantineBreadcrumbs>;
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;

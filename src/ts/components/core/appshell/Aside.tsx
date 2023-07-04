import { Aside as MantineAside } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    HorizontalSectionSharedProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = HorizontalSectionSharedProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Aside. */
const Aside = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAside {...other}>{children}</MantineAside>;
};

Aside.defaultProps = {};

export default Aside;

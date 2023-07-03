import React from "react";
import { Aside as MantineAside } from "@mantine/core";
import { HorizontalSectionSharedProps } from "props/mantine";

/** Aside. */
const Aside = (props: HorizontalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineAside {...other}>{children}</MantineAside>;
};

Aside.defaultProps = {};

export default Aside;

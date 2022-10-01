import React from "react";
import { HorizontalSectionSharedProps } from "../../../props";
import { Aside as MantineAside } from "@mantine/core";

/**
 * Aside. For more information, see: https://mantine.dev/core/app-shell/
 */
const Aside = (props: HorizontalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineAside {...other}>{children}</MantineAside>;
};

Aside.defaultProps = {};

export default Aside;

import React from "react";
import { DashComponentProps } from "../../props";
import { Kbd as MantineKbd } from "@mantine/core";

type Props = {
    /** Keyboard key */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Display keyboard button or keys combination. For more information, see: https://mantine.dev/core/kbd/
 */
const Kbd = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineKbd {...other}>{children}</MantineKbd>;
};

Kbd.defaultProps = {};

export default Kbd;

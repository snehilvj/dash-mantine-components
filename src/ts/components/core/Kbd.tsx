import React from "react";
import { Kbd as MantineKbd } from "@mantine/core";
import {
    MantineSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Controls component size, 'sm' by default */
    size?: MantineSize;
    /** Keyboard key */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display keyboard button or keys combination */
const Kbd = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineKbd {...other}>{children}</MantineKbd>;
};

Kbd.defaultProps = {};

export default Kbd;

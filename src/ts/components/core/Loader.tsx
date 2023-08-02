import React from "react";
import { Loader as MantineLoader } from "@mantine/core";
import {
    LoaderProps,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = LoaderProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Indicate loading state */
const Loader = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineLoader {...other} />;
};

Loader.defaultProps = {};

export default Loader;

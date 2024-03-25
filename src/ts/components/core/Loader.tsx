import { Loader as MantineLoader } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { LoaderProps } from "props/loader";
import React from "react";

interface Props extends LoaderProps, DashBaseProps {}

/** Loader */
const Loader = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineLoader {...others} />;
};

Loader.defaultProps = {};

export default Loader;

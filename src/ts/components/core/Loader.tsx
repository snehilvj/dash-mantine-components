import { Loader as MantineLoader } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { LoaderProps } from "props/loader";
import React from "react";

interface Props extends LoaderProps, DashBaseProps {}

/** Loader */
const Loader = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineLoader
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

Loader.defaultProps = {};

export default Loader;

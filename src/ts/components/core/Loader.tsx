import { Loader as MantineLoader } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { LoaderProps } from "props/loader";
import React from "react";

interface Props extends LoaderProps, DashBaseProps {}

/** Loader */
const Loader = (props: Props) => {
    const { setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineLoader
            data-dash-is-loading={loading || undefined}
            {...others}
        />
    );
};

export default Loader;

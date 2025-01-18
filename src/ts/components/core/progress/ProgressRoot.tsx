import { Progress } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { ProgressRootProps } from "props/progress";
import React from "react";

export interface Props extends ProgressRootProps, DashBaseProps {}

/** ProgressRoot */
const ProgressRoot = (props: Props) => {
    const { setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Progress.Root
            data-dash-is-loading={loading || undefined}
            {...others}
        />
    );
};

export default ProgressRoot;

import { Progress } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { ProgressRootProps } from "props/progress";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

export interface Props extends ProgressRootProps, DashBaseProps {}

/** ProgressRoot */
const ProgressRoot = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <Progress.Root
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default ProgressRoot;

import { Progress } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { ProgressRootProps } from "props/progress";
import React from "react";

export interface Props extends ProgressRootProps, DashBaseProps {}

/** ProgressRoot */
const ProgressRoot = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <Progress.Root
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

ProgressRoot.defaultProps = {};

export default ProgressRoot;

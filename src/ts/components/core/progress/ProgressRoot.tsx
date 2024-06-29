import { Progress } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { ProgressRootProps } from "props/progress";
import React from "react";

export interface Props extends ProgressRootProps, DashBaseProps {}

/** ProgressRoot */
const ProgressRoot = (props: Props) => {
    const { setProps, ...others } = props;

    return <Progress.Root {...others} />;
};

ProgressRoot.defaultProps = {};

export default ProgressRoot;

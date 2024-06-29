import { Progress } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** ProgressLabel */
const ProgressLabel = (props: Props) => {
    const { setProps, ...others } = props;

    return <Progress.Label {...others} />;
};

ProgressLabel.defaultProps = {};

export default ProgressLabel;

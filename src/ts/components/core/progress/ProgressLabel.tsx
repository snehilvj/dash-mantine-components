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
    const { setProps, loading_state, ...others } = props;

    return (
        <Progress.Label
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

ProgressLabel.defaultProps = {};

export default ProgressLabel;

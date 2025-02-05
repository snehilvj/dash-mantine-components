import { VisuallyHidden as MantineVisuallyHidden } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** VisuallyHidden */
const VisuallyHidden = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineVisuallyHidden
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineVisuallyHidden>
    );
};

VisuallyHidden.defaultProps = {};

export default VisuallyHidden;

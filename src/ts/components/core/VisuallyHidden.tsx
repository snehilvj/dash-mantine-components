import { VisuallyHidden as MantineVisuallyHidden } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** VisuallyHidden */
const VisuallyHidden = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineVisuallyHidden
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineVisuallyHidden>
    );
};

VisuallyHidden.defaultProps = {};

export default VisuallyHidden;

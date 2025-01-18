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
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineVisuallyHidden
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineVisuallyHidden>
    );
};

export default VisuallyHidden;

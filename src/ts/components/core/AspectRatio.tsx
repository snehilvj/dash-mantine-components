import { AspectRatio as MantineAspectRatio } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
    ratio?: number;
}

/** AspectRatio */
const AspectRatio = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineAspectRatio
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineAspectRatio>
    );
};

AspectRatio.defaultProps = {};

export default AspectRatio;

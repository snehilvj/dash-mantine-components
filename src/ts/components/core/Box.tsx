import { Box as MantineBox } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends BoxProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Box */
const Box = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineBox
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineBox>
    );
};

Box.defaultProps = {};

export default Box;

import { Paper as MantinePaper, PaperBaseProps } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        PaperBaseProps,
        StylesApiProps,
        DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** Paper */
const Paper = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantinePaper
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantinePaper>
    );
};

Paper.defaultProps = {};

export default Paper;

import { Text as MantineText } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React from "react";

interface Props extends TextProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** Captures string input from user */
const Text = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext()
    const loading = ctx.useLoading();

    return (
        <MantineText
             data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineText>
    );
};

export default Text;

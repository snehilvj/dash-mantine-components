import { Code as MantineCode, MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Content */
    children?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color, controls `background-color` of the code, by default value is calculated based on color scheme */
    color?: MantineColor;
    /** If set code will be rendered inside `pre`, `false` by default */
    block?: boolean;
}

/** Code */
const Code = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();


    return (
        <MantineCode
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineCode>
    );
};

export default Code;

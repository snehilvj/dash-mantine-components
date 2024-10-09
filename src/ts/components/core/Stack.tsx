import { MantineSpacing, Stack as MantineStack } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
    gap?: MantineSpacing;
    /** Controls `align-items` CSS property, `'stretch'` by default */
    align?: React.CSSProperties["alignItems"];
    /** Controls `justify-content` CSS property, `'flex-start'` by default */
    justify?: React.CSSProperties["justifyContent"];
}

/** Stack */
const Stack = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineStack
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineStack>
    );
};

Stack.defaultProps = {};

export default Stack;

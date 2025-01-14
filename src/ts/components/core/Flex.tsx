import { Flex as MantineFlex, MantineSize, StyleProp } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** `gap` CSS property */
    gap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `row-gap` CSS property */
    rowGap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `column-gap` CSS property */
    columnGap?: StyleProp<MantineSize | (string & {}) | number>;
    /** `align-items` CSS property */
    align?: StyleProp<React.CSSProperties["alignItems"]>;
    /** `justify-content` CSS property */
    justify?: StyleProp<React.CSSProperties["justifyContent"]>;
    /** `flex-wrap` CSS property */
    wrap?: StyleProp<React.CSSProperties["flexWrap"]>;
    /** `flex-direction` CSS property */
    direction?: StyleProp<React.CSSProperties["flexDirection"]>;
}

/** Flex */
const Flex = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineFlex
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineFlex>
    );
};

Flex.defaultProps = {};

export default Flex;

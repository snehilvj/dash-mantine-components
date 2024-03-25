import { Title as MantineTitle, TitleOrder, TitleSize } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
    order?: TitleOrder;
    /** Changes title size, if not set, then size is controlled by `order` prop */
    size?: TitleSize;
    /** Number of lines after which Text will be truncated */
    lineClamp?: number;
    /** Controls `text-wrap` property, `'wrap'` by default */
    textWrap?: "wrap" | "nowrap" | "balance" | "pretty" | "stable";
    /** Content */
    children?: React.ReactNode;
}

/** Title */
const Title = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineTitle {...others}>{children}</MantineTitle>;
};

Title.defaultProps = {};

export default Title;

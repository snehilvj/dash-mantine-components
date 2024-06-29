import { MantineColor, Mark as MantineMark } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Content */
    children?: string;
    /** Key of `theme.colors` or any valid CSS color, `yellow` by default */
    color?: MantineColor;
}

/** Mark */
const Mark = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineMark {...others}>{children}</MantineMark>;
};

Mark.defaultProps = {};

export default Mark;

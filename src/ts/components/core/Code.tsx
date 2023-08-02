import React from "react";
import { Code as MantineCode } from "@mantine/core";
import {
    MantineColor,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Code content */
    children?: React.ReactNode;
    /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
    color?: MantineColor;
    /** True for code block, false for inline code */
    block?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Inline or block code without syntax highlight */
const Code = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCode {...other}>{children}</MantineCode>;
};

Code.defaultProps = {};

export default Code;

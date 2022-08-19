import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Code as MantineCode } from "@mantine/core";

type Props = {
    /** Code content */
    children?: React.ReactNode;
    /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
    color?: MantineColors;
    /** True for code block, false for inline code */
    block?: boolean;
} & DashComponentProps;

/**
 * Inline or block code without syntax highlight. For more information, see: https://mantine.dev/core/code/
 */
const Code = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCode {...other}>{children}</MantineCode>;
};

Code.defaultProps = {};

export default Code;

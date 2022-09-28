import React from "react";
import { DefaultProps } from "../../props";
import { Code as MantineCode } from "@mantine/core";
import { MantineColor } from "@mantine/styles";

type Props = {
    /** Code content */
    children?: React.ReactNode;
    /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
    color?: MantineColor;
    /** True for code block, false for inline code */
    block?: boolean;
} & DefaultProps;

/**
 * Inline or block code without syntax highlight. For more information, see: https://mantine.dev/core/code/
 */
const Code = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCode {...other}>{children}</MantineCode>;
};

Code.defaultProps = {};

export default Code;

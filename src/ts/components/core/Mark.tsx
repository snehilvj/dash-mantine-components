import React from "react";
import { DefaultProps } from "../../props";
import { Mark as MantineMark } from "@mantine/core";
import { MantineColor } from "@mantine/styles";

type Props = {
    /** Content */
    children?: string;
    /** Background color from theme.colors */
    color?: MantineColor;
} & DefaultProps;

/**
 * Highlight part of the text. For more information, see: https://mantine.dev/core/mark/
 */
const Mark = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineMark {...other}>{children}</MantineMark>;
};

Mark.defaultProps = {};

export default Mark;

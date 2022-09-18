import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Mark as MantineMark } from "@mantine/core";

type Props = {
    /** Content */
    children?: string;
    /** Background color from theme.colors */
    color?: MantineColors;
} & DashComponentProps;

/**
 * Highlight part of the text. For more information, see: https://mantine.dev/core/mark/
 */
const Mark = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineMark {...other}>{children}</MantineMark>;
};

Mark.defaultProps = {};

export default Mark;

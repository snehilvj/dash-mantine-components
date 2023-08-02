import React from "react";
import { Mark as MantineMark } from "@mantine/core";
import {
    MantineColor,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Content */
    children?: string;
    /** Background color from theme.colors */
    color?: MantineColor;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Highlight part of the text */
const Mark = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineMark {...other}>{children}</MantineMark>;
};

Mark.defaultProps = {};

export default Mark;

import React from "react";
import { Blockquote as MantineBlockquote } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineColor,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";

type Props = {
    /** Icon color from theme */
    color?: MantineColor;
    /** Icon, defaults to quote icon */
    icon?: React.ReactNode;
    /** Describe a reference to a cited quote */
    cite?: React.ReactNode;
    /** Content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Blockquote with optional cite */
const Blockquote = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBlockquote {...other}>{children}</MantineBlockquote>;
};

Blockquote.defaultProps = {};

export default Blockquote;

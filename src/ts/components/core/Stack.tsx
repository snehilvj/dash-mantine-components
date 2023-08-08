import { Stack as MantineStack } from "@mantine/core";
import { AlignItems, JustifyContent } from "props/css";
import { DashBaseProps } from "props/dash";
import {
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    MantineNumberSize,
} from "props/mantine";
import React from "react";

type Props = {
    /** Children */
    children?: React.ReactNode;
    /** Key of theme.spacing or any valid CSS value to set gap */
    spacing?: MantineNumberSize;
    /** align-items CSS property */
    align?: AlignItems;
    /** justify-content CSS property */
    justify?: JustifyContent;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Compose elements and components in vertical flex container */
const Stack = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineStack {...other}>{children}</MantineStack>;
};

Stack.defaultProps = {};

export default Stack;

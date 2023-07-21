import { Flex as MantineFlex } from "@mantine/core";
import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from "props/css";
import { DashBaseProps } from "props/dash";
import {
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** gap CSS property */
    gap?: MantineNumberSize;
    /** row-gap CSS property */
    rowGap?: MantineNumberSize;
    /** column-gap CSS property */
    columnGap?: MantineNumberSize;
    /** align-items CSS property */
    align?: AlignItems;
    /** justify-content CSS property */
    justify?: JustifyContent;
    /** flex-wrap CSS property */
    wrap?: FlexWrap;
    /** flex-direction CSS property */
    direction?: FlexDirection;
    /** content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Center content horizontally with predefined max-width */
const Flex = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineFlex {...other}>{children}</MantineFlex>;
};

Flex.defaultProps = {};

export default Flex;

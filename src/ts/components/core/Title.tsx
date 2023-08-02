import React from "react";
import { Title as MantineTitle, TitleOrder } from "@mantine/core";
import { TitleSize } from "@mantine/core/lib/Title/Title";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TextProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Defines component and styles which will be used */
    order?: TitleOrder;
    /** Title font-size: h1-h6 or any valid CSS font-size value */
    size?: TitleSize;
} & Omit<TextProps, "size"> &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render icon inside element with theme colors */
const Title = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineTitle {...other}>{children}</MantineTitle>;
};

Title.defaultProps = {};

export default Title;

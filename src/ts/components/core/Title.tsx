import React from "react";
import { DashComponentProps, TextProps } from "../../props";
import { Title as MantineTitle, TitleOrder } from "@mantine/core";
import { TitleSize } from "@mantine/core/lib/Title/Title";

interface Props extends Omit<TextProps, "size">, DashComponentProps {
    /** Defines component and styles which will be used */
    order?: TitleOrder;
    /** Title font-size: h1-h6 or any valid CSS font-size value */
    size?: TitleSize;
}

/**
 * Render icon inside element with theme colors. For more information, see: https://mantine.dev/core/theme-icon/
 */
const Title = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineTitle {...other}>{children}</MantineTitle>;
};

Title.defaultProps = {};

export default Title;

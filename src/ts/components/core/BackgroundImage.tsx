import React from "react";
import { DashComponentProps } from "../../props";
import { BackgroundImage as MantineBackgroundImage } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Image url */
    src: string;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Use when you need to display image below any content. For more information, see: https://mantine.dev/core/image/
 */
const BackgroundImage = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineBackgroundImage {...other}>{children}</MantineBackgroundImage>
    );
};

BackgroundImage.defaultProps = {};

export default BackgroundImage;

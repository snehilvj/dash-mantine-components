import React from "react";
import { BackgroundImage as MantineBackgroundImage } from "@mantine/core";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Image url */
    src: string;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Use when you need to display image behind any content */
const BackgroundImage = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineBackgroundImage {...other}>{children}</MantineBackgroundImage>
    );
};

BackgroundImage.defaultProps = {};

export default BackgroundImage;

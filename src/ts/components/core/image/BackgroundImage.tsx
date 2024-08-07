import {
    BackgroundImage as MantineBackgroundImage,
    MantineRadius,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useMemo } from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
    radius?: MantineRadius;
    /** Image url */
    src: string;
    /** Content */
    children?: React.ReactNode;
}

/** BackgroundImage  */
const BackgroundImage = (props: Props) => {
    const { setProps, children, ...others } = props;

    return (
        <MantineBackgroundImage {...others}>{children}</MantineBackgroundImage>
    );
};

BackgroundImage.defaultProps = {};

export default BackgroundImage;

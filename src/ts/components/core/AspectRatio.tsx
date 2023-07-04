import { AspectRatio as MantineAspectRatio } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Aspect ratio, e.g. 16 / 9, 4 / 3, 1920 / 1080 */
    ratio: number;
    /** content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Maintain responsive consistent width/height ratio */
const AspectRatio = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAspectRatio {...other}>{children}</MantineAspectRatio>;
};

AspectRatio.defaultProps = {};

export default AspectRatio;

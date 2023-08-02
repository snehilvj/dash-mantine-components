import React from "react";
import { RingProgress as MantineRingProgress } from "@mantine/core";
import {
    MantineColor,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Label displayed in the center of the ring */
    label?: React.ReactNode;
    /** Ring thickness */
    thickness?: number;
    /** Width and height of the progress ring in px */
    size?: number;
    /** Sets whether the edges of the progress circle are rounded */
    roundCaps?: boolean;
    /** Ring sections */
    sections: {
        value: number;
        color: MantineColor;
        tooltip?: React.ReactNode;
    }[];
    /** Color of the root section, key of theme.colors or CSS color value */
    rootColor?: MantineColor;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Give user feedback for status of the task with circle diagram */
const RingProgress = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineRingProgress {...other} />;
};

RingProgress.defaultProps = {};

export default RingProgress;

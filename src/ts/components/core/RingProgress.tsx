import {
    MantineColor,
    RingProgress as MantineRingProgress,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface RingProgressSection {
    value: number;
    color: MantineColor;
    tooltip?: React.ReactNode;
}

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Label displayed in the center of the ring */
    label?: React.ReactNode;
    /** Ring thickness */
    thickness?: number;
    /** Width and height of the progress ring */
    size?: number;
    /** Sets whether the edges of the progress circle are rounded */
    roundCaps?: boolean;
    /** Ring sections */
    sections: RingProgressSection[];
    /** Color of the root section, key of theme.colors or CSS color value */
    rootColor?: MantineColor;
}

/** RingProgress */
const RingProgress = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineRingProgress
            {...others}
        />
    );
};

RingProgress.defaultProps = {};

export default RingProgress;

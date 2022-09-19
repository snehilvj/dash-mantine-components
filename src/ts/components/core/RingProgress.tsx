import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { RingProgress as MantineRingProgress } from "@mantine/core";

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
        color: MantineColors;
        tooltip?: React.ReactNode;
    }[];
} & DashComponentProps;

/**
 * Give user feedback for status of the task with circle diagram. For more information, see: https://mantine.dev/core/ring-progress/
 */
const RingProgress = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineRingProgress {...other} />;
};

RingProgress.defaultProps = {};

export default RingProgress;

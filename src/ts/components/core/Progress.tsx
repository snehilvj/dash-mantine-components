import React from "react";
import { DefaultProps } from "../../props";
import { Progress as MantineProgress } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";

interface ProgressSection {
    value: number;
    color: MantineColor;
    label?: string;
    tooltip?: React.ReactNode;
}

type Props = {
    /** Percent of filled bar (0-100) */
    value?: number;
    /** Progress color from theme */
    color?: MantineColor;
    /** Predefined progress height or number for height in px */
    size?: MantineNumberSize;
    /** Predefined progress radius from theme.radius or number for height in px */
    radius?: MantineNumberSize;
    /** Adds stripes */
    striped?: boolean;
    /** Whether to animate striped progress bars */
    animate?: boolean;
    /** Text to be placed inside the progress bar */
    label?: string;
    /** Replaces value if present, renders multiple sections instead of single one */
    sections?: ProgressSection[];
} & DefaultProps;

/**
 * Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
 */
const Progress = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineProgress {...other} />;
};

Progress.defaultProps = {};

export default Progress;

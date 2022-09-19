import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Progress as MantineProgress } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

interface ProgressSection {
    value: number;
    color: MantineColors;
    label?: string;
    tooltip?: React.ReactNode;
}

type Props = {
    /** Percent of filled bar (0-100) */
    value?: number;
    /** Progress color from theme */
    color?: MantineColors;
    /** Predefined progress height or number for height in px */
    size?: MantineSize;
    /** Predefined progress radius from theme.radius or number for height in px */
    radius?: MantineSize;
    /** Adds stripes */
    striped?: boolean;
    /** Whether to animate striped progress bars */
    animate?: boolean;
    /** Text to be placed inside the progress bar */
    label?: string;
    /** Replaces value if present, renders multiple sections instead of single one */
    sections?: ProgressSection[];
} & DashComponentProps;

/**
 * Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
 */
const Progress = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineProgress {...other} />;
};

Progress.defaultProps = {};

export default Progress;

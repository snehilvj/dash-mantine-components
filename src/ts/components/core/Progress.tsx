import React from "react";
import { Progress as MantineProgress } from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

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
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Give user feedback for status of the task */
const Progress = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineProgress {...other} />;
};

Progress.defaultProps = {};

export default Progress;

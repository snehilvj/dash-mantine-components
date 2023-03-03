import React from "react";
import { DefaultProps } from "../../../props";
import { MantineSize, MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Step color from theme.colors */
    color?: MantineColor;
    /** Should icon be displayed */
    withIcon?: boolean;
    /** Step icon, defaults to step index + 1 when rendered within Stepper */
    icon?: React.ReactNode;
    /** Step icon displayed when step is completed */
    completedIcon?: React.ReactNode;
    /** Step icon displayed when step is in progress */
    progressIcon?: React.ReactNode;
    /** Step label, render after icon */
    label?: React.ReactNode;
    /** Step description */
    description?: React.ReactNode;
    /** Icon wrapper size in px */
    iconSize?: number;
    /** Icon position relative to step body */
    iconPosition?: "right" | "left";
    /** Component size */
    size?: MantineSize;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Indicates loading state on step */
    loading?: boolean;
    /** Component orientation */
    orientation?: "vertical" | "horizontal";
    /** StepperStep content */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Display content divided into a steps sequence. For more information, see: https://mantine.dev/core/stepper/
 */
const StepperStep = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <>{children}</>;
};

StepperStep.defaultProps = {};

export default StepperStep;

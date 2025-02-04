import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Step index, controlled by Stepper component **/
    step?: number;
    /** Step state, controlled by Stepper component */
    state?: "stepInactive" | "stepProgress" | "stepCompleted";
    /** Key of `theme.colors`, by default controlled by Stepper component */
    color?: MantineColor;
    /** Determines whether the icon should be displayed */
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
    /** Icon wrapper size */
    iconSize?: number;
    /** Icon position relative to step body, controlled by Stepper component */
    iconPosition?: "right" | "left";
    /** Indicates loading state of the step */
    loading?: boolean;
    /** Set to false to disable clicks on step */
    allowStepClick?: boolean;
    /** Should step selection be allowed */
    allowStepSelect?: boolean;
    /** Component orientation */
    orientation?: "vertical" | "horizontal";
    /* Content */
    children?: React.ReactNode;
}

/** StepperStep */
const StepperStep = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return <>{children}</>;
};


export default StepperStep;

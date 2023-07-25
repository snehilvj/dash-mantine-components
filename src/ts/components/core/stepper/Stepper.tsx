import React, { useState } from "react";
import { Stepper as MantineStepper } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { renderDashComponents } from "dash-extensions-js";
import { omit } from "ramda";
import {
    MantineColor,
    MantineNumberSize,
    MantineSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Step icon, defaults to step index + 1 when rendered within Stepper */
    icon?: React.ReactNode;
    /** Whether to enable click on upcoming steps by default. Defaults to true **/
    allowNextStepsSelect?: boolean;
    /** <Stepper.Step /> components only */
    children: React.ReactNode;
    /** Active step index */
    active: number;
    /** Step icon displayed when step is completed */
    completedIcon?: React.ReactNode;
    /** Step icon displayed when step is in progress */
    progressIcon?: React.ReactNode;
    /** Active and progress Step colors from theme.colors */
    color?: MantineColor;
    /** Step icon size in px */
    iconSize?: number;
    /** Content padding-top from theme.spacing or number to set value in px */
    contentPadding?: MantineNumberSize;
    /** Component orientation */
    orientation?: "vertical" | "horizontal";
    /** Icon position relative to step body */
    iconPosition?: "right" | "left";
    /** Component size */
    size?: MantineSize;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Breakpoint at which orientation will change from horizontal to vertical */
    breakpoint?: MantineNumberSize;
} & MantineStylesAPIProps &
    MantineStyleSystemProps &
    DashBaseProps;

/** Display content divided into a steps sequence */
const Stepper = (props: Props) => {
    const { setProps, active, children, ...other } = props;

    const [act, setAct] = useState(active);

    useDidUpdate(() => {
        setAct(active);
    }, [active]);

    return (
        <MantineStepper active={act} {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "StepperCompleted") {
                    return (
                        <MantineStepper.Completed>
                            {child}
                        </MantineStepper.Completed>
                    );
                } else {
                    const childProps = child.props._dashprivate_layout.props;

                    const renderedProps = renderDashComponents(
                        omit(["children"], childProps),
                        [
                            "label",
                            "description",
                            "icon",
                            "progressIcon",
                            "completedIcon",
                        ]
                    );

                    return (
                        <MantineStepper.Step {...renderedProps} key={index}>
                            {child}
                        </MantineStepper.Step>
                    );
                }
            })}
        </MantineStepper>
    );
};

Stepper.defaultProps = {};

export default Stepper;

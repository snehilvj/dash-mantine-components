import {
    MantineColor,
    MantineRadius,
    MantineSize,
    MantineSpacing,
    Stepper as MantineStepper,
} from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { renderDashComponents } from "dash-extensions-js";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import { omit } from "ramda";
import React, { useState } from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Index of the active step */
    active: number;
    /** Step icon, default value is step index + 1 */
    icon?: React.ReactNode;
    /** Step icon displayed when step is completed, check icon by default */
    completedIcon?: React.ReactNode;
    /** Step icon displayed when step is in progress, default value is step index + 1 */
    progressIcon?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the step icon, by default icon size is inferred from `size` prop */
    iconSize?: number | string;
    /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
    contentPadding?: MantineSpacing;
    /** Stepper orientation, `'horizontal'` by default */
    orientation?: "vertical" | "horizontal";
    /** Icon position relative to the step body, `'left'` by default */
    iconPosition?: "right" | "left";
    /** Controls size of various Stepper elements */
    size?: MantineSize;
    /** Key of `theme.radius` or any valid CSS value to set steps border-radius, `"xl"` by default */
    radius?: MantineRadius;
    /** Determines whether next steps can be selected, `true` by default **/
    allowNextStepsSelect?: boolean;
    /** Determines whether steps should wrap to the next line if no space is available, `true` by default */
    wrap?: boolean;
    /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /* Content */
    children?: React.ReactNode;
}

/** Stepper */
const Stepper = (props: Props) => {
    const { setProps, loading_state, active, children, ...others } = props;

    const [act, setAct] = useState(active);

    useDidUpdate(() => {
        setAct(active);
    }, [active]);

    return (
        <MantineStepper
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            active={act}
            {...others}
        >
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

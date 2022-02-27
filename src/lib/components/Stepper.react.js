import { Stepper as MantineStepper } from '@mantine/core';
import PropTypes from "prop-types";
import React from "react";
import { renderDashComponents } from "dash-extensions-js";
import { omit } from "ramda";


const Stepper = (props) => {

    const { children, class_name } = props;
    console.log("log child", children)
    return (
        <MantineStepper
            {...omit(["children", "class_name", "setProps"], props)}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {

                const childProps = child.props._dashprivate_layout.props;
                const childType = child.props._dashprivate_layout.type;

                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["completedIcon", "description", "icon", "label", "progressIcon",]
                );

                console.log(renderedProps, index)
                if (childType === "StepperStep") {
                    return (
                        <MantineStepper.Step
                            {...omit(["children", "completedIcon",
                                "description", "icon", "label",
                                "progressIcon"], childProps)}
                            {...renderedProps}
                            key={index}
                        >
                            {childProps.children}
                        </MantineStepper.Step>
                    );
                } else if (childType === "StepperCompleted") {
                    return (
                        <MantineStepper.Completed>
                            {child}
                        </MantineStepper.Completed>
                    );
                }
            })}
        </MantineStepper>
    )

}

Stepper.displayName = "Stepper";

Stepper.defaultProps = {};

Stepper.propTypes = {
    /**
    * Active step index
    */
    active: PropTypes.number,
    /**
    * Breakpoint at which orientation will change from horizontal to vertical
    */
    breakpoint: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
    * <Stepper.Step /> components only
    */
    children: PropTypes.node,
    /**
    * Often used with CSS to style elements with common properties
    */
    class_name: PropTypes.string,

    /**
    * Active and progress Step colors from theme.colors
    */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),
    /**
    * Step icon displayed when step is completed
    */
    completedIcon: PropTypes.node,
    /**
    * Content padding-top from theme.spacing or number to set value in px
    */
    contentPadding: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
    * 	Icon position relative to step body
    */
    iconPosition: PropTypes.oneOf(["left", "right"]),
    /**
    * Step icon size in px
    */
    iconSize: PropTypes.number,
    /**
    * Called when step is clicked
    */
    // onStepClick: 

    /**
    * The ID of this component, used to identify dash components in callbacks
    */
    id: PropTypes.string,
    /**
    * Component orientation
    */
    orientation: PropTypes.oneOf(["horizontal", "vertifical"]),
    /**
    * 	Step icon displayed when step is in progress
    */
    progressIcon: PropTypes.node,

    /**
    * Radius from theme.radius, or number to set border-radius in px
    */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    setProps: PropTypes.func,
    /**
    * Component size
    */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    /**
    * Inline style override
    */
    style: PropTypes.object
};

export default Stepper;

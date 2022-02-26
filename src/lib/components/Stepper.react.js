import { Stepper as MantineStepper } from '@mantine/core';
import PropTypes from "prop-types";
import React from "react";
import { renderDashComponents } from "dash-extensions-js";
import { omit } from "ramda";


const Stepper = (props) => {

    const { children } = props;

    return (
        <MantineStepper
            {...omit(["children"], props)}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["title", "bullet"]
                );
                return (
                    <MantineStepper.Step
                        {...renderedProps}
                        key={index}
                    // onClick={() => changeActive(index)}
                    >
                        {child}
                    </MantineStepper.Step>
                );
            })}
        </MantineStepper>
    )

}

Stepper.displayName = "Stepper";

Stepper.defaultProps = {
};

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
    /**
    * Component size
    */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
};

export default Stepper;

import React from "react";
import PropTypes from "prop-types";

const StepperStep = (props) => {

    const { children } = props;

    return (
        <div>
            {children}
        </div>
    )

}

StepperStep.displayName = "StepperStep";

StepperStep.defaultProps = {
    allowStepClick: true,
    iconPosition: 'left',
    radius: 'xl',
    size: 'md',
    withIcon: true
};

StepperStep.propTypes = {
    /**
    * Set to false to disable clicks on step
    */
    allowStepClick: PropTypes.bool,
    /**
    * Should step selection be allowed
    */
    allowStepSelect: PropTypes.bool,
    /**
    * Step color from theme.colors
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
    completedIcon: PropTypes.number,
    /**
    * Step description
    */
    description: PropTypes.number,
    /**
    * Step icon, defaults to step index + 1 when rendered within Stepper
    */
    icon: PropTypes.number,
    /**
    * Icon position relative to step body
    */
    iconPosition: PropTypes.number,
    /**
    * Icon wrapper size in px
    */
    iconSize: PropTypes.number,
    /**
    * Step label, render after icon
    */
    label: PropTypes.number,
    /**
    * Indicates loading state on step
    */
    loading: PropTypes.number,
    /**
    * Step icon displayed when step is in progress
    */
    progressIcon: PropTypes.number,
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
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    /**
    * Step state, controlled by Steps component
    */
    state: PropTypes.oneOf(["stepProgress", "stepCompleted", "stepInactive"]),
    /**
    * Should icon be displayed
    */
    withIcon: PropTypes.bool,
};

export default StepperStep;

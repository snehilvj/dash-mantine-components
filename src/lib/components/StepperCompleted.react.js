import React from "react";
import PropTypes from "prop-types";

const StepperCompleted = (props) => {

    const { children } = props;

    return (
        <div>
            {children}
        </div>
    )
}

StepperCompleted.displayName = "StepperCompleted";

StepperCompleted.defaultProps = {};

StepperCompleted.propTypes = {
    /**
    * Content inside the last Stepper
    */
    children: PropTypes.node,
};

export default StepperCompleted;

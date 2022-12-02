import React from "react";

type Props = {
    /** StepperCompleted content */
    children?: React.ReactNode;
};

/**
 * Display content divided into a steps sequence. For more information, see: https://mantine.dev/core/stepper/
 */
const StepperCompleted = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

StepperCompleted.defaultProps = {};

export default StepperCompleted;

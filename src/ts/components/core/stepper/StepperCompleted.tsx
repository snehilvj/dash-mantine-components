import React from "react";

interface Props {
    /* Content */
    children?: React.ReactNode;
}

/** StepperCompleted */
const StepperCompleted = (props: Props) => {
    const { children, ...others } = props;

    return <>{children}</>;
};

export default StepperCompleted;

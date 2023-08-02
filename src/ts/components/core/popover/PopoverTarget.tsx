import React from "react";

type Props = {
    /** Popover target */
    children?: React.ReactNode;
};

/** Display popover section relative to given target element */
const PopoverTarget = (props: Props) => {
    return <>{props.children}</>;
};

PopoverTarget.defaultProps = {};

export default PopoverTarget;

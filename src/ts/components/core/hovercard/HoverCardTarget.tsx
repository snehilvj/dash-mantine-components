import React from "react";

type Props = {
    /** HoverCard target */
    children?: React.ReactNode;
};

/** Display popover section when target element is hovered */
const HoverCardTarget = (props: Props) => {
    return <>{props.children}</>;
};

HoverCardTarget.defaultProps = {};

export default HoverCardTarget;

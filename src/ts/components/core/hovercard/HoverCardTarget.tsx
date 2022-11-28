import React from "react";

type Props = {
    /** HoverCard target */
    children?: React.ReactNode;
};

/**
 * Display popover section when target element is hovered. For more information, see: https://mantine.dev/core/hover-card/
 */
const HoverCardTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

HoverCardTarget.defaultProps = {};

export default HoverCardTarget;

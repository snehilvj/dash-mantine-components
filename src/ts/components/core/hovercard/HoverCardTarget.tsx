import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** HoverCardTarget */
const HoverCardTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

HoverCardTarget.defaultProps = {};

export default HoverCardTarget;

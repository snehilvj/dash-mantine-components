import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** PopoverTarget */
const PopoverTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

PopoverTarget.defaultProps = {};

export default PopoverTarget;

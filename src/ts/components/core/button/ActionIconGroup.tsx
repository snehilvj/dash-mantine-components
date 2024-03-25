import { ActionIcon } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** `ActionIcon` components only */
    children?: React.ReactNode;
    /** Controls group orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
    /** `border-width` of the child `ActionIcon` components. Default value in `1` */
    borderWidth?: number | string;
}

/** ActionIconGroup */
const ActionIconGroup = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <ActionIcon.Group {...others}>{children}</ActionIcon.Group>;
};

ActionIconGroup.defaultProps = {};

export default ActionIconGroup;

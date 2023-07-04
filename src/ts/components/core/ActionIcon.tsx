import { ActionIcon as MantineActionIcon } from "@mantine/core";
import { MantineGradient } from "@mantine/styles";
import { DashBaseProps } from "props/dash";
import {
    LoaderProps,
    MantineColor,
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Icon */
    children?: React.ReactNode;
    /** Controls appearance, subtle by default */
    variant?:
        | "subtle"
        | "filled"
        | "outline"
        | "light"
        | "default"
        | "transparent"
        | "gradient";
    /** Key of theme.colors */
    color?: MantineColor;
    /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
    gradient?: MantineGradient;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Predefined button size or any valid CSS value to set width and height */
    size?: MantineNumberSize;
    /** Props added to Loader component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps &
        DashBaseProps &
        MantineStylesAPIProps &
        MantineStyleSystemProps;
    /** Indicates loading state */
    loading?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Indicates disabled state */
    disabled?: boolean;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Icon button. */
const ActionIcon = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...other } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineActionIcon disabled={disabled} onClick={increment} {...other}>
            {children}
        </MantineActionIcon>
    );
};

ActionIcon.defaultProps = {
    n_clicks: 0,
};

export default ActionIcon;

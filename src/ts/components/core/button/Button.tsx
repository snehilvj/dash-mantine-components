import { Button as MantineButton } from "@mantine/core";
import { MantineGradient } from "@mantine/styles";
import { DashBaseProps } from "props/dash";
import {
    LoaderProps,
    MantineColor,
    MantineNumberSize,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Predefined button size */
    size?: MantineSize;
    /** Button type attribute */
    type?: "submit" | "button" | "reset";
    /** Button color from theme */
    color?: MantineColor;
    /** Adds icon before button label  */
    leftIcon?: React.ReactNode;
    /** Adds icon after button label  */
    rightIcon?: React.ReactNode;
    /** Sets button width to 100% of parent element */
    fullWidth?: boolean;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Controls button appearance */
    variant?:
        | "filled"
        | "outline"
        | "light"
        | "white"
        | "default"
        | "subtle"
        | "gradient";
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
    /** Set text-transform to uppercase */
    uppercase?: boolean;
    /** Reduces vertical and horizontal spacing */
    compact?: boolean;
    /** Indicate loading state */
    loading?: boolean;
    /** Props spread to Loader component */
    loaderProps?: LoaderProps &
        DashBaseProps &
        MantineStylesAPIProps &
        MantineStyleSystemProps;
    /** Loader position relative to button label */
    loaderPosition?: "left" | "right" | "center";
    /** Button label */
    children?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render button or link with button styles from mantine theme. */
const Button = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...other } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineButton onClick={increment} disabled={disabled} {...other}>
            {children}
        </MantineButton>
    );
};

Button.defaultProps = {
    n_clicks: 0,
};

export default Button;

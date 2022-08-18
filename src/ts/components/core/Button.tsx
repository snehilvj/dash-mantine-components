import React, { useCallback } from "react";
import { DashComponentProps, MantineColors, LoaderProps } from "../../props";
import { Button as MantineButton } from "@mantine/core";
import {
    MantineNumberSize,
    MantineSize,
    MantineGradient,
} from "@mantine/styles";
import { ButtonVariant } from "@mantine/core/lib/Button";

type Props = {
    /** Predefined button size */
    size?: MantineSize;
    /** Button type attribute */
    type?: "submit" | "button" | "reset";
    /** Button color from theme */
    color?: MantineColors;
    /** Adds icon before button label  */
    leftIcon?: React.ReactNode;
    /** Adds icon after button label  */
    rightIcon?: React.ReactNode;
    /** Sets button width to 100% of parent element */
    fullWidth?: boolean;
    /** Button border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Controls button appearance */
    variant?: ButtonVariant;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
    /** Set text-transform to uppercase */
    uppercase?: boolean;
    /** Reduces vertical and horizontal spacing */
    compact?: boolean;
    /** Indicate loading state */
    loading?: boolean;
    /** Props spread to Loader component */
    loaderProps?: LoaderProps;
    /** Loader position relative to button label */
    loaderPosition?: "left" | "right";
    /** Button label */
    children?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks: number;
} & DashComponentProps;

/**
 * Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
 */
const Button = (props: Props) => {
    const { children, setProps, n_clicks, ...other } = props;

    const increment = useCallback(
        (n_clicks) => {
            setProps({ n_clicks: n_clicks + 1 });
        },
        [n_clicks]
    );

    return (
        <MantineButton onClick={increment} {...other}>
            {children}
        </MantineButton>
    );
};

Button.defaultProps = {
    n_clicks: 0,
};

export default Button;

import React from "react";
import { DashComponentProps, LoaderProps, MantineColors } from "../../props";
import { ActionIcon as MantineActionIcon } from "@mantine/core";
import { ActionIconVariant } from "@mantine/core/lib/ActionIcon";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Icon */
    children?: React.ReactNode;
    /** Controls appearance */
    variant?: ActionIconVariant;
    /** Key of theme.colors */
    color?: MantineColors;
    /** Button border-radius from theme or number to set border-radius in px */
    radius?: MantineSize;
    /** Predefined icon size or number to set width and height in px */
    size?: MantineSize;
    /** Props spread to Loader component */
    loaderProps?: LoaderProps;
    /** Indicates loading state */
    loading?: boolean;
    /** Indicates disabled state */
    disabled?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks: number;
} & DashComponentProps;

/**
 * Icon ActionIcon to indicate secondary action. For more information, see: https://mantine.dev/core/action-icon/
 */
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
        <MantineActionIcon onClick={increment} {...other}>
            {children}
        </MantineActionIcon>
    );
};

ActionIcon.defaultProps = {
    n_clicks: 0,
};

export default ActionIcon;

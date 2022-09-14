import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Chip as MantineChip } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Chip radius from theme or number to set value in px */
    radius?: MantineSize;
    /** Predefined chip size */
    size?: MantineSize;
    /** Chip input type */
    type?: "radio" | "checkbox";
    /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
    variant?: "outline" | "filled";
    /** Chip label */
    children?: React.ReactNode;
    /** Checked state for controlled component */
    checked?: boolean;
    /** Active color from theme, defaults to theme.primaryColor */
    color?: MantineColors;
    /** To be used with checkbox group */
    value?: string;
} & DashComponentProps;

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/Chip/
 */
const Chip = (props: Props) => {
    const { checked, children, setProps, ...other } = props;

    const onChange = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineChip onChange={onChange} {...other}>
            {children}
        </MantineChip>
    );
};

Chip.defaultProps = {};

export default Chip;

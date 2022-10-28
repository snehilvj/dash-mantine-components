import React from "react";
import { DefaultProps } from "../../../props";
import { Chip as MantineChip } from "@mantine/core";
import { MantineSize, MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Chip radius from theme or number to set value in px */
    radius?: MantineNumberSize;
    /** Predefined label font-size and checkbox width and height in px */
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
    color?: MantineColor;
    /** To be used with chip group */
    value?: string;
} & DefaultProps;

/**
 * Pick one or multiple values with inline controls. For more information, see: https://mantine.dev/core/chip/
 */
const Chip = (props: Props) => {
    const { children, setProps, ...other } = props;

    const onChange = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineChip onChange={onChange} {...other}>
            {children}
        </MantineChip>
    );
};

Chip.defaultProps = {
    checked: false,
};

export default Chip;

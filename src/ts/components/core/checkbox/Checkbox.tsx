import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import { MantineNumberSize, MantineSize } from "@mantine/styles";

type Props = {
    /** Key of theme.colors */
    color?: MantineColors;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined label font-size and checkbox width and height in px */
    size?: MantineSize;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Indeterminate state of checkbox, overwrites checked */
    indeterminate?: boolean;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** State of check box */
    checked?: boolean;
    /** To be used with checkbox group */
    value?: string;
} & DashComponentProps;

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
 */
const Checkbox = (props: Props) => {
    const { setProps, ...other } = props;

    const updateProps = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineCheckbox
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...other}
        />
    );
};

Checkbox.defaultProps = {};

export default Checkbox;

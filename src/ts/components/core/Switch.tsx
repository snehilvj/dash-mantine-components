import React from "react";
import { DefaultProps } from "../../props";
import { Switch as MantineSwitch } from "@mantine/core";
import { MantineSize, MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Switch label */
    label?: React.ReactNode;
    /** Inner label when Switch is in unchecked state */
    offLabel?: React.ReactNode;
    /** Inner label when Switch is in checked state */
    onLabel?: React.ReactNode;
    /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
    color?: MantineColor;
    /** Predefined size value */
    size?: MantineSize;
    /** Radius from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Icon inside the thumb of switch */
    thumbIcon?: React.ReactNode;
    /** A checkbox can show it is currently unable to be interacted with */
    disabled?: boolean;
    /** State of check box */
    checked?: boolean;
} & DefaultProps;

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/switch/
 */
const Switch = (props: Props) => {
    const { setProps, ...other } = props;

    const updateProps = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineSwitch
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...other}
        />
    );
};

Switch.defaultProps = {
    checked: false,
};

export default Switch;

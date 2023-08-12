import React from "react";
import { MantineProvider, Switch as MantineSwitch } from "@mantine/core";
import { MantineSize, MantineNumberSize, MantineColor } from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

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
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: MantineNumberSize;
    /** Props spread to wrapper element */
    wrapperProps?: Record<string, any>;
    /** Icon inside the thumb of switch */
    thumbIcon?: React.ReactNode;
    /** Position of label */
    labelPosition?: "left" | "right";
    /** description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** A checkbox can show it is currently unable to be interacted with */
    disabled?: boolean;
    /** State of check box */
    checked?: boolean;
} & PersistenceProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    DashBaseProps;

/** Capture boolean input from user */
const Switch = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

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
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Switch;

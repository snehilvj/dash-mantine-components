import React from "react";
import { DefaultProps, PersistenceProps } from "../../../props";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import { MantineSize, MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Key of theme.colors */
    color?: MantineColor;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined label font-size and checkbox width and height in px */
    size?: MantineSize;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** State of check box */
    checked?: boolean;
    /** To be used with checkbox group */
    value?: string;
    /** Whether component is disabled */
    disabled?: boolean;
} & DefaultProps &
    PersistenceProps;

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
 */
const Checkbox = (props: Props) => {
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
        <MantineCheckbox
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...other}
        />
    );
};

Checkbox.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Checkbox;

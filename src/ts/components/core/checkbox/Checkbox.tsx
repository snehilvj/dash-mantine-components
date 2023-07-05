import { Checkbox as MantineCheckbox } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Key of theme.colors */
    color?: MantineColor;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Controls label font-size and checkbox width and height */
    size?: MantineNumberSize;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Props added to the root element */
    wrapperProps?: Record<string, any>;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Position of the label */
    labelPosition?: "left" | "right";
    /** Description, displayed after the label */
    description?: React.ReactNode;
    /** Error message displayed after the input */
    error?: React.ReactNode;
    /** State of check box */
    checked?: boolean;
    /** To be used with checkbox group */
    value?: string;
    /** Whether component is disabled */
    disabled?: boolean;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/** Capture boolean input from user */
const Checkbox = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    return (
        <MantineCheckbox
            onChange={(ev) => setProps({ checked: ev.currentTarget.checked })}
            {...other}
        />
    );
};

Checkbox.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Checkbox;

import { Radio as MantineRadio } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

export type Props = {
    /** Radio label */
    label?: React.ReactNode;
    /** Active radio color from theme.colors */
    color?: MantineColor;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Animation duration in ms */
    transitionDuration?: number;
    /** Props spread to root element */
    wrapperProps?: Record<string, any>;
    /** Position of label */
    labelPosition?: "left" | "right";
    /** description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** Whether component is disabled */
    disabled?: boolean;
    /** State of check box */
    checked?: boolean;
    /** To be used with Radio group */
    value?: string;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/** Wrapper for input type radio */
const Radio = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    return (
        <MantineRadio
            onChange={(ev) => setProps({ checked: ev.currentTarget.checked })}
            {...other}
        />
    );
};

Radio.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Radio;

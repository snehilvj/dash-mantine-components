import { Chip as MantineChip } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: MantineNumberSize;
    /** Predefined chip size */
    size?: MantineNumberSize;
    /** Chip input type */
    type?: "radio" | "checkbox";
    /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
    variant?: "outline" | "filled" | "light";
    /** Chip label */
    children?: React.ReactNode;
    /** Checked state for controlled component */
    checked?: boolean;
    /** whether the component is disabled */
    disabled?: boolean;
    /** Active color from theme, defaults to theme.primaryColor */
    color?: MantineColor;
    /** Props spread to wrapper element */
    wrapperProps?: Record<string, any>;
    /** To be used with chip group */
    value?: string;
} & PersistenceProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Pick one or multiple values with inline controls */
const Chip = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

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
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Chip;

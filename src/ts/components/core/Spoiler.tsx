import React from "react";
import { Spoiler as MantineSpoiler } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** Max height of visible content, when this point is reached spoiler appears */
    maxHeight: number;
    /** Label for close spoiler action */
    hideLabel: React.ReactNode;
    /** Label for open spoiler action */
    showLabel: React.ReactNode;
    /** Get ref of spoiler toggle button */
    controlRef?: React.ForwardedRef<HTMLButtonElement>;
    /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount */
    initialState?: boolean;
    /** Spoiler reveal transition duration in ms, 0 or null to turn off animation */
    transitionDuration?: number;
    /** Content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Hide long sections of content under spoiler */
const Spoiler = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineSpoiler {...other}>{children}</MantineSpoiler>;
};

Spoiler.defaultProps = {};

export default Spoiler;

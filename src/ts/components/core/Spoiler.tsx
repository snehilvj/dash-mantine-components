import React from "react";
import { DashComponentProps } from "../../props";
import { Spoiler as MantineSpoiler } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Max height of visible content, when this point is reached spoiler appears */
    maxHeight: number;
    /** Label for close spoiler action */
    hideLabel: string;
    /** Label for open spoiler action */
    showLabel: string;
    /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount */
    initialState?: boolean;
    /** Spoiler reveal transition duration in ms, 0 or null to turn off animation */
    transitionDuration?: number;
    /** Content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
 */
const Spoiler = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineSpoiler {...other}>{children}</MantineSpoiler>;
};

Spoiler.defaultProps = {};

export default Spoiler;

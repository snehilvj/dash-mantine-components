import { Spoiler as MantineSpoiler } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Maximum height of the visible content, when this point is reached spoiler appears, `100` by default */
    maxHeight?: number;
    /** Label for close spoiler action */
    hideLabel: React.ReactNode;
    /** Label for open spoiler action */
    showLabel: React.ReactNode;
    /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state is updated on mount */
    initialState?: boolean;
    /** Spoiler reveal transition duration in ms, set 0 or null to turn off animation, `200` by default */
    transitionDuration?: number;
    /** Content */
    children?: React.ReactNode;
    /** Controlled expanded state value */
    expanded?: boolean;
}

/** Spoiler */
const Spoiler = (props: Props) => {
    const { setProps, loading_state, expanded, children, ...others } = props;

    const [opened, setOpened] = useState(expanded);

    useDidUpdate(() => {
        setProps({ expanded: opened });
    }, [opened]);

    useDidUpdate(() => {
        setOpened(expanded);
    }, [expanded]);

    return (
        <MantineSpoiler
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            expanded={opened}
            onExpandedChange={setOpened}
            {...others}
        >
            {children}
        </MantineSpoiler>
    );
};

Spoiler.defaultProps = {
    expanded: false,
};

export default Spoiler;

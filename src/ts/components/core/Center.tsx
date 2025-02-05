import { Center as MantineCenter } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
    inline?: boolean;
}

/** Centers content vertically and horizontally */
const Center = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineCenter
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineCenter>
    );
};

Center.defaultProps = {};

export default Center;

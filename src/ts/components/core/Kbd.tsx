import { Kbd as MantineKbd, MantineSize } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Controls font-size and padding, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Keyboard key */
    children?: React.ReactNode;
}

/** Kbd */
const Kbd = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineKbd
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineKbd>
    );
};

Kbd.defaultProps = {};

export default Kbd;

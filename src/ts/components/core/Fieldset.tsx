import { Fieldset as MantineFieldset, MantineRadius } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** disables all inputs and buttons inside the fieldset:*/
    disabled?: boolean;
    /** Fieldset legend */
    legend?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /* Content */
    children?: React.ReactNode;
}

/** Fieldset */
const Fieldset = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineFieldset
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineFieldset>
    );
};

export default Fieldset;

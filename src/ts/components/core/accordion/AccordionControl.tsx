import { Accordion } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Disables control button */
    disabled?: boolean;
    /** Custom chevron icon */
    chevron?: React.ReactNode;
    /** Control label */
    children?: React.ReactNode;
    /** Icon displayed next to the label */
    icon?: React.ReactNode;
}

/** AccordionControl */
const AccordionControl = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Accordion.Control
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Accordion.Control>
    );
};

AccordionControl.defaultProps = {};

export default AccordionControl;

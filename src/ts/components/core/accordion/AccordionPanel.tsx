import { Accordion } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** AccordionPanel */
const AccordionPanel = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Accordion.Panel
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Accordion.Panel>
    );
};

AccordionPanel.defaultProps = {};

export default AccordionPanel;

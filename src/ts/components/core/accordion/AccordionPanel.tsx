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
    const { children, setProps, ...other } = props;

    return <Accordion.Panel {...other}>{children}</Accordion.Panel>;
};

AccordionPanel.defaultProps = {};

export default AccordionPanel;

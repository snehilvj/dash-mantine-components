import { Accordion } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** AccordionPanel content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Divide content into collapsible sections. */
const AccordionPanel = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Panel {...other}>{children}</Accordion.Panel>;
};

AccordionPanel.defaultProps = {};

export default AccordionPanel;

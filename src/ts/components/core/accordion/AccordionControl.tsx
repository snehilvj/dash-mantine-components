import { Accordion } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Disables control button */
    disabled?: boolean;
    /** Custom chevron icon */
    chevron?: React.ReactNode;
    /** Control label */
    children?: React.ReactNode;
    /** Icon rendered next to label */
    icon?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Divide content into collapsible sections. */
const AccordionControl = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Control {...other}>{children}</Accordion.Control>;
};

AccordionControl.defaultProps = {};

export default AccordionControl;

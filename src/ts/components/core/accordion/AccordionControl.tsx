import React from "react";
import { DefaultProps } from "../../../props";
import { Accordion } from "@mantine/core";

type Props = {
    /** Disables control button */
    disabled?: boolean;
    /** Custom chevron icon */
    chevron?: React.ReactNode;
    /** Control label */
    children?: React.ReactNode;
    /** Icon rendered next to label */
    icon?: React.ReactNode;
} & DefaultProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const AccordionControl = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Control {...other}>{children}</Accordion.Control>;
};

AccordionControl.defaultProps = {};

export default AccordionControl;

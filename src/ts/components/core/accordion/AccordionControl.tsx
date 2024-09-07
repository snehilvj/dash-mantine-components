import { Accordion } from "@mantine/core";
import { AccordionControlFactory } from "@mantine/core/lib/components/Accordion/AccordionControl/AccordionControl";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AccordionControlFactory["stylesNames"]>,
        DashBaseProps {
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
    const { children, setProps, ...others } = props;

    return <Accordion.Control {...others}>{children}</Accordion.Control>;
};

AccordionControl.defaultProps = {};

export default AccordionControl;

import { Accordion } from "@mantine/core";
import { AccordionPanelFactory } from "@mantine/core/lib/components/Accordion/AccordionPanel/AccordionPanel";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AccordionPanelFactory["stylesNames"]>,
        DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** AccordionPanel */
const AccordionPanel = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Accordion.Panel {...others}>{children}</Accordion.Panel>;
};

AccordionPanel.defaultProps = {};

export default AccordionPanel;

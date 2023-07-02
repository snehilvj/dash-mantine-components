import { Accordion } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Value that is used to manage accordion state */
    value: string;
    /** AccordionItem content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Divide content into collapsible sections. */
const AccordionItem = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Item {...other}>{children}</Accordion.Item>;
};

AccordionItem.defaultProps = {};

export default AccordionItem;

import React from "react";
import { DashComponentProps } from "../../../props";
import { Accordion } from "@mantine/core";

type Props = {
    /** Value that is used to manage accordion state */
    value: string;
    /** AccordionItem content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const AccordionItem = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Item {...other}>{children}</Accordion.Item>;
};

AccordionItem.defaultProps = {};

export default AccordionItem;

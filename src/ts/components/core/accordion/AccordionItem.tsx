import { Accordion } from "@mantine/core";
import { AccordionItemFactory } from "@mantine/core/lib/components/Accordion/AccordionItem/AccordionItem";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AccordionItemFactory["stylesNames"]>,
        DashBaseProps {
    /** Value that is used to manage accordion state */
    value: string;
    /** Content */
    children?: React.ReactNode;
}

/** AccordionItem */
const AccordionItem = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Accordion.Item {...others}>{children}</Accordion.Item>;
};

AccordionItem.defaultProps = {};

export default AccordionItem;

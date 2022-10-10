import React from "react";
import { DefaultProps, AccordionSharedProps } from "../../../props";
import { Accordion as MantineAccordion } from "@mantine/core";

type Props = {
    /** Value that is used to manage accordion state */
    value?: string[];
} & AccordionSharedProps &
    DefaultProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const AccordionMultiple = (props: Props) => {
    const { children, setProps, ...other } = props;

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return (
        <MantineAccordion multiple={true} onChange={onChange} {...other}>
            {children}
        </MantineAccordion>
    );
};

AccordionMultiple.defaultProps = {};

export default AccordionMultiple;

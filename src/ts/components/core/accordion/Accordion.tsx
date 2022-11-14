import React from "react";
import {
    DefaultProps,
    PersistenceProps,
    AccordionSharedProps,
} from "../../../props";
import { Accordion as MantineAccordion } from "@mantine/core";

type Props = {
    /** Value that is used to manage accordion state */
    value?: string;
} & AccordionSharedProps &
    PersistenceProps &
    DefaultProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const Accordion = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineAccordion multiple={false} onChange={onChange} {...other}>
            {children}
        </MantineAccordion>
    );
};

Accordion.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Accordion;

import React from "react";
import { Accordion as MantineAccordion } from "@mantine/core";
import {
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    MantineNumberSize,
} from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    AccordionChevronPosition,
    AccordionHeadingOrder,
    AccordionVariant,
} from "@mantine/core/lib/Accordion/Accordion.types";

type Props = {
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Accordion content */
    children: React.ReactNode;
    /** Determines whether multiple items can be opened at a time */
    multiple?: boolean;
    /** Value for controlled component */
    value?: string | string[];
    /** Transition duration in ms, set 0 to disable transitions */
    transitionDuration?: number;
    /** Determines whether chevron rotation should be disabled */
    disableChevronRotation?: boolean;
    /** Determines position of the chevron */
    chevronPosition?: AccordionChevronPosition;
    /** Chevron size */
    chevronSize?: number | string;
    /** Heading order, has no effect on visuals */
    order?: AccordionHeadingOrder;
    /** Replaces chevron on all items */
    chevron?: React.ReactNode;
    /** Controls visuals */
    variant?: AccordionVariant;
    /** Key of theme.radius or any valid CSS value to set border-radius, ignored when variant="default" */
    radius?: MantineNumberSize;
} & DashBaseProps &
    PersistenceProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Divide content into collapsible sections. */
const Accordion = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: string | string[]) => {
        setProps({ value });
    };

    return (
        <MantineAccordion onChange={onChange} {...other}>
            {children}
        </MantineAccordion>
    );
};

Accordion.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Accordion;

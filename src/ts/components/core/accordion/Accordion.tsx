import React, { useCallback } from "react";
import { DashComponentProps } from "../../../props";
import { Accordion as MantineAccordion } from "@mantine/core";
import {
    AccordionChevronPosition,
    AccordionHeadingOrder,
    AccordionVariant,
} from "@mantine/core/lib/Accordion/Accordion.types";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Accordion content */
    children?: React.ReactNode;
    /** Determines whether multiple items can be opened at a time */
    multiple?: boolean;
    /** Value that is used to manage accordion state */
    value?: string;
    /** Transition duration in ms, set 0 to disable transitions */
    transitionDuration?: number;
    /** Determines whether chevron rotation should be disabled */
    disableChevronRotation?: boolean;
    /** Determines position of the chevron */
    chevronPosition?: AccordionChevronPosition;
    /** Chevron size in px */
    chevronSize?: number;
    /** Heading order, has no effect on visuals */
    order?: AccordionHeadingOrder;
    /** Replaces chevron on all items */
    chevron?: React.ReactNode;
    /** Controls visuals */
    variant?: AccordionVariant;
    /** border-radius from theme.radius or number to set value in px, will not be applied to default variant  */
    radius?: MantineNumberSize;
} & DashComponentProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const Accordion = (props: Props) => {
    const { children, setProps, value, ...other } = props;

    const onChange = useCallback(
        (value) => {
            setProps({ value });
        },
        [value]
    );

    return (
        <MantineAccordion value={value} onChange={onChange} {...other}>
            {children}
        </MantineAccordion>
    );
};

Accordion.defaultProps = {};

export default Accordion;

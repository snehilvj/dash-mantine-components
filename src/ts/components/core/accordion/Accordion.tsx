import {
    AccordionHeadingOrder,
    AccordionVariant,
    Accordion as MantineAccordion,
    MantineRadius,
} from "@mantine/core";
import { AccordionChevronPosition } from "@mantine/core/lib/components/Accordion/Accordion.types";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Determines whether multiple items can be opened at a time, `false` by default */
    multiple?: boolean;
    /** Value for controlled component */
    value?: string | string[];
    /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
    loop?: boolean;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Determines whether chevron rotation should be disabled, `false` by default */
    disableChevronRotation?: boolean;
    /** Position of the chevron relative to the item label, `right` by default */
    chevronPosition?: AccordionChevronPosition;
    /** Size of the chevron icon container, `24` by default */
    chevronSize?: number | string;
    /** Heading order, has no effect on visuals */
    order?: AccordionHeadingOrder;
    /** Custom chevron icon that will be used in all items */
    chevron?: React.ReactNode;
    /** Controls visuals */
    variant?: AccordionVariant;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: MantineRadius;
    /** Accordion content */
    children: React.ReactNode;
}

/** Accordion */
const Accordion = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onChange = (value: string | string[]) => {
        setProps({ value });
    };

    return (
        <MantineAccordion
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onChange={onChange}
            {...others}
        >
            {children}
        </MantineAccordion>
    );
};

Accordion.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Accordion;

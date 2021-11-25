import React from "react";
import { Accordion as MantineAccordion, Text } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/** Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/ */
const Accordion = (props) => {
    const { children } = props;

    return (
        <MantineAccordion {...omit(["setProps"], props)}>
            {children.map((child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <MantineAccordion.Item
                        label={
                            <div>
                                <Text>{childProps.label}</Text>
                                <Text size="sm" color="dimmed" weight={400}>
                                    {childProps.description}
                                </Text>
                            </div>
                        }
                        key={index}
                        className={childProps.className}
                    >
                        {child}
                    </MantineAccordion.Item>
                );
            })}
        </MantineAccordion>
    );
};

Accordion.displayName = "Accordion";

Accordion.defaultProps = {};

Accordion.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /**	<AccordionItem /> components only */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Should icon rotation be disabled */
    disableIconRotation: PropTypes.bool,

    /**	Change icon position: left or right */
    iconPosition: PropTypes.oneOf(["right", "left"]),

    /** Index of item which is initially opened (uncontrolled component) */
    initialItem: PropTypes.number,

    /** Allow multiple items to be opened at the same time */
    multiple: PropTypes.bool,
};

export default Accordion;

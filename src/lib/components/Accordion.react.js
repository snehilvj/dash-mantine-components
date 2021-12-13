import React from "react";
import { Accordion as MantineAccordion, Text } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const Accordion = (props) => {
    const { children, setProps } = props;

    const onChange = (state) => {
        setProps({ state });
    };

    return (
        <MantineAccordion {...omit(["setProps"], props)} onChange={onChange}>
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
    /**
     * <AccordionItem /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Should icon rotation be disabled
     */
    disableIconRotation: PropTypes.bool,

    /**
     * Change icon position: left or right
     */
    iconPosition: PropTypes.oneOf(["right", "left"]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Allow multiple items to be opened at the same time
     */
    multiple: PropTypes.bool,

    /**
     * Should icon be offset with padding, applicable only when iconPosition is left
     */
    offsetIcon: PropTypes.bool,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Controlled state (controls opened state of accordion items)
     */
    state: PropTypes.objectOf(PropTypes.bool),
};

export default Accordion;

import React from "react";
import { Accordion as MantineAccordion } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents, renderDashComponent } from "dash-extensions-js";

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const Accordion = (props) => {
    const { children, setProps, class_name, icon } = props;

    const onChange = (state) => {
        setProps({ state });
    };

    return (
        <MantineAccordion
            {...omit(["setProps", "class_name", "icon"], props)}
            onChange={onChange}
            icon={renderDashComponent(icon)}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["label", "icon"]
                );
                return (
                    <MantineAccordion.Item {...renderedProps} key={index}>
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
    class_name: PropTypes.string,

    /**
     * Should icon rotation be disabled
     */
    disableIconRotation: PropTypes.bool,

    /**
     * Replace icon on all items
     */
    icon: PropTypes.any,

    /**
     * Change icon position: left or right
     */
    iconPosition: PropTypes.oneOf(["right", "left"]),

    /**
     *Icon width in px
     */
    iconSize: PropTypes.number,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Allow multiple items to be opened at the same time
     */
    multiple: PropTypes.bool,

    /**
     * Should icon be offset with padding, applicable only when iconPosition is left
     */
    offsetIcon: PropTypes.bool,

    /**
     * Heading level used for items
     */
    // eslint-disable-next-line no-magic-numbers
    order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Controlled state (controls opened state of accordion items)
     */
    state: PropTypes.objectOf(PropTypes.bool),

    /**
     * Inline style
     */
    style: PropTypes.object,

    /**
     * Open/close item transition duration in ms
     */
    transitionDuration: PropTypes.number,
};

export default Accordion;

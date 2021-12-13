import React from "react";
import PropTypes from "prop-types";

/**
 * Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/
 */
const AccordionItem = (props) => {
    return <div>{props.children}</div>;
};

AccordionItem.displayName = "AccordionItem";

AccordionItem.defaultProps = {};

AccordionItem.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Accordion content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Accordion description
     */
    description: PropTypes.string,

    /**
     * Accordion label
     */
    label: PropTypes.string.isRequired,

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
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,
};

export default AccordionItem;

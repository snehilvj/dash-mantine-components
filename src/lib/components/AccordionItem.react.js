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
     * Accordion content
     */
    children: PropTypes.node,

    /**
     * Icon
     */
    icon: PropTypes.any,

    /**
     * Accordion label
     */
    label: PropTypes.any.isRequired,
};

export default AccordionItem;

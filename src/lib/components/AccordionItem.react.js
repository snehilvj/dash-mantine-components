import React from "react";
import PropTypes from "prop-types";

/**
 * Utility component to be passed to Accordion. For more information, see: https://mantine.dev/core/accordion/
 */
const AccordionItem = (props) => {
    return <>{props.children}</>;
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

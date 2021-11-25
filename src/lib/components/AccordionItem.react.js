import React from "react";
import PropTypes from "prop-types";

/** Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/ */
const AccordionItem = (props) => {
    return <div>{props.children}</div>;
};

AccordionItem.displayName = "AccordionItem";

AccordionItem.defaultProps = {};

AccordionItem.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Col content */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Accordion label */
    label: PropTypes.string.isRequired,

    /** Accordion description */
    description: PropTypes.string,
};

export default AccordionItem;

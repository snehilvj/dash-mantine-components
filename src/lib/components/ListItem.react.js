import React from "react";
import PropTypes from "prop-types";

/**
 * Utility component to be passed to List, see: https://mantine.dev/core/list/
 */
const ListItem = (props) => {
    return <>{props.children}</>;
};

ListItem.displayName = "ListItem";

ListItem.defaultProps = {};

ListItem.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Icon that should replace list item dot
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,
};

export default ListItem;

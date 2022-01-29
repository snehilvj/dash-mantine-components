import React from "react";
import PropTypes from "prop-types";

/**
 * Utility component to pass to Tabs. For more information, see: https://mantine.dev/core/tabs/
 */
const Tab = (props) => {
    return <div>{props.children}</div>;
};

Tab.displayName = "Tab";

Tab.defaultProps = {};

Tab.propTypes = {
    /**
     * Tab content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * A tab can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Icon
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tab control label
     */
    label: PropTypes.any,
};

export default Tab;

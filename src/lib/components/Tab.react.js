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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tab content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * A tab can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Tab control label
     */
    label: PropTypes.string,

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
};

export default Tab;

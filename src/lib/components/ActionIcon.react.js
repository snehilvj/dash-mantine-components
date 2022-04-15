import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { ActionIcon as MantineActionIcon } from "@mantine/core";

/**
 * Icon ActionIcon to indicate secondary action. For more information, see: https://mantine.dev/core/action-icon/
 */
const ActionIcon = (props) => {
    const {
        children,
        n_clicks,
        setProps,
        loading,
        loading_state,
        class_name,
    } = props;

    const nProps = omit(
        ["setProps", "n_clicks", "children", "loading_state", "class_name"],
        props
    );

    const increment = () => {
        setProps({
            n_clicks: n_clicks + 1,
        });
    };

    return (
        <MantineActionIcon
            {...nProps}
            onClick={increment}
            loading={loading || (loading_state && loading_state.is_loading)}
            className={class_name}
        >
            {children}
        </MantineActionIcon>
    );
};

ActionIcon.displayName = "ActionIcon";

ActionIcon.defaultProps = {
    n_clicks: 0,
    loading: false,
};

ActionIcon.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * ActionIcon color from theme
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Props spread to Loader component
     */
    loaderProps: PropTypes.exact({
        /**
         * Loader color from theme
         */
        color: PropTypes.oneOf([
            "dark",
            "gray",
            "red",
            "pink",
            "grape",
            "violet",
            "indigo",
            "blue",
            "cyan",
            "teal",
            "green",
            "lime",
            "yellow",
            "orange",
        ]),

        /**
         * Defines width of loader
         */
        size: PropTypes.oneOfType([
            PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
            PropTypes.number,
        ]),

        /**
         * 	Loader appearance
         */
        variant: PropTypes.oneOf(["bars", "oval", "dots"]),
    }),

    /**
     * Indicate loading state
     */
    loading: PropTypes.bool,

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
     * An integer that represents the number of times that this element has been clicked on
     */
    n_clicks: PropTypes.number,

    /**
     * ActionIcon border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined ActionIcon size
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controls ActionIcon appearance
     */
    variant: PropTypes.oneOf([
        "transparent",
        "hover",
        "filled",
        "light",
        "gradient",
        "outline",
    ]),
};

export default ActionIcon;

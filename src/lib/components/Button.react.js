import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Button as MantineButton } from "@mantine/core";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
 */
const Button = (props) => {
    const {
        children,
        n_clicks,
        setProps,
        disabled,
        loading,
        loading_state,
        class_name,
    } = props;

    let nProps = omit(
        ["setProps", "n_clicks", "children", "loading_state", "class_name"],
        props
    );
    nProps = renderDashComponents(nProps, ["leftIcon", "rightIcon"]);

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineButton
            {...nProps}
            onClick={increment}
            loading={loading || (loading_state && loading_state.is_loading)}
            className={class_name}
        >
            {children}
        </MantineButton>
    );
};

Button.displayName = "Button";

Button.defaultProps = {
    n_clicks: 0,
    loading: false,
};

Button.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Button color from theme
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
     * Reduces vertical and horizontal spacing
     */
    compact: PropTypes.bool,

    /**
     * The component can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Sets button width to 100% of parent element
     */
    fullWidth: PropTypes.bool,

    /**
     * Controls gradient settings in gradient variant only
     */
    gradient: PropTypes.exact({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        deg: PropTypes.number,
    }),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Adds icon before button label
     */
    leftIcon: PropTypes.any,

    /**
     * Loader position relative to button label
     */
    loaderPosition: PropTypes.oneOf(["left", "right"]),

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
     * Button border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Adds icon after button label
     */
    rightIcon: PropTypes.any,

    /**
     * Predefined button size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Set text-transform to uppercase
     */
    uppercase: PropTypes.bool,

    /**
     * Controls button appearance
     */
    variant: PropTypes.oneOf([
        "link",
        "filled",
        "outline",
        "light",
        "gradient",
        "white",
        "subtle",
        "default",
    ]),
};

export default Button;

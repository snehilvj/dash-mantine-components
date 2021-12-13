import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Button as MantineButton } from "@mantine/core";

/**
 * Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
 */
const Button = (props) => {
    const { children, n_clicks, setProps, disabled } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineButton
            {...omit(["setProps", "n_clicks", "children"], props)}
            onClick={increment}
        >
            {children}
        </MantineButton>
    );
};

Button.displayName = "Button";

Button.defaultProps = {
    n_clicks: 0,
};

Button.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * An integer that represents the number of times that this element has been clicked on
     */
    n_clicks: PropTypes.number,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * The component can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

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
     * Loader position relative to button label
     */
    loaderPosition: PropTypes.oneOf(["left", "right"]),

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
     * Button border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined button size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

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
        "default",
    ]),

    /**
     * Set text-transform to uppercase
     */
    uppercase: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { ThemeIcon as MantineThemeIcon } from "@mantine/core";

/**
 * Render icon inside element with theme colors. For more information, see: https://mantine.dev/core/theme-icon/
 */
const ThemeIcon = (props) => {
    const { class_name, children } = props;

    return (
        <MantineThemeIcon
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineThemeIcon>
    );
};

ThemeIcon.displayName = "ThemeIcon";

ThemeIcon.defaultProps = {};

ThemeIcon.propTypes = {
    /**
     * Component children
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Icon color from theme
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
     * Controls gradient settings in gradient variant only
     */
    gradient: PropTypes.exact({
        from: PropTypes.string,
        to: PropTypes.string,
        deg: PropTypes.number,
    }),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Predefined border-radius from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Predefined width and height or number for width and height in px
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controls appearance
     */
    variant: PropTypes.oneOf(["filled", "light", "gradient"]),
};

export default ThemeIcon;

import React from "react";
import { Highlight as MantineHighlight } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Highlight given part of a string with mark tag. For more information, see: https://mantine.dev/core/highlight/
 */
const Highlight = (props) => {
    const { children, class_name } = props;

    return (
        <MantineHighlight
            className={class_name}
            {...omit(["children", "class_name", "setProps"], props)}
        >
            {children}
        </MantineHighlight>
    );
};

Highlight.displayName = "Highlight";

Highlight.defaultProps = {
    highlightColor: "yellow",
};

Highlight.propTypes = {
    /**
     * 	Sets text-align css property
     */
    align: PropTypes.oneOf(["left", "right", "center", "justify"]),

    /**
     * Full string part of which will be highlighted
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Text color from theme
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
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        deg: PropTypes.number,
    }),

    /**
     * Substring or an array of substrings to highlight in children
     */
    highlight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,

    /**
     * Color from theme that is used for highlighting
     */
    highlightColor: PropTypes.oneOf([
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
     * Styles applied to highlighted part
     */
    highlightStyles: PropTypes.object,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inherit font properties from parent element
     */
    inherit: PropTypes.bool,

    /**
     * Sets line-height to 1 for centering
     */
    inline: PropTypes.bool,

    /**
     * CSS -webkit-line-clamp property
     */
    lineClamp: PropTypes.number,

    /**
     * 	Predefined font-size from theme.fontSizes
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Sets text-transform css property
     */
    transform: PropTypes.oneOf([
        "none",
        "capitalize",
        "lowercase",
        "uppercase",
    ]),

    /**
     * Underline the text
     */
    underline: PropTypes.bool,

    /**
     * Link or text variant
     */
    variant: PropTypes.oneOf(["link", "text", "gradient"]),

    /**
     * Sets font-weight css property
     */
    weight: PropTypes.oneOfType([
        PropTypes.oneOf([
            "normal",
            "bold",
            "bolder",
            "lighter",
            "initial",
            "inherit",
        ]),
        PropTypes.number,
    ]),
};

export default Highlight;

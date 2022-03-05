import React from "react";
import { Mark as MantineMark } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Highlight part of the text. For more information, see: https://mantine.dev/core/mark/
 */
const Mark = (props) => {
    const { children, class_name } = props;

    return (
        <MantineMark
            {...omit(["children", "class_name", "setProps"], props)}
            className={class_name}
        >
            {children}
        </MantineMark>
    );
};

Mark.displayName = "Mark";

Mark.defaultProps = {
    color: "yellow",
};

Mark.propTypes = {
    /**
     * Full string part of which will be highlighted
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Background color from theme.colors
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
     * Inline style override
     */
    style: PropTypes.object,
};

export default Mark;

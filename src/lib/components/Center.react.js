import React from "react";
import PropTypes from "prop-types";
import { Center as MantineCenter } from "@mantine/core";
import { omit } from "ramda";

/**
 * Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/center/
 */
const Center = (props) => {
    const { class_name } = props;

    return (
        <MantineCenter
            {...omit(["children", "setProps", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineCenter>
    );
};

Center.displayName = "Center";

Center.defaultProps = {};

Center.propTypes = {
    /**
     * Content that should be centered vertically and horizontally
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Set to true to use inline-flex instead of flex
     */
    inline: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Center;

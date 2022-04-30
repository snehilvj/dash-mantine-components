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
     * Margin props
     */
    m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    my: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Center;

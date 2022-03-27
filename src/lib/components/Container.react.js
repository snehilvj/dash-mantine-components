import React from "react";
import PropTypes from "prop-types";
import { Container as MantineContainer } from "@mantine/core";
import { omit } from "ramda";

/**
 * Center content horizontally with predefined max-width. For more information, see: https://mantine.dev/core/container/
 */
const Container = (props) => {
    const { class_name } = props;

    return (
        <MantineContainer
            {...omit(["children", "setProps", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineContainer>
    );
};

Container.displayName = "Container";

Container.defaultProps = {};

Container.propTypes = {
    /**
     * Content that should be centered vertically and horizontally
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * If fluid is set to true, size prop is ignored and Container always take 100% of width
     */
    fluid: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Predefined container max-width or number for max-width in px
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
};

export default Container;

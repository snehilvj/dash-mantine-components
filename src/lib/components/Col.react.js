import React from "react";
import PropTypes from "prop-types";

/**
 * Utility component to pass to Grid. For more information, see: https://mantine.dev/core/grid/
 */
const Col = (props) => {
    return <div>{props.children}</div>;
};

Col.displayName = "Col";

Col.defaultProps = {};

Col.propTypes = {
    /**
     * Col content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Column left offset
     */
    offset: PropTypes.number,

    /**
     * Default col span
     */
    span: PropTypes.number,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Col span at (min-width: theme.breakpoints.xs)
     */
    xs: PropTypes.number,

    /**
     * Col span at (min-width: theme.breakpoints.sm)
     */
    sm: PropTypes.number,

    /**
     * Col span at (min-width: theme.breakpoints.md)
     */
    md: PropTypes.number,

    /**
     * Col span at (min-width: theme.breakpoints.lg)
     */
    lg: PropTypes.number,

    /**
     * Col span at (min-width: theme.breakpoints.xl)
     */
    xl: PropTypes.number,
};

export default Col;

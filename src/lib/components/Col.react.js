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
     * Total amount of columns, controlled by Grid component
     * */
    columns: PropTypes.number,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Space between columns from theme, or number to set value in px, controlled by Grid component
     */
    gutter: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * sets flex-grow to 1 if true, controlled by Grid component
     */
    grow: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Column left offset
     */
    offset: PropTypes.number,

    /**
     * Column left offset at (min-width: theme.breakpoints.xs)
     */
    offsetXs: PropTypes.number,

    /**
     * Column left offset at (min-width: theme.breakpoints.sm)
     */
    offsetSm: PropTypes.number,

    /**
     * Column left offset at (min-width: theme.breakpoints.md)
     */
    offsetMd: PropTypes.number,

    /**
     * Column left offset at (min-width: theme.breakpoints.lg)
     */
    offsetLg: PropTypes.number,

    /**
     * Column left offset at (min-width: theme.breakpoints.xl)
     */
    offsetXl: PropTypes.number,

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

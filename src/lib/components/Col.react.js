import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Grid } from "@mantine/core";

/**
 * Utility component to pass to Grid. For more information, see: https://mantine.dev/core/grid/
 */
const Col = (props) => {
    const { class_name, children } = props;

    return (
        <Grid.Col
            {...omit(["children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </Grid.Col>
    );
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
    class_name: PropTypes.string,

    /**
     * Space between columns from theme, or number to set value in px, controlled by Grid component
     */
    gutter: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

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

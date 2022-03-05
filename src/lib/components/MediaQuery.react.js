import React from "react";
import { Box, MediaQuery as MantineMediaQuery } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
 */
const MediaQuery = (props) => {
    const { children, class_name } = props;

    return (
        <MantineMediaQuery
            {...omit(["children", "class_name", "setProps"], props)}
            className={class_name}
        >
            <Box>{children}</Box>
        </MantineMediaQuery>
    );
};

MediaQuery.displayName = "MediaQuery";

MediaQuery.defaultProps = {};

MediaQuery.propTypes = {
    /**
     * Child that should be shown at given breakpoint, it must accept className prop
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
     * Styles applied to child when viewport is larger than given breakpoint
     */
    largerThan: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Any other media query
     */
    query: PropTypes.string,

    /**
     * 	Styles applied to child when viewport is smaller than given breakpoint
     */
    smallerThan: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * The style that will be set if condition is met
     */
    styles: PropTypes.object,
};

export default MediaQuery;

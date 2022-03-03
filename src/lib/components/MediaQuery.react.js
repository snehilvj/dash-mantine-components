import React from "react";
import { Box, MediaQuery as MantineMediaQuery } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
 */
const MediaQuery = (props) => {

    const { children, class_name, styles, boxSx } = props;


    console.log(props, children)
    console.log(children.props._dashprivate_layout.props)
    return (
        <MantineMediaQuery
            largerThan={800}
            {...omit(["children", "class_name",
                "styles", "boxSx", "contentBox"], props)}
            className={class_name}
            styles={styles}

        >
            <Box sx={boxSx}>
                {children}
            </Box>

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
        PropTypes.oneOf([
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ]),
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
        PropTypes.oneOf([
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ]),
        PropTypes.number,
    ]),

    // /**
    //  * Inline style override
    // */
    // style: PropTypes.object,

    /**
     * The style that will be set if condition is met
    */
    styles: PropTypes.object,

    /**
    * If the content will be shown in the Mantine Box component
    */
    contentBox: PropTypes.bool,

    boxSx: PropTypes.object
};

export default MediaQuery;

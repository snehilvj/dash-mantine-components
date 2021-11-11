import React from "react";
import PropTypes from "prop-types";
import { MediaQuery as MantineMediaQuery } from "@mantine/core";
import { omit } from "ramda";
import { NumberSizes } from "../propTypes";

/** Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/ */
const MediaQuery = (props) => {
    return (
        <MantineMediaQuery {...omit(["children", "setProps"], props)}>
            {props.children}
        </MantineMediaQuery>
    );
};

MediaQuery.displayName = "MediaQuery";

MediaQuery.defaultProps = {};

MediaQuery.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /**	Content that should be centered vertically and horizontally */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    largerThan: PropTypes.string,

    /**	Larger than given breakpoint or value in px, will be hidden on smaller viewport */
    inline: NumberSizes,

    /** Any other media query */
    query: PropTypes.string,

    /** Smaller than given breakpoint or value in px, will be hidden on larger viewport */
    smallerThan: NumberSizes,
};

export default MediaQuery;

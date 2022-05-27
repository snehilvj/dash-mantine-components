import React from "react";
import { Pagination as MantinePagination } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Display active page and navigate between multiple pages. For more information, see: https://mantine.dev/core/pagination/
 */
const Pagination = (props) => {
    const { setProps, class_name } = props;

    return (
        <MantinePagination
            {...omit(["setProps", "class_name"], props)}
            onChange={(page) => setProps({ page })}
            className={class_name}
        />
    );
};

Pagination.displayName = "Pagination";

Pagination.defaultProps = {};

Pagination.propTypes = {
    /**
     * 	Defines align-items css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Amount of elements visible on left/right edges
     */
    boundaries: PropTypes.number,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Active item color from theme, defaults to theme.primaryColor
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
     * Defines flex-direction property, row for horizontal, column for vertical
     */
    direction: PropTypes.oneOf(["row", "column"]),

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    grow: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * 	Defined flex-wrap property
     */
    noWrap: PropTypes.bool,

    /**
     * Controlled active page number
     */
    page: PropTypes.number,

    /**
     * Defines justify-content property
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Predefined item radius or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Siblings amount on left/right side of selected page
     */
    siblings: PropTypes.number,

    /**
     * Predefined item size or number to set width and height in px
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Spacing between items from theme or number to set value in px, defaults to theme.spacing.xs / 2
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style
     */
    style: PropTypes.object,

    /**
     * Total amount of pages
     */
    total: PropTypes.number.isRequired,

    /**
     * Show/hide prev/next controls
     */
    withControls: PropTypes.bool,

    /**
     * Show/hide jump to start/end controls
     */
    withEdges: PropTypes.bool,
};

export default Pagination;

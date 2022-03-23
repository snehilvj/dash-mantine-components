import React from "react";
import PropTypes from "prop-types";
import { Grid as MantineGrid } from "@mantine/core";
import { omit } from "ramda";

/**
 * Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
 */
const Grid = (props) => {
    const { children, class_name } = props;

    return (
        <MantineGrid
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineGrid>
    );
};

Grid.displayName = "Grid";

Grid.defaultProps = {};

Grid.propTypes = {
    /**
     * Set grid align-content property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Content <Col/> only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Amount of columns in each row
     */
    columns: PropTypes.number,

    /**
     * Should columns in the last row take 100% of grid width
     */
    grow: PropTypes.bool,

    /**
     * Spacing between columns predefined value from theme.spacing or number for gutter in px
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
     * Set grid justify-content property
     */
    justify: PropTypes.oneOf([
        "space-between",
        "space-around",
        "center",
        "flex-end",
        "flex-start",
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Grid;

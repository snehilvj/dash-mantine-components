import React from "react";
import PropTypes from "prop-types";
import { SimpleGrid as MantineSimpleGrid } from "@mantine/core";
import { omit } from "ramda";
import { NumberSizes } from "../propTypes";

/** Responsive grid where each item takes equal amount of space. For more information, see: https://mantine.dev/core/simple-grid/ */
const SimpleGrid = (props) => {
    return (
        <MantineSimpleGrid {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineSimpleGrid>
    );
};

SimpleGrid.displayName = "SimpleGrid";

SimpleGrid.defaultProps = {};

SimpleGrid.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** <Col /> components only */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	Breakpoints data to change items per row and spacing based on max-width */
    breakpoints: PropTypes.exact({
        maxWidth: PropTypes.number.isRequired,
        cols: PropTypes.number.isRequired,
        spacing: NumberSizes,
    }),

    /**	Default amount of columns, used when none of breakpoints can be applied */
    cols: PropTypes.number.isRequired,

    /** Default spacing between columns, used when none of breakpoints can be applied */
    spacing: NumberSizes,
};

export default SimpleGrid;

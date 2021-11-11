import React from "react";
import PropTypes from "prop-types";
import { Grid as MantineGrid, Col as MantineCol } from "@mantine/core";
import { omit } from "ramda";
import {
    NumberSizes,
    AlignContentProperty,
    JustifyContentProperty,
} from "../propTypes";

/** Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/ */
const Grid = (props) => {
    const { children } = props;

    return (
        <MantineGrid {...omit(["setProps", "children"], props)}>
            {children.map((child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <MantineCol {...omit(["children"], childProps)} key={index}>
                        {child}
                    </MantineCol>
                );
            })}
        </MantineGrid>
    );
};

Grid.displayName = "Grid";

Grid.defaultProps = {};

Grid.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /**	Content */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	Set grid align-content property */
    align: AlignContentProperty,

    /** Amount of columns in each row */
    columns: PropTypes.number,

    /** Should columns in the last row take 100% of grid width */
    grow: PropTypes.bool,

    /** Spacing between columns predefined value from theme.spacing or number for gutter in px */
    gutter: NumberSizes,

    /** Set grid justify-content property */
    justify: JustifyContentProperty,
};

export default Grid;

import React from "react";
import { Table as MantineTable } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props) => {
    const { class_name, children } = props;
    return (
        <MantineTable
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineTable>
    );
};

Table.displayName = "Table";

Table.defaultProps = {};

Table.propTypes = {
    /**
     * Table caption position
     */
    captionSide: PropTypes.oneOf(["bottom", "top"]),

    /**
     * Component children, specifically an HTML representation of the table
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Sets font size of all text inside table
     */
    fontSize: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * If true row will have hover color
     */
    highlightOnHover: PropTypes.bool,

    /**
     * Horizontal cells spacing from theme.spacing or number to set value in px
     */
    horizontalSpacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * If true every odd row of table will have gray background color
     */
    striped: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Vertical cells spacing from theme.spacing or number to set value in px
     */

    verticalSpacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
};

export default Table;

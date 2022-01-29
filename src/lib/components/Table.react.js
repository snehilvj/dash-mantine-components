import React from "react";
import { Table as MantineTable } from "@mantine/core";
import PropTypes from "prop-types";
import { pick } from "ramda";

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props) => {
    const { class_name, children } = props;
    return (
        <MantineTable
            {...pick(
                [
                    "striped",
                    "highlightOnHover",
                    "style",
                    "captionSide",
                ],
                props
            )}
            className={class_name}
        >
            {children}
        </MantineTable>
    );
};

Table.displayName = "Table";

Table.defaultProps = {
    captionSide: "bottom",
};

Table.propTypes = {
    /**
     * Table caption position
     */
    captionSide: PropTypes.oneOf(["bottom", "top"]),

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * If true row will have hover color
     */
    highlightOnHover: PropTypes.bool,

    /**
     * If true every odd row of table will have gray background color
     */
    striped: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Component children, specifically an HTML representation of the table
     */
    children: PropTypes.node,
};

export default Table;

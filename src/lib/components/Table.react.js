import React from "react";
import { Table as MantineTable } from "@mantine/core";
import PropTypes from "prop-types";
import { pick } from "ramda";

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props) => {
    const { rows, columns } = props;

    const ths = (
        <tr>
            {columns.map((col, index) => {
                return <th key={index}>{col}</th>;
            })}
        </tr>
    );

    const trs = rows.map((row, idx1) => (
        <tr key={idx1}>
            {row.map((ele, idx2) => {
                return <td key={idx2 + idx1}>{ele}</td>;
            })}
        </tr>
    ));

    return (
        <MantineTable
            {...pick(
                ["striped", "highlightOnHover", "style", "captionSide"],
                props
            )}
        >
            <caption>{props.caption}</caption>
            <thead>{ths}</thead>
            <tbody>{trs}</tbody>
        </MantineTable>
    );
};

Table.displayName = "Table";

Table.defaultProps = {
    captionSide: "bottom",
    rows: [],
    columns: [],
};

Table.propTypes = {
    /**
     * Table description
     */
    caption: PropTypes.string,

    /**
     * Table caption position
     */
    captionSide: PropTypes.oneOf(["bottom", "top"]),

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Table columns
     */
    columns: PropTypes.arrayOf(PropTypes.string),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * If true row will have hover color
     */
    highlightOnHover: PropTypes.bool,

    /**
     * Table rows
     */
    rows: PropTypes.arrayOf(PropTypes.array),

    /**
     * If true every odd row of table will have gray background color
     */
    striped: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Table;

import React from "react";
import { Table as MantineTable } from "@mantine/core";
import PropTypes from "prop-types";
import { pick } from "ramda";
import {resolveProp} from 'dash-extensions-js'

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props) => {
    const { rows, columns, caption, footers, children} = props;
    // Default render functions.
    let headerRenderer = (col) => <th>{col}</th>;
    let cellRenderer = (cell) => <td>{cell}</td>;
    let footerRenderer = (col) => <td>{col}</td>;
    // Detect custom render function.
    const context = null;
    headerRenderer = props.headerRenderer? resolveProp(props.headerRenderer, context) : headerRenderer;
    cellRenderer = props.cellRenderer? resolveProp(props.cellRenderer, context) : cellRenderer;
    footerRenderer = props.footerRenderer? resolveProp(props.footerRenderer, context) : footerRenderer;
    // Render table.
    const ths = <tr> {columns.map(headerRenderer)} </tr>;
    const trs = rows.map((row) => <tr> {row.map(cellRenderer)} </tr>);
    const tfs = <tr> {footers.map(footerRenderer)} </tr>;

    return (
        <MantineTable
            {...pick(
                ["striped", "highlightOnHover", "style", "captionSide"],
                props
            )}
        >
            <caption>{caption}</caption>
            <thead>{ths}</thead>
            <tbody>{trs}</tbody>
            <tfoot>{tfs}</tfoot>
            {children}
        </MantineTable>
    );
};

Table.displayName = "Table";

Table.defaultProps = {
    captionSide: "bottom",
    rows: [],
    columns: [],
    footers: [],
};

Table.propTypes = {

    // Custom Dash props for rendering children

    /**
     * Table columns
     */
    columns: PropTypes.arrayOf(PropTypes.string),

    /**
     * Table rows
     */
    rows: PropTypes.arrayOf(PropTypes.array),

    /**
     * Table footer
     */
    footers: PropTypes.arrayOf(PropTypes.string),

    /**
     * Function that determines how the header cells are rendered
     */
    headerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Function that determines how the row cells are rendered
     */
    cellRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Function that determines how the footer cells are rendered
     */
    footerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Table caption
     */
    caption: PropTypes.string,

    // Props passed to Mantine

    /**
     * Table caption position
     */
    captionSide: PropTypes.oneOf(["bottom", "top"]),

    /**
     * If true row will have hover color
     */
    highlightOnHover: PropTypes.bool,

    /**
     * If true every odd row of table will have gray background color
     */
    striped: PropTypes.bool,

    /**
     * Children, can be used to populate the table (instead of columns, rows, footer) for increased flexibility
     */
    children: PropTypes.node,

    // Dash props

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Table;

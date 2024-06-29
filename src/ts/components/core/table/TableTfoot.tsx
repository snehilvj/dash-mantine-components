import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableTfoot = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Tfoot {...others}>{children}</Table.Tfoot>;
};

TableTfoot.defaultProps = {};

export default TableTfoot;

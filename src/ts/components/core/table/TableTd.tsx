import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableTd = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Td {...others}>{children}</Table.Td>;
};

TableTd.defaultProps = {};

export default TableTd;

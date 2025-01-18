import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableTr = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Tr {...others}>{children}</Table.Tr>;
};

export default TableTr;

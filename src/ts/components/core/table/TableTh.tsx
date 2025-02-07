import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableTh = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Th {...others}>{children}</Table.Th>;
};

export default TableTh;

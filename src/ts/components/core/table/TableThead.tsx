import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableThead = (props: TableElementProps) => {
    const { setProps, tableProps, children, ...others } = props;

    return <Table.Thead {...others} {...tableProps}>{children}</Table.Thead>;
};

export default TableThead;

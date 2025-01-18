import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableThead = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Thead {...others}>{children}</Table.Thead>;
};

export default TableThead;

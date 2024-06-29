import { Table } from "@mantine/core";
import { TableElementProps } from "props/table";
import React from "react";

const TableCaption = (props: TableElementProps) => {
    const { setProps, children, ...others } = props;

    return <Table.Caption {...others}>{children}</Table.Caption>;
};

TableCaption.defaultProps = {};

export default TableCaption;

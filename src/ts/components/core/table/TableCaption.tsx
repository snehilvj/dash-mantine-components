import { Table } from '@mantine/core';
import { TableElementProps } from 'props/table';
import React from 'react';

const TableCaption = (props: TableElementProps) => {
    const { setProps, tableProps, children, ...others } = props;

    return (
        <Table.Caption {...others} {...tableProps}>
            {children}
        </Table.Caption>
    );
};

export default TableCaption;

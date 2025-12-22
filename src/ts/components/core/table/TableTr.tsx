import { Table } from '@mantine/core';
import { TableElementProps } from 'props/table';
import React from 'react';

const TableTr = (props: TableElementProps) => {
    const { setProps, tableProps, children, ...others } = props;

    return (
        <Table.Tr {...others} {...tableProps}>
            {children}
        </Table.Tr>
    );
};

export default TableTr;

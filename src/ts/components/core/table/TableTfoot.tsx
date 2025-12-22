import { Table } from '@mantine/core';
import { TableElementProps } from 'props/table';
import React from 'react';

const TableTfoot = (props: TableElementProps) => {
    const { setProps, tableProps, children, ...others } = props;

    return (
        <Table.Tfoot {...others} {...tableProps}>
            {children}
        </Table.Tfoot>
    );
};

export default TableTfoot;

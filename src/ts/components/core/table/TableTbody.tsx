import { Table } from '@mantine/core';
import { TableElementProps } from 'props/table';
import React from 'react';

const TableTbody = (props: TableElementProps) => {
    const { setProps, tableProps, children, ...others } = props;

    return (
        <Table.Tbody {...others} {...tableProps}>
            {children}
        </Table.Tbody>
    );
};

export default TableTbody;

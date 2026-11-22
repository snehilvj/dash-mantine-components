import { DataList } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** `DataListItemLabel` and `DataListItemValue` components */
    children?: React.ReactNode;
}

/** Groups a label and value within a DataList. */
const DataListItem = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <DataList.Item
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </DataList.Item>
    );
};

export default DataListItem;

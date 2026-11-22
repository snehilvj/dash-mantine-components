import { DataList } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Value content */
    children?: React.ReactNode;
}

/** Value rendered as a semantic dd element within a DataListItem. */
const DataListItemValue = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <DataList.ItemValue
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </DataList.ItemValue>
    );
};

export default DataListItemValue;

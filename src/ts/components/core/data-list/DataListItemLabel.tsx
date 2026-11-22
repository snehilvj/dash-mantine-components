import { DataList } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Label content */
    children?: React.ReactNode;
}

/** Label rendered as a semantic dt element within a DataListItem. */
const DataListItemLabel = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <DataList.ItemLabel
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </DataList.ItemLabel>
    );
};

export default DataListItemLabel;

import { DataList as MantineDataList, MantineSize } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** `DataListItem` components */
    children?: React.ReactNode;
    /** Controls `font-size` and `line-height`, `'sm'` by default */
    size?: MantineSize;
    /** Key of `theme.spacing` or any valid CSS value to set gap between items, `'sm'` by default */
    gap?: string | number;
    /** Arrangement of label and value within each item, `'horizontal'` by default */
    orientation?: 'horizontal' | 'vertical';
    /** Adds a border between items, `false` by default */
    withDivider?: boolean;
    /** Minimum width of the label (`dt`) element, any valid CSS value, `120px` by default */
    labelWidth?: React.CSSProperties['minWidth'];
}

/** Description list with semantic label-value pairs. */
const DataList = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineDataList
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineDataList>
    );
};

export default DataList;

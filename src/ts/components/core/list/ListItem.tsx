import { List } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Icon to replace item bullet */
    icon?: React.ReactNode;
    /** Content */
    children?: React.ReactNode;
}

/** ListItem */
const ListItem = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <List.Item
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </List.Item>
    );
};

export default ListItem;

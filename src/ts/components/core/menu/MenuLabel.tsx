import { Menu } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** MenuLabel */
const MenuLabel = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Menu.Label
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </Menu.Label>
    );
};

MenuLabel.dashChildrenUpdate = true;

export default MenuLabel;

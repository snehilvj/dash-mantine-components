import { AffixBaseProps, Affix as MantineAffix } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props
    extends BoxProps,
        Omit<AffixBaseProps, 'portalProps'>,
        StylesApiProps,
        DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Affix */
const Affix = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineAffix
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineAffix>
    );
};

export default Affix;

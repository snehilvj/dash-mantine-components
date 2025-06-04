import { Loader as MantineLoader } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { LoaderProps } from 'props/loader';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends LoaderProps, DashBaseProps {}

/** Loader */
const Loader = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineLoader
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default Loader;

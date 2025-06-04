import { Sparkline as MantineSparkline } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../Sparkline';

/** Sparkline */
const Sparkline = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineSparkline
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default Sparkline;

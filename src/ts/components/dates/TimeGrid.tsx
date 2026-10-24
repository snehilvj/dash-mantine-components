import { TimeGrid as MantineTimeGrid, getTimeRange } from '@mantine/dates';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { TimeGridProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { setPersistence } from '../../utils/dash3';


interface Props
    extends
        DashBaseProps,
        PersistenceProps,
        TimeGridProps,
        BoxProps,
        StylesApiProps {
    /** Value for controlled component */
    value?: string;
}

/** TimeGrid captures time value from the user with a predefined set of options */
const TimeGrid = ({
    setProps,
    value = '',
    timeRangeData,
    data,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

    return (
        <MantineTimeGrid
            onChange={(value) => setProps({ value })}
            value={value}
            data={timeRangeData ? getTimeRange(timeRangeData) : data}
            {...others}
        />
    );
};

setPersistence(TimeGrid);

export default TimeGrid;

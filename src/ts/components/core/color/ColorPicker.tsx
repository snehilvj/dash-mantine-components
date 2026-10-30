import { ColorPicker as MantineColorPicker } from '@mantine/core';
import { ColorPickerProps } from 'props/color';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import React from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props extends ColorPickerProps, PersistenceProps, DashBaseProps {}

/** ColorPicker */
const ColorPicker = (props: Props) => {
    const {
        setProps,
        loading_state,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;
    return (
        <MantineColorPicker
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            value={value}
            onChange={(value) => setProps({ value })}
            {...others}
        />
    );
};

setPersistence(ColorPicker);

export default ColorPicker;

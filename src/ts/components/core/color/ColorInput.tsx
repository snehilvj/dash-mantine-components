import { ColorInput as MantineColorInput } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { ColorInputProps } from 'props/color';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import React, { useState } from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props extends ColorInputProps, PersistenceProps, DashBaseProps {}

/** ColorInput */
const ColorInput = (props: Props) => {
    const {
        setProps,
        loading_state,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [color, setColor] = useState(value);

    useDidUpdate(() => {
        setProps({ value: color });
    }, [color]);

    useDidUpdate(() => {
        setColor(value);
    }, [value]);

    return (
        <MantineColorInput
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            value={color}
            onChange={setColor}
            {...others}
        />
    );
};

setPersistence(ColorInput);

export default ColorInput;

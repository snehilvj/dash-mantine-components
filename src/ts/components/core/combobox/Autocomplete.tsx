import {
    ComboboxStringData,
    Autocomplete as MantineAutocomplete,
} from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { ComboboxLikeProps } from 'props/combobox';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { __BaseInputProps } from 'props/input';
import { ScrollAreaProps } from 'props/scrollarea';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from "../../../utils/prop-functions"

interface Props
    extends BoxProps,
        __BaseInputProps,
        Omit<ComboboxLikeProps, 'data'>,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Data displayed in the dropdown */
    data?: ComboboxStringData;
    /** Controlled component value */
    value?: string;
    /** Props passed down to the underlying `ScrollArea` component in the dropdown */
    scrollAreaProps?: ScrollAreaProps;
}

/** Autocomplete */
const Autocomplete = ({
    setProps,
    loading_state,
    data = [],
    value,
    ...others
}: Props) => {
    const [autocomplete, setAutocomplete] = useState(value);
    const [options, setOptions] = useState(data);

    useDidUpdate(() => {
        setOptions(data);
    }, [data]);

    useDidUpdate(() => {
        setProps({ data: options });
    }, [options]);

    useDidUpdate(() => {
        setProps({ value: autocomplete });
    }, [autocomplete]);

    useDidUpdate(() => {
        setAutocomplete(value);
    }, [value]);

    return (
        <MantineAutocomplete
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...parseFuncProps('Autocomplete', others)}
            wrapperProps={{ autoComplete: 'off' }}
            data={options}
            onChange={setAutocomplete}
            value={autocomplete}
        />
    );
};

setPersistence(Autocomplete);

export default Autocomplete;

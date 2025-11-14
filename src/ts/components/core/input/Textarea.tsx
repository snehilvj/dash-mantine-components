import { Textarea as MantineTextarea } from '@mantine/core';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import { DashBaseProps, PersistenceProps, DebounceProps } from 'props/dash';
import { TextareaProps } from 'props/text';
import React, { useEffect, useState } from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props
    extends TextareaProps,
        DashBaseProps,
        DebounceProps,
        PersistenceProps {
    /** Content */
    value?: string;
    /** Spell check property */
    spellCheck?: boolean;
    /** (string; default "off") Enables the browser to attempt autocompletion based on user history.  For more information, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete  */
    autoComplete?: string;
}

/** Textarea */
const Textarea = ({
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    loading_state,
    value = '',
    n_submit = 0,
    n_blur = 0,
    debounce = false,
    autoComplete = 'off',
    inputProps,
    ...others
}: Props) => {
    const [val, setVal] = useState(value);
    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(val, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    useDidUpdate(() => {
        if (value !== debounced) {
            setVal(value);
        }
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: val }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: val }),
        });
    };

    return (
        <MantineTextarea
            {...inputProps}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            autoComplete={autoComplete}
            {...others}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        />
    );
};

setPersistence(Textarea);

export default Textarea;

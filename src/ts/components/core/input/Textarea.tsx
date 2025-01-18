import { Textarea as MantineTextarea } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { TextareaProps } from "props/text";
import React, { useEffect, useState } from "react";

interface Props extends TextareaProps, DashBaseProps, DebounceProps, PersistenceProps {
    /** Content */
    value?: string;
    /** Spell check property */
    spellCheck?: boolean;
    /** (string; default "off") Enables the browser to attempt autocompletion based on user history.  For more information, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete  */
    autoComplete?: string;
}

/** Textarea */
const Textarea = (props: Props) => {
    const {
        setProps,
        value = '',
        debounce = false,
        n_blur = 0,
        n_submit = 0,
        persistence,
        persisted_props = ['value'],
        persistence_type = 'locaL',
        autoComplete = "off",
        ...others
    } = props;

    const [val, setVal] = useState(value);
    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(val, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: val }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: val })
        });
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineTextarea
            data-dash-is-loading={loading || undefined}
            {...others}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoComplete={autoComplete}
        />
    );
};

export default Textarea;

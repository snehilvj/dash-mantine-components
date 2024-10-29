import { Textarea as MantineTextarea } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { TextareaProps } from "props/text";
import React, { useEffect, useState } from "react";

interface Props extends TextareaProps, DashBaseProps, PersistenceProps {
    /** Content */
    value?: string;
    /** Spell check property */
    spellCheck?: boolean;
     /** An integer that represents the number of times that this element has lost focus */
    n_blur?: number;
    /** (boolean | number; default False): If True, changes to input will be sent back to the Dash server only when losing focus. If it's False, it will send the value back on every change. If a number, it will not send anything back to the Dash server until the user has stopped typing for that number of milliseconds. */
    debounce?: boolean | number;
    /** (string; default "off") Enables the browser to attempt autocompletion, based on user history.  */
    autoComplete?: string;
}

/** Textarea */
const Textarea = (props: Props) => {
    const {
        setProps,
        loading_state,
        value,
        debounce,
        n_blur,
        persistence,
        persisted_props,
        persistence_type,
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

    const handleBlur = () => {
        if (debounce === true) {
            setProps({ n_blur: n_blur + 1, value: val });
        }
    };

    return (
        <MantineTextarea
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            onBlur={handleBlur}
        />
    );
};

Textarea.defaultProps = {
    debounce: false,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_blur: 0,
    autoComplete: "off"
};

export default Textarea;

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
    /** Debounce time in ms */
    debounce?: number;
}

/** Textarea */
const Textarea = (props: Props) => {
    const {
        setProps,
        loading_state,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [val, setVal] = useState(value);
    const [debounced] = useDebouncedValue(val, debounce);

    useEffect(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    return (
        <MantineTextarea
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
            value={val}
            wrapperProps={{ autoComplete: "off" }}
            onChange={(ev) => setVal(ev.currentTarget.value)}
        />
    );
};

Textarea.defaultProps = {
    value: "",
    debounce: 0,
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Textarea;

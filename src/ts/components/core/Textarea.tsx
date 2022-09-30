import React from "react";
import { DefaultProps, InputComponentProps } from "../../props";
import { Textarea as MantineTextarea } from "@mantine/core";

type Props = {
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Value for controlled input */
    value?: string;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture string input from user. For more information, see: https://mantine.dev/core/text-input/
 */
const Textarea = (props: Props) => {
    const { setProps, ...other } = props;

    const updateProps = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineTextarea
            {...other}
            onChange={(ev) => updateProps(ev.currentTarget.value)}
        />
    );
};

Textarea.defaultProps = { value: "" };

export default Textarea;

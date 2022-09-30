import React from "react";
import { DefaultProps, InputComponentProps } from "../../props";
import { TextInput as MantineTextInput } from "@mantine/core";

type Props = {
    /** Input element type */
    type?: "number" | "search" | "text" | "tel" | "url" | "email" | "password";
    /** Value for controlled input */
    value?: string;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture string input from user. For more information, see: https://mantine.dev/core/text-input/
 */
const TextInput = (props: Props) => {
    const { setProps, ...other } = props;

    const updateProps = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineTextInput
            {...other}
            onChange={(ev) => updateProps(ev.currentTarget.value)}
        />
    );
};

TextInput.defaultProps = { value: "" };

export default TextInput;

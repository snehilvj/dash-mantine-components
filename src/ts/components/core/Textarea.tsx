import React from "react";
import {
    DashComponentProps,
    InputWrapperBaseProps,
    InputSharedProps,
} from "../../props";
import { Textarea as MantineTextarea } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Input size */
    size?: MantineSize;
    /** Placeholder */
    placeholder?: string;
    /** Value for controlled input */
    value?: string;
} & InputSharedProps &
    InputWrapperBaseProps &
    DashComponentProps;

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

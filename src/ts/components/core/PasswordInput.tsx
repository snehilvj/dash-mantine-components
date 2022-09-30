import React from "react";
import { DefaultProps, InputComponentProps } from "../../props";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

type Props = {
    /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
    toggleTabIndex?: -1 | 0;
    /** Determines whether input content should be visible (controlled) */
    visible?: boolean;
    /** Value for controlled input */
    value?: string;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture password from user with option to toggle visibility. For more information, see: https://mantine.dev/core/password-input/
 */
const PasswordInput = (props: Props) => {
    const { setProps, ...other } = props;

    const updateProps = (value: string) => {
        setProps({ value });
    };

    return (
        <MantinePasswordInput
            {...other}
            onChange={(ev) => updateProps(ev.currentTarget.value)}
        />
    );
};

PasswordInput.defaultProps = { value: "" };

export default PasswordInput;

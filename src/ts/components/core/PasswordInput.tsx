import React from "react";
import {
    DashComponentProps,
    InputWrapperBaseProps,
    InputSharedProps,
} from "../../props";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

type Props = {
    /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
    toggleTabIndex?: -1 | 0;
    /** aria-label for visibility toggle button */
    visibilityToggleLabel?: string;
    /** Determines whether input content should be visible (controlled) */
    visible?: boolean;
    /** Determines whether input content should be visible (uncontrolled) */
    defaultVisible?: boolean;
    /** Value for controlled input */
    value?: string;
    /** Placeholder */
    placeholder?: string;
} & InputSharedProps &
    InputWrapperBaseProps &
    DashComponentProps;

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

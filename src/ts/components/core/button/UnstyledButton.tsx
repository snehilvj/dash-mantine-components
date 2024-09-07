import {
    UnstyledButton as MantineUnstyledButton,
    UnstyledButtonFactory,
} from "@mantine/core";
import { BoxComponentProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

export interface Props
    extends Omit<BoxComponentProps, "vars" | "variant">,
        DashBaseProps,
        StylesAPIProps<UnstyledButtonFactory["stylesNames"]> {
    /** Button content */
    children?: React.ReactNode;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Indicates disabled state */
    disabled?: boolean;
}

/** UnstyledButton */
const UnstyledButton = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...others } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineUnstyledButton
            onClick={increment}
            disabled={disabled}
            {...others}
        >
            {children}
        </MantineUnstyledButton>
    );
};

UnstyledButton.defaultProps = {
    n_clicks: 0,
};

export default UnstyledButton;

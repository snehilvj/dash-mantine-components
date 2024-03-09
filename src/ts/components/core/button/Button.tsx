import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from "props/button";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends ButtonProps, DashBaseProps {
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
}

/** Button */
const Button = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...others } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineButton onClick={increment} disabled={disabled} {...others}>
            {children}
        </MantineButton>
    );
};

Button.defaultProps = {
    n_clicks: 0,
};

export default Button;

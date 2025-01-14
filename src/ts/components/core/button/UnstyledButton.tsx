import { UnstyledButton as MantineUnstyledButton } from "@mantine/core";
import { BoxComponentProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

export interface Props
    extends Omit<BoxComponentProps, "vars" | "variant">,
        DashBaseProps,
        StylesApiProps {
    /** Button content */
    children?: React.ReactNode;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Indicates disabled state */
    disabled?: boolean;
}

/** UnstyledButton */
const UnstyledButton = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...others } =
        props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineUnstyledButton
            data-dash-is-loading={loading || undefined}
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

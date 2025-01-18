import { ActionIcon as MantineActionIcon } from "@mantine/core";
import { ActionIconProps } from "props/actionicon";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends ActionIconProps, DashBaseProps {
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
}

/** ActionIcon */
const ActionIcon = (props: Props) => {
    const { children, setProps, disabled, n_clicks = 0, ...others } =
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
        <MantineActionIcon
            data-dash-is-loading={loading || undefined}
            disabled={disabled}
            onClick={increment}
            {...others}
        >
            {children}
        </MantineActionIcon>
    );
};

export default ActionIcon;

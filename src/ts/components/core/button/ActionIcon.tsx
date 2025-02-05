import { ActionIcon as MantineActionIcon } from "@mantine/core";
import { ActionIconProps } from "props/actionicon";
import { DashBaseProps } from "props/dash";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends ActionIconProps, DashBaseProps {
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
}

/** ActionIcon */
const ActionIcon = (props: Props) => {
    const { children, setProps, loading_state, disabled, n_clicks, ...others } =
        props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineActionIcon
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            disabled={disabled}
            onClick={increment}
            {...others}
        >
            {children}
        </MantineActionIcon>
    );
};

ActionIcon.defaultProps = {
    n_clicks: 0,
};

export default ActionIcon;

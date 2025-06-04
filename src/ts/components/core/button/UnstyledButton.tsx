import { UnstyledButton as MantineUnstyledButton } from '@mantine/core';
import { BoxComponentProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

export interface Props
    extends Omit<BoxComponentProps, 'vars' | 'variant'>,
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
const UnstyledButton = ({
    children,
    setProps,
    loading_state,
    disabled,
    n_clicks = 0,
    ...others
}: Props) => {
    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineUnstyledButton
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onClick={increment}
            disabled={disabled}
            {...others}
        >
            {children}
        </MantineUnstyledButton>
    );
};

export default UnstyledButton;

import {
    CheckboxCard as MantineCheckboxCard,
    MantineRadius,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** State of check box */
    checked?: boolean;
    /** Uncontrolled component default value */
    defaultChecked?: boolean;
    /** Determines whether the card should have border, `true` by default */
    withBorder?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` `theme.defaultRadius` by default */
    radius?: MantineRadius | number;
    /** To be used with checkbox group */
    value?: string;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Determines whether CheckboxCard is disabled and non-selectable */
    disabled?: boolean;
    /** CheckboxCard content */
    children?: React.ReactNode;
}

/** CheckboxCard */
const CheckboxCard = ({
    children,
    setProps,
    loading_state,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {
    return (
        <MantineCheckboxCard
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={(state: boolean) => setProps({ checked: state })}
            {...others}
        >
            {children}
        </MantineCheckboxCard>
    );
};

setPersistence(CheckboxCard, ['checked']);

export default CheckboxCard;

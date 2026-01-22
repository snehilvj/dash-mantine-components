import { RadioCard as MantineRadioCard, MantineRadius } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';
import RadioGroupContext from './RadioGroupContext';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Checked state */
    checked?: boolean;
    /** Determines whether the card should have border, `true` by default */
    withBorder?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius | number;
    /** To be used with Radio group */
    value?: string;
    /** Value used to associate all related radio cards, required for accessibility if used outside of `Radio.Group` */
    name?: string;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Determines whether RadioCard is disabled and non-selectable */
    disabled?: boolean;
    /** RadioCard content */
    children?: React.ReactNode;
}

/** RadioCard */
const RadioCard = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        value,
        ...others
    } = props;

    const { radioOnClick } = React.useContext(RadioGroupContext) || {};

    return (
        <MantineRadioCard
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onClick={radioOnClick ? () => radioOnClick(value) : null}
            value={value}
            {...others}
        >
            {children}
        </MantineRadioCard>
    );
};

setPersistence(RadioCard, ['checked']);

export default RadioCard;

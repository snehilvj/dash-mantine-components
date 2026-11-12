import { Card } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import CardContext from './CardContext';

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether the section should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
    inheritPadding?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** CardSection */
const CardSection = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    const orientation = React.useContext(CardContext);
    return (
        <Card.Section
            data-orientation={orientation}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </Card.Section>
    );
};

export default CardSection;

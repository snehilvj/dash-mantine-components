import { DirectionProvider as MantineDirectionProvider } from '@mantine/core';
import React, { useEffect } from 'react';
import { PersistenceProps } from 'props/dash';
import { setPersistence } from '../../utils/dash3';

interface Props extends PersistenceProps {
    /** Your application */
    children: React.ReactNode;
    /** Direction `ltr` by default */
    direction?: 'rtl' | 'ltr';
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
}

/* DirectionProvider set direction for all components inside it */
const DirectionProvider = (props: Props) => {
    const {
        children,
        direction = 'ltr',
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    useEffect(() => {
        if (direction && typeof document !== 'undefined') {
            document.documentElement.dir = direction;
        }
    }, [direction]);

    return (
        <MantineDirectionProvider {...others}>
            {children}
        </MantineDirectionProvider>
    );
};

setPersistence(DirectionProvider, ['direction']);

export default DirectionProvider;

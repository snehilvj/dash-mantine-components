import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
} from '@mantine/core';
import React from 'react';

import '@mantine/core/styles.css';

// Optional stylesheets must be imported after the core styles.
// If these components are changed to load asynchronously (like charts), their styles can be imported within the component itself.
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';

interface Props extends MantineProviderProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
}

/* MantineProvider */
const MantineProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineMantineProvider {...others}>{children}</MantineMantineProvider>
    );
};

export default MantineProvider;

import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
    useMantineColorScheme,
    ColorSchemeScript,
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
    dashSetColorScheme?: 'light' | 'dark' | 'auto';
}

const ThemeSetter = (props: { dashSetColorScheme?: 'light' | 'dark' | 'auto' }) => {
    const { dashSetColorScheme } = props;
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();

    React.useEffect(() => {
        if (dashSetColorScheme) {
            if (dashSetColorScheme === 'light' || dashSetColorScheme === 'dark' || dashSetColorScheme === 'auto') {
                setColorScheme(dashSetColorScheme);
            } else {
                clearColorScheme();
            }
        };
    }, [dashSetColorScheme, setColorScheme, clearColorScheme]);

    return null;
};

/* MantineProvider */
const MantineProvider = (props: Props) => {
    const { children, dashSetColorScheme, defaultColorScheme, ...others } = props;

    return (
        <>
            <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
            <MantineMantineProvider defaultColorScheme={defaultColorScheme} {...others}>
                <ThemeSetter dashSetColorScheme={dashSetColorScheme} />
                {children}
            </MantineMantineProvider>
        </>
    );
};

export default MantineProvider;

import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
    useMantineColorScheme,
    ColorSchemeScript,
} from '@mantine/core';
import React from 'react';
import { DashBaseProps } from 'props/dash';

import '@mantine/core/styles.css';

// Optional stylesheets must be imported after the core styles.
// If these components are changed to load asynchronously (like charts), their styles can be imported within the component itself.
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';

interface Props extends MantineProviderProps, DashBaseProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    colorScheme?: 'light' | 'dark' | 'auto' | null;
}

const ThemeSetter = (props: { setProps: any; _colorScheme?: 'light' | 'dark' | 'auto'; }) => {
    const { _colorScheme, setProps } = props;
    const { setColorScheme, clearColorScheme, colorScheme } = useMantineColorScheme();
    const prevColorSchemeRef = React.useRef(_colorScheme);

    React.useEffect(() => {
        if (_colorScheme !== undefined && _colorScheme !== prevColorSchemeRef.current) {
            if (_colorScheme === 'light' || _colorScheme === 'dark' || _colorScheme === 'auto') {
                setColorScheme(_colorScheme);
            } else {
                clearColorScheme();
            }
            prevColorSchemeRef.current = _colorScheme;
        }
    }, [_colorScheme, setColorScheme, clearColorScheme, colorScheme]);

    React.useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === 'mantine-color-scheme-value') {
                const newScheme = event.newValue as 'light' | 'dark' | 'auto' | null;
                setProps({colorScheme: newScheme});
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [colorScheme, setColorScheme]);


    return null;
};


const MantineProvider = (props: Props) => {
    const { children, colorScheme, defaultColorScheme, setProps, ...others } = props;

    return (
        <>
            <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
            <MantineMantineProvider defaultColorScheme={defaultColorScheme} {...others}>
                <ThemeSetter _colorScheme={colorScheme} setProps={setProps} />
                {children}
            </MantineMantineProvider>
        </>
    );
};


export default MantineProvider;

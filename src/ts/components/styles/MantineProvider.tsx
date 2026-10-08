import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
    v8CssVariablesResolver,
} from '@mantine/core';
import React from 'react';
import * as MantineCore from '@mantine/core';
import * as MantineHooks from '@mantine/hooks';
import { parseFuncProps } from '../../utils/prop-functions';

(window as any).MantineCore = MantineCore;
(window as any).MantineHooks = MantineHooks;

import '@mantine/core/styles.css';

// Optional stylesheets must be imported after the core styles.
// If these components are changed to load asynchronously (like charts),
// their styles can be imported within the component itself.
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';

const ensureReact19 = () => {
    const major = Number(React.version.split('.')[0]);

    if (major < 19) {
        throw new Error(
            `Dash Mantine Components v3 requires React 19. Detected React ${React.version}. ` +
                'Upgrade to Dash>= 4.5 to use React 19.2.4. See the DMC migration guide for more information.'
        );
    }
};

interface Props extends MantineProviderProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;

    /**
     * getStyleNonce is a function to generate [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce)
     * attribute added to dynamic generated `<style />` tags.
     */
    getStyleNonce?: any;

    /**
     * Whether to use the Mantine v8 CSS variables resolver for compatibility
     * with Mantine v8.
     */
    useV8CssVariablesResolver?: boolean;
}

/* MantineProvider */
const MantineProvider = (props: Props) => {
    const { children, useV8CssVariablesResolver, ...others } = props;

    ensureReact19();

    return (
        <MantineMantineProvider
            cssVariablesResolver={
                useV8CssVariablesResolver
                    ? v8CssVariablesResolver
                    : undefined
            }
            {...parseFuncProps('MantineProvider', others)}
        >
            {children}
        </MantineMantineProvider>
    );
};

export default MantineProvider;

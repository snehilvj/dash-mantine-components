import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyCodeHighlight = React.lazy(
    () =>
        import(
            /* webpackChunkName: "CodeHighlight" */ './fragments/CodeHighlight'
        )
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language: string;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Determines whether code should be highlighted only after component is mounted to the dom (disables code highlight on server), `false` by default */
    highlightOnClient?: boolean;
}

/** CodeHighlight */
const CodeHighlight = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyCodeHighlight {...props} />
        </Suspense>
    );
};

export default CodeHighlight;

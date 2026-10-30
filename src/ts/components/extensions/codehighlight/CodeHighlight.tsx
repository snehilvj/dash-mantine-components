import { MantineRadius } from '@mantine/core';
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
    language?: string;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Determines whether code should be highlighted only after component is mounted to the dom (disables code highlight on server), `false` by default */
    highlightOnClient?: boolean;
    /** Uncontrolled expanded default state */
    defaultExpanded?: boolean;
    /** Max height of collapsed state default 180px */
    maxCollapsedHeight?: number | string;
    /** Determines whether the expand/collapse button should be displayed default false */
    withExpandButton?: boolean;
    /** Label for expand button default 'Expand code' */
    expandCodeLabel?: string;
    /** Label for collapse button default 'Collapse code' */
    collapseCodeLabel?: string;
    /** Key of `theme.radius` or any valid CSS value to set border-radius default 0 */
    radius?:  MantineRadius;
    /** Adds border to the root element default false */
    withBorder?: boolean;
    /** Determines whether line numbers should be displayed @default false */
    withLineNumbers?: boolean;
    /** If set, indentation of the first line of the code is preserved. By default, it is removed
    *  along with the rest of the leading and trailing whitespace. @default false */
    withFirstLineIndentation?: boolean;
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

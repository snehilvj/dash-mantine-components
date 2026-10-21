import { MantineRadius } from '@mantine/core';
import { CodeHighlightTabsCode } from '@mantine/code-highlight';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyCodeHighlightTabs = React.lazy(
    () =>
        import(
            /* webpackChunkName: "CodeHighlightTabs" */ './fragments/CodeHighlightTabs'
        )
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight with meta data (file name and icon) */
    code: CodeHighlightTabsCode | CodeHighlightTabsCode[];
    /** Index of controlled active tab state */
    activeTab?: number;
    /** Determines whether header with file names and copy button should be rendered, `true` by default */
    withHeader?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** `max-height` of code in collapsed state */
    maxCollapsedHeight?: React.CSSProperties['maxHeight'];
    /** Uncontrolled expanded state initial value */
    defaultExpanded?: boolean;
    /** Expand button label and tooltip, `'Expand code'` by default */
    expandCodeLabel?: string;
    /** Collapse button label and tooltip, `'Collapse code'` by default */
    collapseCodeLabel?: string;
    /** Determines whether to show the expand button, `false` by default */
    withExpandButton?: boolean;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius default 0 */
    radius?:  MantineRadius;
    /** Adds border to the root element default false */
    withBorder?: boolean;
    /** Determines whether line numbers should be displayed default false */
    withLineNumbers?: boolean;
    /** If set, indentation of the first line of the code is preserved. By default, it is removed
    *  along with the rest of the leading and trailing whitespace. default false */
    withFirstLineIndentation?: boolean;
}

/** CodeHighlightTabs */
const CodeHighlightTabs = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyCodeHighlightTabs {...props} />
        </Suspense>
    );
};

export default CodeHighlightTabs;

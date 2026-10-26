import { SplitterPaneSize } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Pane content. */
    children?: React.ReactNode;
    /** Initial size. Numbers and percentage strings are flexible sizes; px and rem strings are fixed sizes. */
    defaultSize: SplitterPaneSize;
    /** Minimum pane size, 0 by default. */
    min?: SplitterPaneSize;
    /** Maximum pane size, unlimited by default. */
    max?: SplitterPaneSize;
    /** Determines whether the pane can be collapsed, false by default. */
    collapsible?: boolean;
    /** Size below which the pane snaps to collapsed, defaults to min. */
    collapseThreshold?: SplitterPaneSize;
}

/** Resizable pane within a Splitter. */
const SplitterPane = ({ children }: Props) => <>{children}</>;

export default SplitterPane;

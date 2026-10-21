import { MantineColor, Splitter as MantineSplitter } from '@mantine/core';
import {
    SplitterPaneSize,
    SplitterStep,
    UseSplitterReturnValue,
} from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useRef } from 'react';
import { getChildLayout, getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /**
     * SplitterPane components must be direct children of Splitter. Put containers,
     * content, or nested splitters inside a pane. SplitterPane is not a standalone
     * layout component: its parent creates the underlying Mantine pane and applies
     * its sizing and styling props.
     */
    children?: React.ReactNode;
    /**
     * Controlled pane sizes. Updates continuously during resizing, not just on
     * release. Hence, server-side callbacks should preferably not use this as a
     * trigger.
     */
    sizes?: SplitterPaneSize[];
    /** Indices of collapsed panes. Set this prop to collapse or expand collapsible panes, restoring their previous sizes. Updated when panes are collapsed or expanded. */
    collapsed?: number[];
    /** Layout direction, 'horizontal' by default. */
    orientation?: 'horizontal' | 'vertical';
    /** How space is borrowed from non-adjacent panes at their size limits. */
    redistribute?: 'nearest' | 'equal';
    /** Restore adjacent panes to their default ratio when a handle is double-clicked. */
    resetOnDoubleClick?: boolean;
    /** Keyboard arrow step. Numbers and percentages are relative; px and rem are fixed. */
    step?: SplitterStep;
    /** Keyboard step when Shift is held. */
    shiftStep?: SplitterStep;
    /** Key of theme.colors or any valid CSS color for the separator line. */
    handleColor?: MantineColor;
    /** Custom icon displayed in the handle thumb. */
    handleIcon?: React.ReactNode;
    /** Separator line thickness. */
    lineSize?: number | string;
    /** Determines whether the handle thumb is displayed, true by default. */
    withHandle?: boolean;
}

/** Resizable split pane layout. */
const Splitter = ({
    children,
    sizes,
    collapsed,
    setProps,
    loading_state,
    ...others
}: Props) => {
    const splitterRef = useRef<UseSplitterReturnValue>(null);

    useEffect(() => {
        const splitter = splitterRef.current;
        if (!splitter || collapsed === undefined) {
            return;
        }

        splitter.collapsed.forEach((isCollapsed, index) => {
            const shouldCollapse = collapsed.includes(index);
            if (shouldCollapse !== isCollapsed) {
                if (shouldCollapse) {
                    splitter.collapse(index);
                } else {
                    splitter.expand(index);
                }
            }
        });
    }, [collapsed]);

    return (
        <MantineSplitter
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            splitterRef={splitterRef}
            sizes={sizes}
            onSizeChange={(nextSizes) =>
                setProps({
                    sizes: nextSizes,
                    collapsed: nextSizes.reduce<number[]>(
                        (indices, size, index) => {
                            if (parseFloat(String(size)) === 0) {
                                indices.push(index);
                            }
                            return indices;
                        },
                        []
                    ),
                })
            }
            {...others}
        >
            {React.Children.map(children, (child, index) => {
                const { props: childProps } = getChildLayout(child);
                const {
                    children: paneChildren,
                    setProps,
                    loading_state,
                    ...paneProps
                } = childProps;

                return (
                    <MantineSplitter.Pane key={index} {...paneProps}>
                        {child}
                    </MantineSplitter.Pane>
                );
            })}
        </MantineSplitter>
    );
};

Splitter.dashChildrenUpdate = true;

export default Splitter;

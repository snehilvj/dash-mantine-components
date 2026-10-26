import { MantineColor, Splitter as MantineSplitter } from '@mantine/core';
import {
    SplitterPaneSize,
    SplitterStep,
    UseSplitterReturnValue,
} from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import { path } from 'ramda';
import React, { useEffect, useRef, useState } from 'react';
import {
    setPersistence,
    getChildLayout,
    getLoadingState,
} from '../../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps, PersistenceProps {
    /**
     * SplitterPane components must be direct children of Splitter. Put containers,
     * content, or nested splitters inside a pane. SplitterPane defines the pane's size 
     *  and behavior within Splitter.
     */
    children?: React.ReactNode;
    /**
     * Controlled pane sizes. Updated on release after dragging and immediately
     * for keyboard resizing, collapse/expand, and double-click reset.
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
    const ctx = (window as any).dash_component_api.useDashContext();
    // Subscribe only to trigger re-renders when pane props change; getChildLayout
    // reads their values below. Avoid dashChildrenUpdate, which left handleIcon stale.
    ctx.useSelector((state: any) =>
        path([...ctx.componentPath, 'props', 'children'], state.layout)
    );

    const splitterRef = useRef<UseSplitterReturnValue>(null);
    const isDragging = useRef(false);
    const [localSizes, setLocalSizes] = useState(sizes);

    useEffect(() => {
        setLocalSizes(sizes);
    }, [sizes]);

    const reportSizes = (nextSizes: SplitterPaneSize[]) => {
        setProps({
            sizes: nextSizes,
            collapsed: nextSizes.reduce<number[]>((indices, size, index) => {
                if (parseFloat(String(size)) === 0) {
                    indices.push(index);
                }
                return indices;
            }, []),
        });
    };

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
            sizes={localSizes}
            onResizeStart={() => {
                isDragging.current = true;
            }}
            onSizeChange={(nextSizes) => {
                setLocalSizes(nextSizes);
                if (!isDragging.current) {
                    reportSizes(nextSizes);
                }
            }}
            onResizeEnd={(_, nextSizes) => {
                isDragging.current = false;
                reportSizes(nextSizes);
            }}
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

setPersistence(Splitter, ['sizes']);

export default Splitter;

import {
    FloatingWindow as MantineFloatingWindow,
    PaperBaseProps,
} from '@mantine/core';
import {
    SetFloatingWindowPosition,
    UseFloatingWindowOptions,
} from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useRef } from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Position {
    /** Distance from the top viewport edge in pixels */
    top?: number;
    /** Distance from the left viewport edge in pixels */
    left?: number;
    /** Distance from the right viewport edge in pixels */
    right?: number;
    /** Distance from the bottom viewport edge in pixels */
    bottom?: number;
}

interface WindowSize {
    /** Width in pixels */
    width: number;
    /** Height in pixels */
    height: number;
}

interface Props
    extends
        BoxProps,
        PaperBaseProps,
        StylesApiProps,
        DashBaseProps,
        Omit<
            UseFloatingWindowOptions,
            'onPositionChange' | 'onDragStart' | 'onDragEnd'
        > {
    /** Window content, including an optional FloatingWindowResizeHandle */
    children?: React.ReactNode;
    /** Move the window programmatically. Specify one horizontal and one vertical edge in pixels. */
    position?: Position;
    /** Actual viewport position in pixels. Updated after dragging and programmatic position changes. */
    currentPosition?: {
        /** Distance from the left viewport edge */
        x: number;
        /** Distance from the top viewport edge */
        y: number;
    };
    /** Actual window size in pixels. Updated after pointer resizing and immediately for keyboard resizing. */
    currentSize?: WindowSize;
    /** Whether the window is being dragged. Updated on drag start and end. */
    dragging?: boolean;
    /** Whether the window is being resized with a pointer. Updated on resize start and end. */
    resizing?: boolean;
    /** Render inside a portal, true by default */
    withinPortal?: boolean;
    /** Props passed to Portal, such as target and reuseTargetNode */
    portalProps?: {
        /** CSS selector of the portal target */
        target?: string;
        /** Reuse the default portal node */
        reuseTargetNode?: boolean;
    };
    /** Window z-index, 400 by default */
    zIndex?: string | number;
    /** Resize configuration in pixels. Add FloatingWindowResizeHandle to enable resizing. */
    dimensions?: {
        /** Initial width */
        initialWidth?: number;
        /** Minimum width */
        minWidth?: number;
        /** Maximum width */
        maxWidth?: number;
        /** Initial height */
        initialHeight?: number;
        /** Minimum height */
        minHeight?: number;
        /** Maximum height */
        maxHeight?: number;
    };
}

/** Draggable, optionally resizable floating window. */
const FloatingWindow = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        position,
        currentPosition,
        currentSize,
        dragging,
        resizing,
        ...others
    } = props;
    const setPositionRef = useRef<SetFloatingWindowPosition>(null);
    const isDragging = useRef(false);
    const isResizing = useRef(false);
    const lastPosition = useRef<Props['currentPosition']>(undefined);
    const lastSize = useRef<WindowSize>(undefined);

    useEffect(() => {
        if (position) {
            setPositionRef.current?.(position);
        }
    }, [position]);

    return (
        <MantineFloatingWindow
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
            initialPosition={position ?? others.initialPosition}
            setPositionRef={setPositionRef}
            onPositionChange={(nextPosition) => {
                lastPosition.current = nextPosition;
                if (!isDragging.current) {
                    setProps({ currentPosition: nextPosition });
                }
            }}
            onDragStart={() => {
                isDragging.current = true;
                setProps({ dragging: true });
            }}
            onDragEnd={() => {
                isDragging.current = false;
                setProps({
                    dragging: false,
                    ...(lastPosition.current && {
                        currentPosition: lastPosition.current,
                    }),
                });
            }}
            onSizeChange={(nextSize) => {
                lastSize.current = nextSize;
                if (!isResizing.current) {
                    setProps({ currentSize: nextSize });
                }
            }}
            onResizeStart={() => {
                isResizing.current = true;
                setProps({ resizing: true });
            }}
            onResizeEnd={() => {
                isResizing.current = false;
                setProps({
                    resizing: false,
                    ...(lastSize.current && { currentSize: lastSize.current }),
                });
            }}
        >
            {children}
        </MantineFloatingWindow>
    );
};

export default FloatingWindow;

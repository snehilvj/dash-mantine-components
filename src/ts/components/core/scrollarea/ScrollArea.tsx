import { ScrollArea as MantineScrollArea } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ScrollAreaProps } from 'props/scrollarea';
import React, { useEffect, useRef } from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface ScrollToOptions {
    /** The vertical position as pixels (number) or percentage (string) from '0%' to '100%' */
    top?: number | string;
    /** The horizontal position as pixels (number) or percentage (string) from '0%' to '100%' */
    left?: number | string;
    /** scroll behavior: `auto` (instant) or `smooth` (animated), `smooth` by default */
    behavior?: 'auto' | 'smooth';
}

interface Props extends ScrollAreaProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
    /** Scroll to a position in the scroll area */
    scrollTo?: ScrollToOptions;
}

/** Scroll area with custom scroll bars */
const ScrollArea = (props: Props) => {
    const { setProps, loading_state, children, scrollTo, ...others } = props;
    const viewportRef = useRef<HTMLDivElement>(null);

    const calculatePosition = (
        value: number | string | undefined,
        dimension: 'height' | 'width'
    ): number | undefined => {
        if (value === undefined || !viewportRef.current) return undefined;

        const viewport = viewportRef.current;

        // Handle pixel values (numbers)
        if (typeof value === 'number') {
            return value;
        }

        // Handle percentage values (strings)
        if (typeof value === 'string' && value.endsWith('%')) {
            const percentage = parseFloat(value.slice(0, -1));

            // Validate percentage
            if (isNaN(percentage)) {
                console.warn(`Invalid percentage value: ${value}`);
                return undefined;
            }

            const scrollSize =
                dimension === 'height'
                    ? viewport.scrollHeight
                    : viewport.scrollWidth;
            const viewportSize =
                dimension === 'height'
                    ? viewport.clientHeight
                    : viewport.clientWidth;
            const maxScroll = scrollSize - viewportSize;

            // Clamp percentage to 0-100 range
            const clampedPercentage = Math.max(0, Math.min(100, percentage));

            return (maxScroll * clampedPercentage) / 100;
        }

        // Handle invalid string values
        console.warn(
            `Invalid scroll position value: ${value}. Expected a number (pixels) or string with % (percentage).`
        );
        return undefined;
    };

    useEffect(() => {
        if (!scrollTo || !viewportRef.current) return;

        const calculatedTop = calculatePosition(scrollTo.top, 'height');
        const calculatedLeft = calculatePosition(scrollTo.left, 'width');

        viewportRef.current.scrollTo({
            top: calculatedTop,
            left: calculatedLeft,
            behavior: scrollTo.behavior || 'smooth',
        });
    }, [scrollTo]);

    return (
        <MantineScrollArea
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            viewportRef={viewportRef}
            {...others}
        >
            {children}
        </MantineScrollArea>
    );
};

export default ScrollArea;

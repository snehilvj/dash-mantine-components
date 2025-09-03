import { ScrollArea as MantineScrollArea } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ScrollAreaProps } from 'props/scrollarea';
import React, { useEffect, useRef } from 'react';
import { getLoadingState } from '../../../utils/dash3';


interface ScrollToOptions {
    /** The vertical position as a percentage (0-100). Ignored if element is specified.*/
    top?: number;
    /** The horizontal position as a percentage (0-100). Ignored if element is specified. */
    left?: number;
    /** CSS selector or element ID to scroll to. When specified, top/left are ignored. */
    element?: string;
    /** How to align the element vertically when scrolling to it */
    block?: 'start' | 'center' | 'end' | 'nearest';
    /** How to align the element horizontally when scrolling to it */
    inline?: 'start' | 'center' | 'end' | 'nearest';
    /** The scroll behavior ('auto' | 'smooth') */
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

    const calculatePosition = (percentage: number | undefined, dimension: 'height' | 'width'): number | undefined => {
        if (percentage === undefined || !viewportRef.current) return undefined;

        const viewport = viewportRef.current;
        const scrollSize = dimension === 'height' ? viewport.scrollHeight : viewport.scrollWidth;
        const viewportSize = dimension === 'height' ? viewport.clientHeight : viewport.clientWidth;
        const maxScroll = scrollSize - viewportSize;

        // Clamp percentage to 0-100 range
        const clampedPercentage = Math.max(0, Math.min(100, percentage));

        return (maxScroll * clampedPercentage) / 100;
    };

    useEffect(() => {
        if (!scrollTo || !viewportRef.current) return;

        // Handle element-based scrolling
        if (scrollTo.element) {
            // Find the target element within the ScrollArea
            const targetElement = viewportRef.current.querySelector(scrollTo.element);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: scrollTo.behavior || 'smooth',
                    block: scrollTo.block || 'start',
                    inline: scrollTo.inline || 'nearest'
                });
            }
            return;
        }

        // Handle percentage-based scrolling
        const calculatedTop = calculatePosition(scrollTo.top, 'height');
        const calculatedLeft = calculatePosition(scrollTo.left, 'width');

        viewportRef.current.scrollTo({
            top: calculatedTop,
            left: calculatedLeft,
            behavior: scrollTo.behavior || 'smooth'
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



import {
    TableOfContents as MantineTableOfContents,
    MantineColor,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import { getLoadingState, useDash3LoadingCompleted } from "../../utils/dash3";
import {
    InitialTableOfContentsData
} from "@mantine/core/lib/components/TableOfContents/TableOfContents";
import {equals, concat, includes, toPairs, any} from 'ramda';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps {
    /** Controls active element style, `'filled'` by default */
    variant?: "filled" | "light" | "none";
    /** Active element color. Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls font-size and padding of all elements, `'md'` by default */
    size?: MantineSize | string  | number;
    /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Selector to get headings, 'h1, h2, h3, h4, h5, h6' by default */
    selector?: string;
    /** Data used to render content until actual values are retrieved from the DOM, empty array by default */
    initialData?: InitialTableOfContentsData[];
    /** Minimum `depth` value that requires offset, `1` by default */
    minDepthToOffset?: number;
    /** Controls padding on the left side of control, multiplied by (`depth` - `minDepthToOffset`), `20px` by default  */
    depthOffset?: number | string;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Offset from the top of the viewport to use when determining the active heading, 0 by default*/
    offset?: number;
    /** Set scrollIntoView options.
     * {'behavior': 'auto' | 'instant' | 'smooth',
     *  'block': 'center' | 'end' | 'nearest' | 'start',
     *  'inline': 'center' | 'end' | 'nearest' | 'start'}*/
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    /** Usable in callbacks to force a refresh.*/
    refresh?: boolean;
    /**
      * Component id to observe for loading completion (Dash >= 3 only).
      * Defaults to Dash Pages content container '_pages_content'.
      * For Dash 2 use reinitialize prop instead.
      */
    target_id?: string;
}

/** TableOfContents */
const TableOfContents = (
    {
        setProps,
        loading_state,
        selector,
        offset,
        scrollIntoViewOptions,
        refresh,
        target_id,
        ...others
    }: Props) => {

    const reinitializeRef = useRef(() => {});

    useLayoutEffect(() => {
        if (refresh) {
            reinitializeRef.current();
            setProps({ refresh: false });
        }
    }, [refresh]);


    const loaded = useDash3LoadingCompleted(
        target_id || "_pages_content"
    );

    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                reinitializeRef.current();
                setProps({ refresh: true });
            }, 0);
        }
    }, [loaded]);

    return (
        <MantineTableOfContents
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            reinitializeRef={reinitializeRef}
            scrollSpyOptions={{
                selector: selector,
                // getDepth: (element) => Number(element.getAttribute('data-order')), // A function to retrieve depth of heading, by default depth is calculated based on tag name
                // getValue: (element) => element.getAttribute('data-heading') || '', // A function to retrieve heading value, by default element.textContent is used
                // scrollHost?: HTMLElement, // Host element to attach scroll event listener, if not provided, window is used
                offset: offset,
            }}
            getControlProps={({ active, data }) => ({
                onClick: (e) => {
                    e.preventDefault();
                    window.history.replaceState(null, "", `#${data.id}`);
                    data.getNode().scrollIntoView(scrollIntoViewOptions);
                },
                component: "a",
                href: `#${data.id}`,
                children: data.value,
            })}
            {...others}
        />
    );
};

export default TableOfContents;

import {
    TableOfContents as MantineTableOfContents,
    MantineColor,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";
import {
    InitialTableOfContentsData
} from "@mantine/core/lib/components/TableOfContents/TableOfContents";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps {
    /** Controls active element style, `'filled'` by default */
    variant?: "filled" | "light" | "none";
    /** Active element color. Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls font-size and padding of all elements, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
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
}

/** TableOfContents */
const TableOfContents = (
    {
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        selector,
        ...others
    }: Props) => {


    return (
        <MantineTableOfContents
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            scrollSpyOptions={{
                selector: selector
                // getDepth: (element) => Number(element.getAttribute('data-order')),
                // getValue: (element) => element.getAttribute('data-heading') || '',
            }}
            getControlProps={({ data }) => ({
                onClick: () => data.getNode().scrollIntoView(),
                children: data.value,
            })}
            {...others}
        />
    );
};

export default TableOfContents;

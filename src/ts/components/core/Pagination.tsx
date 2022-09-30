import React from "react";
import { DefaultProps, AlignContentProps } from "../../props";
import { Pagination as MantinePagination, GroupPosition } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Active item color from theme, defaults to theme.primaryColor */
    color?: MantineColor;
    /** Controlled active page number */
    page?: number;
    /** Total amount of pages */
    total: number;
    /** Siblings amount on left/right side of selected page */
    siblings?: number;
    /** Amount of elements visible on left/right edges */
    boundaries?: number;
    /** Spacing between items from theme or number to set value in px, defaults to theme.spacing.xs / 2 */
    spacing?: MantineNumberSize;
    /** Predefined item size or number to set width and height in px */
    size?: MantineNumberSize;
    /** Predefined item radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Show/hide jump to start/end controls */
    withEdges?: boolean;
    /** Show/hide prev/next controls */
    withControls?: boolean;
    /** Determines whether all controls should be disabled */
    disabled?: boolean;
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Defines align-items css property */
    align?: AlignContentProps;
} & DefaultProps;

/**
 * Display active page and navigate between multiple pages. For more information, see: https://mantine.dev/core/pagination/
 */
const Pagination = (props: Props) => {
    const { setProps, ...other } = props;

    const onChange = (page: number) => {
        setProps({ page });
    };

    return <MantinePagination {...other} onChange={onChange} />;
};

Pagination.defaultProps = {};

export default Pagination;

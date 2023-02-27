import React from "react";
import {
    DefaultProps,
    AlignContentProps,
    JustifyContentProps,
} from "../../props";
import { Grid as MantineGrid } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** dmc.Col components only */
    children?: React.ReactNode;
    /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
    gutter?: MantineNumberSize;
    /** Gutter when screen size is larger than theme.breakpoints.xs */
    gutterXs?: MantineNumberSize;
    /** Gutter when screen size is larger than theme.breakpoints.sm */
    gutterSm?: MantineNumberSize;
    /** Gutter when screen size is larger than theme.breakpoints.md */
    gutterMd?: MantineNumberSize;
    /** Gutter when screen size is larger than theme.breakpoints.lg */
    gutterLg?: MantineNumberSize;
    /** Gutter when screen size is larger than theme.breakpoints.xl */
    gutterXl?: MantineNumberSize;
    /** Should columns in the last row take 100% of grid width */
    grow?: boolean;
    /** Set grid justify-content property */
    justify?: JustifyContentProps;
    /** Set grid align-content property */
    align?: AlignContentProps;
    /** Amount of columns in each row */
    columns?: number;
} & DefaultProps;

/**
 * Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
 */
const Grid = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineGrid {...other}>{children}</MantineGrid>;
};

Grid.defaultProps = {};

export default Grid;

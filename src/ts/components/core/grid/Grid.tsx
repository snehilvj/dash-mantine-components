import { Grid as MantineGrid } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";
import { AlignContent, JustifyContent } from "props/css";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /**dmc.Col components only */
    children: React.ReactNode;
    /** Spacing between columns, key of theme.spacing or number for value */
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
    justify?: JustifyContent;
    /** Set grid align-content property */
    align?: AlignContent;
    /** Amount of columns in each row */
    columns?: number;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Flexbox grid system with variable amount of columns */
const Grid = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineGrid {...other}>{children}</MantineGrid>;
};

Grid.defaultProps = {};

export default Grid;

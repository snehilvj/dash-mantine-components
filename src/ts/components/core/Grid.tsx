import React from "react";
import {
    DashComponentProps,
    AlignContentProps,
    JustifyContentProps,
} from "../../props";
import { Grid as MantineGrid } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Col components only */
    children?: React.ReactNode;
    /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
    gutter?: MantineSize;
    /** Should columns in the last row take 100% of grid width */
    grow?: boolean;
    /** Set grid justify-content property */
    justify?: JustifyContentProps;
    /** Set grid align-content property */
    align?: AlignContentProps;
    /** Amount of columns in each row */
    columns?: number;
} & DashComponentProps;

/**
 * Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
 */
const Grid = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineGrid {...other}>{children}</MantineGrid>;
};

Grid.defaultProps = {};

export default Grid;

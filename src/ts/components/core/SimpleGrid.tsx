import { SimpleGrid as MantineSimpleGrid } from "@mantine/core";
import { SimpleGridBreakpoint } from "@mantine/core/lib/SimpleGrid/SimpleGrid.styles";
import { DashBaseProps } from "props/dash";
import {
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Breakpoints data to change items per row and spacing based on max-width */
    breakpoints?: SimpleGridBreakpoint[];
    /** Default amount of columns, used when none of breakpoints can be applied  */
    cols?: number;
    /** Spacing between columns, used when none of breakpoints can be applied */
    spacing?: MantineNumberSize;
    /** Vertical spacing between columns, used when none of breakpoints can be applied  */
    verticalSpacing?: MantineNumberSize;
    /** Content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Responsive grid where each item takes equal amount of space */
const SimpleGrid = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineSimpleGrid {...other}>{children}</MantineSimpleGrid>;
};

SimpleGrid.defaultProps = {};

export default SimpleGrid;

import { Box, MediaQuery as MantineMediaQuery } from "@mantine/core";
import { CSSObject } from "@mantine/styles";
import { DashBaseProps } from "props/dash";
import {
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Child that should be shown at given breakpoint, it must accept className prop */
    children: React.ReactNode;
    /** Styles applied to child when viewport is smaller than given breakpoint */
    smallerThan?: MantineNumberSize;
    /** Styles applied to child when viewport is larger than given breakpoint */
    largerThan?: MantineNumberSize;
    /** Any other media query */
    query?: string;
    /** Styles applied to child when breakpoint matches */
    styles: Record<string, CSSObject>;
    /** props to wrapper box component */
    boxWrapperProps?: DashBaseProps &
        MantineStyleSystemProps &
        MantineStylesAPIProps;
};

/** Apply styles to children if media query matches */
const MediaQuery = (props: Props) => {
    const { children, boxWrapperProps, ...other } = props;
    const boxProps = { style: { width: "fit-content" }, ...boxWrapperProps };

    return (
        <MantineMediaQuery {...other}>
            <Box {...boxProps}>{children}</Box>
        </MantineMediaQuery>
    );
};

MediaQuery.defaultProps = {};

export default MediaQuery;

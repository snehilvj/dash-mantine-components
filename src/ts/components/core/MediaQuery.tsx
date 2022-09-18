import React from "react";
import { DashComponentProps } from "../../props";
import { Box, MediaQuery as MantineMediaQuery } from "@mantine/core";
import { MantineSize, CSSObject } from "@mantine/styles";

type Props = {
    className?: string;
    /** Child that should be shown at given breakpoint, it must accept className prop */
    children?: React.ReactNode;
    /** Styles applied to child when viewport is smaller than given breakpoint */
    smallerThan?: MantineSize;
    /** Styles applied to child when viewport is larger than given breakpoint */
    largerThan?: MantineSize;
    /** Any other media query */
    query?: string;
    /** Styles applied to child when breakpoint matches */
    styles: Record<string, CSSObject>;
} & DashComponentProps;

/**
 * Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
 */
const MediaQuery = (props: Props) => {
    const { children, styles, setProps, ...other } = props;

    return (
        <MantineMediaQuery styles={styles} {...other}>
            <Box>{children}</Box>
        </MantineMediaQuery>
    );
};

MediaQuery.defaultProps = {};

export default MediaQuery;

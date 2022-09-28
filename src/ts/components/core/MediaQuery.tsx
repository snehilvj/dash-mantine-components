import React from "react";
import { Box, MediaQuery as MantineMediaQuery } from "@mantine/core";
import { MantineNumberSize, CSSObject } from "@mantine/styles";

type Props = {
    /** Child that should be shown at given breakpoint, it must accept className prop */
    children?: React.ReactNode;
    /** Styles applied to child when viewport is smaller than given breakpoint */
    smallerThan?: MantineNumberSize;
    /** Styles applied to child when viewport is larger than given breakpoint */
    largerThan?: MantineNumberSize;
    /** Any other media query */
    query?: string;
    /** Styles applied to child when breakpoint matches */
    styles: Record<string, CSSObject>;
};

/**
 * Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
 */
const MediaQuery = (props: Props) => {
    const { children, styles, ...other } = props;

    return (
        <MantineMediaQuery styles={styles} {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </MantineMediaQuery>
    );
};

MediaQuery.defaultProps = {};

export default MediaQuery;

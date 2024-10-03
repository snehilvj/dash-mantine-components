import {
    SimpleGrid as MantineSimpleGrid,
    MantineSpacing,
    StyleProp,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Number of columns, `1` by default */
    cols?: StyleProp<number>;
    /** Spacing between columns, `'md'` by default */
    spacing?: StyleProp<MantineSpacing>;
    /** Spacing between rows, `'md'` by default */
    verticalSpacing?: StyleProp<MantineSpacing>;
}

/** SimpleGrid */
const SimpleGrid = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineSimpleGrid
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineSimpleGrid>
    );
};

SimpleGrid.defaultProps = {};

export default SimpleGrid;

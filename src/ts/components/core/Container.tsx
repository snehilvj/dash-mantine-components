import { Container as MantineContainer } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineNumberSize,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Predefined container max-width or number for max-width */
    size?: MantineNumberSize;
    /** If fluid is set to true, size prop is ignored and Container can expand to 100% of width */
    fluid?: boolean;
    /** Container sizes */
    sizes?: Record<MantineSize, number | string>;
    /** children */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Center content horizontally with predefined max-width */
const Container = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineContainer {...other}>{children}</MantineContainer>;
};

Container.defaultProps = {};

export default Container;

import React from "react";
import { DefaultProps } from "../../props";
import { Container as MantineContainer } from "@mantine/core";
import { MantineNumberSize, MantineSize } from "@mantine/styles";

type Props = {
    /** Container content */
    children?: React.ReactNode;
    /** Predefined container max-width or number for max-width in px */
    size?: MantineNumberSize;
    /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
    fluid?: boolean;
    /** Container sizes */
    sizes?: Record<MantineSize, number>;
} & DefaultProps;

/**
 * Center content horizontally with predefined max-width. For more information, see: https://mantine.dev/core/container/
 */
const Container = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineContainer {...other}>{children}</MantineContainer>;
};

Container.defaultProps = {};

export default Container;

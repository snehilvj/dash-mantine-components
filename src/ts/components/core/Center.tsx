import React from "react";
import { DefaultProps } from "../../props";
import { Center as MantineCenter } from "@mantine/core";

type Props = {
    /** Content that should be centered vertically and horizontally */
    children?: React.ReactNode;
    /** Set to true to use inline-flex instead of flex */
    inline?: boolean;
} & DefaultProps;

/**
 * Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/center/
 */
const Center = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCenter {...other}>{children}</MantineCenter>;
};

Center.defaultProps = {};

export default Center;

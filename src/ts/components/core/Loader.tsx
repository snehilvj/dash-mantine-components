import React from "react";
import { DefaultProps, LoaderProps } from "../../props";
import { Loader as MantineLoader } from "@mantine/core";

type Props = LoaderProps & DefaultProps;

/**
 * Indicate loading state. For more information, see: https://mantine.dev/core/loader/
 */
const Loader = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineLoader {...other} />;
};

Loader.defaultProps = {};

export default Loader;

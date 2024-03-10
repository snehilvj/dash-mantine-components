import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
} from "@mantine/core";
import React from "react";

import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
interface Props extends MantineProviderProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
}

/* MantineProvider */
const MantineProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineMantineProvider {...others}>{children}</MantineMantineProvider>
    );
};

MantineProvider.defaultProps = {};

export default MantineProvider;

import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
} from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

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

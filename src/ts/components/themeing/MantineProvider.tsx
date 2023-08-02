import React from "react";
import { MantineProvider as MantineMantineProvider } from "@mantine/core";

type Props = {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Theme */
    theme?: object;
    /** Normalize CSS */
    withNormalizeCSS?: boolean;
    /** With global styles */
    withGlobalStyles?: boolean;
    /** With css variables */
    withCSSVariables?: boolean;
    /** Children */
    children?: React.ReactNode;
    /** Inherit from one level up MantineProvider */
    inherit?: boolean;
};

/** Indicate loading state */
const MantineProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineMantineProvider {...others}>{children} </MantineMantineProvider>
    );
};

MantineProvider.defaultProps = {};

export default MantineProvider;

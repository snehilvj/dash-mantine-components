import React from "react";
import { MantineProvider as MantineMantineProvider } from "@mantine/core";

type Props = {
    theme?: object;
    withNormalizeCSS?: boolean;
    withGlobalStyles?: boolean;
    withCSSVariables?: boolean;
    children?: React.ReactNode;
    inherit?: boolean;
};

/**
 * Indicate loading state. For more information, see: https://mantine.dev/core/loader/
 */
const MantineProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineMantineProvider {...others}>{children} </MantineMantineProvider>
    );
};

MantineProvider.defaultProps = {};

export default MantineProvider;

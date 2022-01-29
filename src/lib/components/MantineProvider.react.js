import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineProvider as MantineMantineProvider } from "@mantine/core";

/**
 * MantineProvider component allows you to change theme globally. It is not required if you decide to use default theme. For more information, see: https://mantine.dev/theming/mantine-provider/
 */
const MantineProvider = (props) => {
    return (
        <MantineMantineProvider {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineMantineProvider>
    );
};

MantineProvider.displayName = "MantineProvider";

MantineProvider.defaultProps = {};

MantineProvider.propTypes = {
    /**
     * Children
     */
    children: PropTypes.node,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Styles
     */
    styles: PropTypes.object,

    /**
     * Theme
     */
    theme: PropTypes.object,

    /**
     * Normalize CSS?
     */
    withNormalizeCSS: PropTypes.bool,

    /**
     * With global styles
     */
    withGlobalStyles: PropTypes.bool,
};

export default MantineProvider;

import React from "react";
import PropTypes from "prop-types";
import { Container as MantineContainer } from "@mantine/core";
import { omit } from "ramda";
import { NumberSizes } from "../propTypes";

/** Center content horizontally with predefined max-width. For more information, see: https://mantine.dev/core/container/ */
const Container = (props) => {
    return (
        <MantineContainer {...omit(["children", "setProps"], props)}>
            {props.children}
        </MantineContainer>
    );
};

Container.displayName = "Container";

Container.defaultProps = {};

Container.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /**	Content that should be centered vertically and horizontally */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	If fluid is set to true, size prop is ignored and Container always take 100% of width */
    fluid: PropTypes.bool,

    /**	Horizontal padding defined in theme.spacing, or number value for padding in px */
    padding: NumberSizes,

    /**	Predefined container max-width or number for max-width in px */
    size: NumberSizes,

    /** Inline style override */
    style: PropTypes.object,
};

export default Container;

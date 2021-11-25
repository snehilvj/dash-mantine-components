import { Blockquote as MantineBlockquote } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";
import { MantineColors } from "../propTypes";

/** Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/ */
const Blockquote = (props) => {
    const { children } = props;

    return (
        <MantineBlockquote {...omit(["setProps", "children"], props)}>
            {children}
        </MantineBlockquote>
    );
};

Blockquote.displayName = "Blockquote";

Blockquote.defaultProps = {};

Blockquote.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Primary content */
    children: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Describe a reference to a cited quote */
    cite: PropTypes.string,

    /** Badge color from theme */
    color: MantineColors,

    /** Inline style override */
    style: PropTypes.object,
};

export default Blockquote;

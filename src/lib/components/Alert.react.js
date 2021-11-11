import React from "react";
import { Alert as MantineAlert } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors } from "../propTypes";

/** Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/ */
const Alert = (props) => {
    return (
        <MantineAlert {...omit(["setProps"], props)}>
            {props.children}
        </MantineAlert>
    );
};

Alert.displayName = "Alert";

Alert.defaultProps = {};

Alert.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Alert message */
    children: PropTypes.node,

    /**	Alert title and line colors from theme */
    color: MantineColors,

    /**	Optional alert title */
    title: PropTypes.string,

    /** Inline style override */
    style: PropTypes.object,
};

export default Alert;

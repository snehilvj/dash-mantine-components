import React, { useEffect, useRef } from "react";
import { Alert as MantineAlert } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/
 */
const Alert = (props) => {
    const { duration, show, setProps } = props;
    const ref = useRef(null);

    useEffect(() => {
        if (duration) {
            ref.current = setTimeout(() => setProps({ show: false }), duration);
        }
        return () => {
            if (ref.current) {
                clearTimeout(ref.current);
            }
        };
    }, [show]);

    return show ? (
        <MantineAlert
            {...omit(["setProps", "show"], props)}
            onClose={() => setProps({ show: false })}
        >
            {props.children}
        </MantineAlert>
    ) : null;
};

Alert.displayName = "Alert";

Alert.defaultProps = {
    show: false,
};

Alert.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Alert message
     */
    children: PropTypes.node,

    /**
     * Alert title and line colors from theme
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * Duration in milliseconds after which the Alert dismisses itself.
     */
    duration: PropTypes.number,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Optional alert title
     */
    title: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Whether to show the alert
     */
    show: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Display close button
     */
    withCloseButton: PropTypes.bool,
};

export default Alert;

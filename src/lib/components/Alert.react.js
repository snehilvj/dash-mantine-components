import React, { useEffect, useRef } from "react";
import { Alert as MantineAlert } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/
 */
const Alert = (props) => {
    const { duration, hide, setProps, class_name } = props;
    const ref = useRef(null);
    let nProps = omit(["setProps", "hide", "class_name"], props);
    nProps = renderDashComponents(nProps, ["title", "icon"]);

    useEffect(() => {
        if (duration) {
            ref.current = setTimeout(() => setProps({ hide: true }), duration);
        }
        return () => {
            if (ref.current) {
                clearTimeout(ref.current);
            }
        };
    }, [hide]);

    return hide ? null : (
        <MantineAlert
            {...nProps}
            className={class_name}
            onClose={() => setProps({ hide: true })}
        >
            {props.children}
        </MantineAlert>
    );
};

Alert.displayName = "Alert";

Alert.defaultProps = {
    hide: false,
};

Alert.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Whether to hide the alert
     */
    hide: PropTypes.bool,

    /**
     * Icon displayed next to title
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Optional alert title
     */
    title: PropTypes.any,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controls Alert background, color and border styles
     */
    variant: PropTypes.oneOf(["filled", "outline", "light"]),

    /**
     * Display close button
     */
    withCloseButton: PropTypes.bool,
};

export default Alert;

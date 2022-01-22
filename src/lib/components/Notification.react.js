import React, { useEffect } from "react";
import { useNotifications } from "@mantine/notifications";
import PropTypes from "prop-types";
import { renderDashComponents } from "dash-extensions-js";
import { omit } from "ramda";

/**
 * Show dynamic notifications and alerts to user, part of notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const Notification = (props) => {
    const notification = useNotifications();
    const {
        action,
        autoClose,
        color,
        disallowClose,
        icon,
        id,
        loading,
        message,
        radius,
        title,
    } = props;

    useEffect(() => {
        const nProps = renderDashComponents(
            omit(["setProps", "children"], props),
            ["icon", "title", "message"]
        );

        switch (nProps.action) {
            case "show":
                notification.showNotification(nProps);
                break;

            case "update":
                notification.updateNotification(nProps.id, nProps);
                break;

            case "hide":
                notification.hideNotification(nProps.id);
                break;

            default:
                break;
        }
    }, [
        action,
        autoClose,
        color,
        disallowClose,
        icon,
        id,
        loading,
        message,
        radius,
        title,
    ]);

    return <div />;
};

Notification.displayName = "Notification";

Notification.defaultProps = {};

Notification.propTypes = {
    /**
     * Action
     */
    action: PropTypes.oneOf(["show", "update", "hide"]),

    /**
     * Whether autoclose and if true then duration
     */
    autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

    /**
     * Notification line or icon color
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
     * Removes close button
     */
    disallowClose: PropTypes.bool,

    /**
     * Notification icon, replaces color line
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string.isRequired,

    /**
     * Replaces colored line or icon with Loader component
     */
    loading: PropTypes.bool,

    /**
     * Notification Body
     */
    message: PropTypes.any,

    /**
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Notification title, displayed before body
     */
    title: PropTypes.any,
};

export default Notification;

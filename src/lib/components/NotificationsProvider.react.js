import React from "react";
import { NotificationsProvider as MantineNotificationsProvider } from "@mantine/notifications";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const NotificationsProvider = (props) => {
    return (
        <MantineNotificationsProvider
            {...omit(["setProps", "children"], props)}
        >
            {props.children}
        </MantineNotificationsProvider>
    );
};

NotificationsProvider.displayName = "NotificationsProvider";

NotificationsProvider.defaultProps = {};

NotificationsProvider.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Content
     */
    children: PropTypes.node,

    /**
     * Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function
     */
    autoClose: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([false]),
    ]),

    /**
     * Notification width in px, cannot exceed 100%
     */
    containerWidth: PropTypes.number,

    /**
     * Maximum amount of notifications displayed at a time, other new notifications will be added to queue
     */
    limit: PropTypes.number,

    /**
     * Notification max-height in px, used for transitions
     */
    notificationMaxHeight: PropTypes.number,

    /**
     * Notifications position
     */
    position: PropTypes.oneOf([
        "top-left",
        "top-right",
        "top-center",
        "bottom-left",
        "bottom-right",
        "bottom-center",
    ]),

    /**
     * Notifications container z-index
     */
    zIndex: PropTypes.number,
};

export default NotificationsProvider;

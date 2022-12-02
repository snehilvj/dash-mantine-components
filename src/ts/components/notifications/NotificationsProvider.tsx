import React from "react";
import { NotificationsProvider as MantineNotificationsProvider } from "@mantine/notifications";

type Props = {
    /** Notifications position */
    position?:
        | "top-left"
        | "top-right"
        | "top-center"
        | "bottom-left"
        | "bottom-right"
        | "bottom-center";
    /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function */
    autoClose?: number | false;
    /** Notification transitions duration, 0 to turn transitions off */
    transitionDuration?: number;
    /** Notification width in px, cannot exceed 100% */
    containerWidth?: number;
    /** Notification max-height in px, used for transitions */
    notificationMaxHeight?: number;
    /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
    limit?: number;
    /** Notifications container z-index */
    zIndex?: number;
    /** Your application */
    children?: React.ReactNode;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
};

/**
 * Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const NotificationsProvider = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineNotificationsProvider {...other}>
            {children}
        </MantineNotificationsProvider>
    );
};

NotificationsProvider.defaultProps = {};

export default NotificationsProvider;

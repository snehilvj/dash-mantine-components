import { Notifications as MantineNotifications } from "@mantine/notifications";
import { DashBaseProps } from "props/dash";
import React from "react";

type Props = {
    /** Notifications position */
    position?:
        | "top-left"
        | "top-right"
        | "top-center"
        | "bottom-left"
        | "bottom-right"
        | "bottom-center";
    /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by notifications.show function */
    autoClose?: number | false;
    /** Notification transitions duration, 0 to turn transitions off */
    transitionDuration?: number;
    /** Notification width, cannot exceed 100% */
    containerWidth?: number | string;
    /** Notification max-height, used for transitions */
    notificationMaxHeight?: number | string;
    /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
    limit?: number;
    /** Notifications container z-index */
    zIndex?: number;
} & Omit<DashBaseProps, "style">;

/** Mantine notifications system */
const Notifications = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineNotifications {...other} />;
};

Notifications.defaultProps = {};

export default Notifications;

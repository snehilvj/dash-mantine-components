import { Notifications } from "@mantine/notifications";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Notifications position, `'bottom-right'` by default */
    position?:
        | "top-left"
        | "top-right"
        | "top-center"
        | "bottom-left"
        | "bottom-right"
        | "bottom-center";
    /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function, `4000` by defualt */
    autoClose?: number | false;
    /** Notification transition duration in ms, `250` by default */
    transitionDuration?: number;
    /** Notification width, cannot exceed 100%, `440` by default */
    containerWidth?: number | string;
    /** Notification `max-height`, used for transitions, `200` by default */
    notificationMaxHeight?: number | string;
    /** Maximum number of notifications displayed at a time, other new notifications will be added to queue, `5` by default */
    limit?: number;
    /** Notifications container z-index, `400` by default */
    zIndex?: string | number;
    /** Determines whether notifications container should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
}

/** NotificationProvider */
const NotificationProvider = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <Notifications
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default NotificationProvider;

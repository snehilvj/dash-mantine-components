import { Notifications, notifications, useNotifications } from "@mantine/notifications";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, {useEffect, useState} from "react";
import { getLoadingState } from "../../../utils/dash3";
import { MantineColor, MantineRadius } from "@mantine/core";
import {omit, equals} from 'ramda';

// Define appNotifications as a mutable object
export const appNotifications: Record<string, any> = {};

const NotificationStore = () => {
    const notificationStore = useNotifications();
    useEffect(() => {
        appNotifications['store'] = notificationStore;
        return () => {
            delete appNotifications['store'];
        };
    }, []);
    return null;
};

// Define the Notification interface based on your requirements
interface Notification extends BoxProps, StylesApiProps, Omit<DashBaseProps, "id"> {
  color?: MantineColor;
  radius?: MantineRadius;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  loading?: boolean;
  withBorder?: boolean;
  withCloseButton?: boolean;
  closeButtonProps?: Record<string, any>;
  id?: string;
  message: React.ReactNode;
  autoClose?: boolean | number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

// Define the NotificationsFormat type
type NotificationsFormat = {
  show: Notification[];
  update: Notification[];
  hide: Notification[];
};

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
    /** Notifications to be passed to the API */
    sendNotifications?: NotificationsFormat;
    /** Notifications API: removes all notifications from the notifications state and queue*/
    clean?: boolean;
    /** Notifications API: removes all notifications from the queue*/
    cleanQueue?: boolean;
}

/** NotificationContainer */
const NotificationContainer = (props: Props) => {
    const { setProps, loading_state, sendNotifications, clean, cleanQueue, ...others } = props;
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (sendNotifications) {
            // Iterate over each key in sendNotifications
            Object.keys(sendNotifications).forEach((key) => {
              // Access the array of notifications for the current key
              const notificationsArray = sendNotifications[key as keyof NotificationsFormat];

              // Perform operations on each notification in the array
              sendNotifications[key].forEach((notification) => {
                notifications[key](notification)
              });
            });
            // unloads notifications to make sure they dont reshow on error
            setProps({sendNotifications: {}})
        }
      }, [sendNotifications]);

    useEffect(() => {
        if (clean || cleanQueue) {
            if (clean) {
                notifications.clean()
            }
            if (cleanQueue) {
                notifications.cleanQueue()
            }
            setProps({clean: false, cleanQueue: false})
        }
    }, [clean, cleanQueue]);

    useEffect(() => {
        appNotifications['api'] = notifications
        setLoaded(true)
        return () => {delete appNotifications['api']}
    }, [])

    return (
        <>
            <Notifications
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                {...others}
            />
            {loaded && <NotificationStore />}
        </>
    );
};

export default NotificationContainer

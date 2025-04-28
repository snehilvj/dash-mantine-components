import { Notifications, notifications, useNotifications, notificationsStore } from "@mantine/notifications";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, {useEffect, useState} from "react";
import { getLoadingState, newRenderDashComponents, getContextPath } from "../../../utils/dash3";
import { MantineColor, MantineRadius } from "@mantine/core";
import {omit, equals} from 'ramda';

// Define appNotificationHolder as a mutable object
const appNotificationHolder: Record<string, any> = {};

// Create a proxy for appNotifications
export const appNotifications = new Proxy(appNotificationHolder, {
    get(target, key) {
        if (typeof key === "symbol") {
            return undefined; // Prevent errors when symbols are used
        }
        if (key === 'store') {
            // Call the function when 'state' is accessed
            return target[key]();
        }
        return target[key];
    },
    set(target, key, value) {
        if (typeof key === "symbol") {
            return false; // Prevent errors when symbols are used
        }
        target[key] = value;
        return true;
    }
});

// Define the Notification interface based on your requirements
interface Notification {
  color?: MantineColor;
  radius?: MantineRadius;
  icon?: any;
  title?: any;
  loading?: boolean;
  withBorder?: boolean;
  withCloseButton?: boolean;
  closeButtonProps?: Record<string, any>;
  id?: string;
  message: any;
  autoClose?: boolean | number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

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
    /** Notifications to be passed to the API for showing */
    showNotifications?: Notification[];
    /** Notifications to be passed to the API for updating */
    updateNotifications?: Notification[];
    /** Notifications to be passed to the API for hiding */
    hideNotifications?: Notification[];
    /** Notifications API: removes all notifications from the notifications state and queue*/
    clean?: boolean;
    /** Notifications API: removes all notifications from the queue*/
    cleanQueue?: boolean;
}

/** NotificationContainer */
const NotificationContainer = (props: Props) => {
    const { setProps, loading_state, showNotifications,updateNotifications, hideNotifications, clean, cleanQueue, ...others } = props;

    const componentPath = getContextPath()

    useEffect(() => {
        if (showNotifications) {
          showNotifications.forEach((notification) => {
            notifications['show'](newRenderDashComponents(notification, ['message', 'icon', 'title']));
          });
          setProps({ showNotifications: [] }); // Avoid duplicate processing
        }
    }, [showNotifications]);

    useEffect(() => {
        if (updateNotifications) {
          updateNotifications.forEach((notification) => {
            notifications['update'](newRenderDashComponents(notification, ['message', 'icon', 'title']));
          });
          setProps({ updateNotifications: [] }); // Avoid duplicate processing
        }
    }, [updateNotifications]);

    useEffect(() => {
        if (hideNotifications) {
          hideNotifications.forEach((notification) => {
            notifications['hide'](newRenderDashComponents(notification, ['message', 'icon', 'title']));
          });
          setProps({ hideNotifications: [] }); // Avoid duplicate processing
        }
    }, [hideNotifications]);

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
        appNotifications['store'] = notificationsStore.getState
        return () => {
            delete appNotifications['api']
            delete appNotifications['store']
        }
    }, [])

    return (
        <Notifications
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            store={notificationsStore}
            {...others}
        />
    );
};

export default NotificationContainer

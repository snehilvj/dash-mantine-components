import {
    Notifications,
    notifications,
    useNotifications,
    notificationsStore,
} from '@mantine/notifications';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useState } from 'react';
import {
    getLoadingState,
    newRenderDashComponents,
    getContextPath,
    stringifyId,
} from '../../../utils/dash3';
import { MantineColor, MantineRadius } from '@mantine/core';
import { omit, equals } from 'ramda';

// Define appNotificationHolder as a mutable object
const appNotificationHolder: Record<string, any> = {};
const allowedActions = ['show', 'update'] as const;
const allowedPositions = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'top-center',
    'bottom-center',
] as const;
export type Action = (typeof allowedActions)[number];
export type Position = (typeof allowedPositions)[number];

// Create a proxy for appNotifications
export const appNotifications = new Proxy(appNotificationHolder, {
    get(target, key) {
        if (typeof key === 'symbol') {
            return undefined; // Prevent errors when symbols are used
        }
        if (key === 'store') {
            // Call the function when 'state' is accessed
            return target[key]();
        }
        return target[key];
    },
    set(target, key, value) {
        if (typeof key === 'symbol') {
            return false; // Prevent errors when symbols are used
        }
        target[key] = value;
        return true;
    },
});

// Define the Notification interface based on your requirements
interface Notification extends BoxProps, StylesApiProps {
    /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Notification icon, replaces color line */
    icon?: any;
    /** Notification title, displayed before body */
    title?: any;
    /** Replaces colored line or icon with Loader component */
    loading?: boolean;
    /** Determines whether notification should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether close button should be visible, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: Record<string, any>;
    /** Notification id, can be used to close or update notification */
    id?: string;
    /** Notification message, required for all notifications */
    message: any;
    /** Determines whether notification should be closed automatically,
     *  number is auto close timeout in ms, overrides `autoClose` from `Notifications`
     * */
    autoClose?: boolean | number;
    /** action */
    action: Action;
    /** Position on the screen to display the notification.  */
    position?: Position;
}

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Notifications position, `'bottom-right'` by default */
    position?: Position;
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
    /** Props to pass down to the Portal when withinPortal is true */
    portalProps?: object;
    /** Notifications to show or update */
    sendNotifications?: Notification[];
    /** Notifications (ids) to be removed  from state or queue*/
    hideNotifications?: string[];
    /** Notifications API: removes all notifications from the notifications state and queue*/
    clean?: boolean;
    /** Notifications API: removes all notifications from the queue*/
    cleanQueue?: boolean;
}

/** NotificationContainer */
const NotificationContainer = (props: Props) => {
    const {
        setProps,
        loading_state,
        sendNotifications,
        hideNotifications,
        clean,
        cleanQueue,
        ...others
    } = props;

    const componentPath = getContextPath();

    useEffect(() => {
        // Note - the type checking can be removed when it's handled properly in Dash
        if (sendNotifications === undefined || sendNotifications === null)
            return;

        if (!Array.isArray(sendNotifications)) {
            throw new Error(
                `Expected 'sendNotifications' to be a list of dictionaries but received: ${JSON.stringify(sendNotifications)}`
            );
            return;
        }

        sendNotifications.forEach((notification) => {
            const { action, ...realNotification } = notification;

            // Validate action is one of the accepted values
            if (!allowedActions.includes(action || 'show')) {
                throw new Error(
                    `Invalid action: '${action}' passed to action prop; should be one of '${allowedActions.join("','")}'`
                );
                return;
            }
            if (
                !allowedPositions.includes(
                    realNotification?.position || 'bottom-right'
                )
            ) {
                throw new Error(
                    `Invalid position: '${realNotification?.position}' passed to position prop; should be one of '${allowedPositions.join("','")}'`
                );
                return;
            }

            // handle pattern matching  ids
            const normalizedNotification = {
                ...realNotification,
                id: stringifyId(realNotification.id),
            };
            notifications[action || 'show'](
                newRenderDashComponents(normalizedNotification, [
                    'message',
                    'icon',
                    'title',
                ])
            );
        });

        setProps({ sendNotifications: [] }); // Avoid duplicate processing
    }, [sendNotifications]);

    useEffect(() => {
        if (hideNotifications === undefined || hideNotifications === null)
            return;

        if (!Array.isArray(hideNotifications)) {
            throw new Error(
                `Expected 'hideNotifications' to be a list of ids but received: ${JSON.stringify(hideNotifications)}`
            );
            return;
        }

        hideNotifications.forEach((id) => {
            notifications.hide(stringifyId(id));
        });

        setProps({ hideNotifications: [] });
    }, [hideNotifications]);

    useEffect(() => {
        if (cleanQueue) {
            notifications.cleanQueue();
            setProps({ cleanQueue: false });
        }
    }, [cleanQueue]);

    useEffect(() => {
        if (clean) {
            notifications.clean();
            setProps({ clean: false });
        }
    }, [clean]);

    useEffect(() => {
        appNotifications['api'] = notifications;
        appNotifications['store'] = notificationsStore.getState;
    }, []);

    return (
        <Notifications
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            store={notificationsStore}
            {...others}
        />
    );
};

export default NotificationContainer;

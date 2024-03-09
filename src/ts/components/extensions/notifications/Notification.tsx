import { notifications } from "@mantine/notifications";
import React, { useEffect } from "react";

import { MantineColor, MantineRadius } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";

interface Props extends BoxProps, StylesApiProps, Omit<DashBaseProps, "id"> {
    /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Notification icon, replaces color line */
    icon?: React.ReactNode;
    /** Notification title, displayed before body */
    title?: React.ReactNode;
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
    message: React.ReactNode;
    /** Determines whether notification should be closed automatically,
     *  number is auto close timeout in ms, overrides `autoClose` from `Notifications`
     * */
    autoClose?: boolean | number;
    /** Action */
    action: "show" | "update" | "hide" | "clean" | "cleanQueue";
}

/** Show dynamic notifications and alerts to user, part of notifications system */
const Notification = (props: Props) => {
    const { action, setProps, ...others } = props;

    useEffect(() => {
        switch (action) {
            case "show":
                notifications.show(others);
                break;

            case "update":
                notifications.update(others);
                break;

            case "hide":
                notifications.hide(others.id);
                break;

            case "clean":
                notifications.clean();
                break;

            case "cleanQueue":
                notifications.cleanQueue();
                break;

            default:
                break;
        }
    }, [props]);
};

Notification.defaultProps = {};

export default Notification;

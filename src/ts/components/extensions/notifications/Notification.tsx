import { MantineColor, MantineRadius } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useEffect } from "react";

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
    /** intent */
    intent: "show" | "update" | "hide" | "clean" | "cleanQueue";
}

/** Notification */
const Notification = (props: Props) => {
    const { intent, setProps, ...others } = props;

    useEffect(() => {
        switch (intent) {
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

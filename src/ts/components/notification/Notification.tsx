import React from "react";
import {
    showNotification,
    updateNotification,
    hideNotification,
} from "@mantine/notifications";
import {
    MantineColor,
    MantineSize,
    MantineStylesAPIProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps } from "@mantine/core";

type Props = {
    /** Notification line or icon color */
    color?: MantineColor;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineSize;
    /** Notification icon, replaces color line */
    icon?: React.ReactNode;
    /** Notification title, displayed before body */
    title?: React.ReactNode;
    /** Notification body, place main text here */
    message: React.ReactNode;
    /** Replaces colored line or icon with Loader component */
    loading?: boolean;
    /** Adds border styles */
    withBorder?: boolean;
    /** Determines whether close button should be visible, true by default */
    withCloseButton?: boolean;
    /** Props spread to close button */
    closeButtonProps?: Record<string, any>;
    /** The ID of this component, used to identify dash components in callbacks */
    id: string;
    /** Auto close timeout in milliseconds, false to disable auto close */
    autoClose?: boolean | number;
    /** Action */
    action: "show" | "update" | "hide";
} & Omit<DashBaseProps, "id"> &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Show dynamic notifications and alerts to user, part of notifications system */
const Notification = (props: Props) => {
    const { action, setProps, ...others } = props;

    switch (action) {
        case "show":
            showNotification(others);
            break;

        case "update":
            updateNotification(others);
            break;

        case "hide":
            hideNotification(others.id);
            break;

        default:
            break;
    }

    return <div />;
};

Notification.defaultProps = {};

export default Notification;

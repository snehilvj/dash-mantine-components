import React from "react";
import { useNotifications } from "@mantine/notifications";
import PropTypes from "prop-types";
import { useDidUpdate } from "@mantine/hooks";

/**
 * Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const NotificationHandler = (props) => {
    const notification = useNotifications();
    const { task } = props;

    useDidUpdate(() => {
        if (task.command === "show") {
            notification.showNotification({ ...task.props, id: task.id });
        } else if (task.command === "update") {
            notification.updateNotification(task.id, {
                ...task.props,
                id: task.id,
            });
        } else {
            notification.hideNotification(task.id);
        }
    }, [task]);

    return <div style={{ width: 0 }} />;
};

NotificationHandler.displayName = "NotificationHandler";

NotificationHandler.defaultProps = {};

NotificationHandler.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Task for notification handler along with notification props
     */
    task: PropTypes.exact({
        command: PropTypes.oneOf(["hide", "show", "update"]).isRequired,
        id: PropTypes.string.isRequired,
        props: PropTypes.exact({
            color: PropTypes.string,
            style: PropTypes.object,
            title: PropTypes.string,
            loading: PropTypes.bool,
            message: PropTypes.string,
            autoClose: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.oneOf([false]),
            ]),
            disallowClose: PropTypes.bool,
        }),
    }),
};

export default NotificationHandler;

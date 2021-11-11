import React from "react";
import { Notification as MantineNotification } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors } from "../propTypes";

/** Show dynamic notifications and alerts to user, part of notifications system. For more information, see: https://mantine.dev/core/notification/ */
const Notification = (props) => {
    return (
        <MantineNotification
            {...omit(["children", "setProps"], props)}
            disallowClose={true}
        >
            {props.children}
        </MantineNotification>
    );
};

Notification.displayName = "Notification";

Notification.defaultProps = {};

Notification.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Notification body, place main text here */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Notification line or icon color */
    color: MantineColors,

    /** Replaces colored line or icon with Loader component */
    loading: PropTypes.bool,

    /**	Notification title, displayed before body */
    title: PropTypes.string,
};

export default Notification;

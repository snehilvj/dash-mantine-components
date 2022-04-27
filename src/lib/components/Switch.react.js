import React from "react";
import { Switch as MantineSwitch } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/switch/
 */
const Switch = (props) => {
    const { setProps, class_name, label } = props;

    const updateProps = (checked) => {
        setProps({ checked });
    };

    return (
        <MantineSwitch
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...omit(["setProps", "class_name", "label"], props)}
            className={class_name}
            label={renderDashComponent(label)}
        />
    );
};

Switch.displayName = "Switch";

Switch.defaultProps = {
    checked: false,
    persisted_props: ["checked"],
    persistence_type: "local",
};

Switch.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Checkbox color
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * A checkbox can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Checkbox label
     */
    label: PropTypes.any,

    /**
     * The inner label to be set when Switch is in an unchecked state
     */
    offLabel: PropTypes.string,

    /**
     * The inner label to be set when Switch is in the checked state
     */
    onLabel: PropTypes.string,

    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(["checked"])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(["local", "session", "memory"]),

    /**
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Predefined label font-size and checkbox width and height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * State of check box
     */
    checked: PropTypes.bool,
};

export default Switch;

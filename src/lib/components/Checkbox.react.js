import React from "react";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
 */
const Checkbox = (props) => {
    const { setProps, class_name } = props;

    const updateProps = (checked) => {
        setProps({ checked });
    };

    return (
        <MantineCheckbox
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...omit(
                [
                    "setProps",
                    "class_name",
                    "persistence",
                    "persisted_props",
                    "persistence_type",
                ],
                props
            )}
            className={class_name}
        />
    );
};

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
    checked: false,
    persisted_props: ["checked"],
    persistence_type: "local",
};

Checkbox.propTypes = {
    /**
     * State of check box
     */
    checked: PropTypes.bool,

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
    label: PropTypes.string,

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
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined label font-size and checkbox width and height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Check/uncheck transition duration, set to 0 to disable all transitions
     */
    transitionDuration: PropTypes.number,
};

export default Checkbox;

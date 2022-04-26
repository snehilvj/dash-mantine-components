import React from "react";
import { SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
 */
const SegmentedControl = (props) => {
    const { setProps, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineSegmentedControl
            onChange={updateProps}
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

SegmentedControl.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark
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
     * Data based on which controls are rendered
     */
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * The option's label
                 */
                label: PropTypes.string.isRequired,
                /**
                 * Option's value
                 */
                value: PropTypes.string.isRequired,
            })
        ),
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,

    /**
     * Disabled input state
     */
    disabled: PropTypes.bool,

    /**
     * True if component should have 100% width
     */
    fullWidth: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Display Vertically or horizontally
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(["value"])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(["local", "session", "memory"]),

    /**
     * Border-radius from theme or number to set border-radius in px
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
     * Controls font-size, paddings and height
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Transition duration in ms, set to 0 to turn off transitions
     */
    transitionDuration: PropTypes.number,

    /**
     * Transition timing function for all transitions, defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Current selected value
     */
    value: PropTypes.string,
};

export default SegmentedControl;

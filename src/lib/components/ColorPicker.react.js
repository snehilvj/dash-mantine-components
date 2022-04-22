import React from "react";
import { ColorPicker as MantineColorPicker } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/ColorPicker/
 */
const ColorPicker = (props) => {
    const { setProps, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineColorPicker
            onChange={updateProps}
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

ColorPicker.displayName = "ColorPicker";

ColorPicker.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

ColorPicker.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Should interactive elements be focusable
     */
    focusable: PropTypes.bool,

    /**
     * Color format
     */
    format: PropTypes.oneOf(["hex", "rgba", "rgb", "hsl", "hsla"]),

    /**
     * 	Force picker to take 100% width of its container
     */
    fullWidth: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

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
     * Predefined component size
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
     * Predefined colors
     */
    swatches: PropTypes.arrayOf(PropTypes.string),

    /**
     * 	Number of swatches displayed in one row
     */
    swatchesPerRow: PropTypes.number,

    /**
     * Controlled component value
     */
    value: PropTypes.string,

    /**
     * Set to false to display swatches only
     */
    withPicker: PropTypes.bool,
};

export default ColorPicker;

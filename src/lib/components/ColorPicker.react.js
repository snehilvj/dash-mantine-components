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

ColorPicker.defaultProps = {};

ColorPicker.propTypes = {
    /**
     * Alpha slider aria-label
     */
    alphaLabel: PropTypes.string,

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
     * Hue slider aria-label
     */
    hueLabel: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Saturation slider aria-label
     */
    saturationLabel: PropTypes.string,

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

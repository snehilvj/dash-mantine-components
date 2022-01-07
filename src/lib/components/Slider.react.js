import React, { useState } from "react";
import { Slider as MantineSlider } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const Slider = (props) => {
    const { setProps, value, class_name, label } = props;
    const [state, setState] = useState(value);

    const updateProps = () => {
        setProps({ value: state });
    };

    useDidUpdate(() => setState(value), [value]);

    const onChange = (val) => {
        setState(val);
        setProps({ drag_value: val });
    };

    return (
        <MantineSlider
            onMouseUp={updateProps}
            onChange={onChange}
            className={class_name}
            {...omit(["setProps", "value", "class_name", "label"], props)}
            value={state}
            // eslint-disable-next-line no-eval
            label={eval(label)}
        />
    );
};

Slider.displayName = "Slider";

Slider.defaultProps = {};

Slider.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Slider color
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
     * Current drag value for controlled slider
     */
    drag_value: PropTypes.number,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Function to generate label or any react node to render instead, set to null to disable label
     */
    label: PropTypes.string,

    /**
     * If true label will be not be hidden when user stops dragging
     */
    labelAlwaysOn: PropTypes.bool,

    /**
     * Marks which will be placed on the track
     */
    marks: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * The option's label
             */
            label: PropTypes.string,
            /**
             * option's value
             */
            value: PropTypes.number.isRequired,
        })
    ),

    /**
     * Maximum possible value
     */
    max: PropTypes.number,

    /**
     * Minimal possible value
     */
    min: PropTypes.number,

    /**
     * Track border-radius from theme or number to set border-radius in px
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
     * If true slider label will appear on hover
     */
    showLabelOnHover: PropTypes.bool,

    /**
     * Predefined track and thumb size, number to set sizes in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Number by which value will be incremented/decremented with thumb drag and arrows
     */
    step: PropTypes.number,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Current value for controlled slider
     */
    value: PropTypes.number,
};

export default Slider;

import React from "react";
import { Slider as MantineSlider } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const Slider = (props) => {
    const { setProps, class_name } = props;
    let nProps = omit(["setProps", "class_name"], props);
    nProps = renderDashComponents(nProps, ["thumbChildren"]);

    const onChange = (value) => {
        setProps({ value });
    };

    return (
        <MantineSlider onChange={onChange} className={class_name} {...nProps} />
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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * If true label will be not be hidden when user stops dragging
     */
    labelAlwaysOn: PropTypes.bool,

    /**
     * Label appear/disappear transition
     */
    labelTransition: PropTypes.oneOf([
        "fade",
        "skew-up",
        "skew-down",
        "rotate-right",
        "rotate-left",
        "slide-down",
        "slide-up",
        "slide-right",
        "slide-left",
        "scale-y",
        "scale-x",
        "scale",
        "pop",
        "pop-top-left",
        "pop-top-right",
        "pop-bottom-left",
        "pop-bottom-right",
    ]),

    /**
     * Label appear/disappear transition duration in ms
     */
    labelTransitionDuration: PropTypes.number,

    /**
     * Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction
     */
    labelTransitionTimingFunction: PropTypes.string,

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
     * Hidden input name, use with uncontrolled variant
     */
    name: PropTypes.string,

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
     * Thumb children, can be used to add icon
     */
    thumbChildren: PropTypes.any,

    /**
     * Current value for controlled slider
     */
    value: PropTypes.number,
};

export default Slider;

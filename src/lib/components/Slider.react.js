import React, { useState } from "react";
import { Slider as MantineSlider } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const Slider = (props) => {
    const { setProps, class_name, updatemode, value } = props;
    let nProps = omit(["setProps", "class_name", "value"], props);
    nProps = renderDashComponents(nProps, ["thumbChildren"]);

    const [val, setVal] = useState(value);

    return (
        <MantineSlider
            className={class_name}
            {...nProps}
            value={val}
            onChange={(value) => {
                setVal(value);
                if (updatemode === "drag") {
                    setProps({ value });
                }
            }}
            onChangeEnd={(value) => {
                if (updatemode === "mouseup") {
                    setProps({ value });
                }
            }}
        />
    );
};

Slider.displayName = "Slider";

Slider.defaultProps = {
    updatemode: "mouseup",
    persisted_props: ["value"],
    persistence_type: "local",
};

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
     * Disables slider
     */
    disabled: PropTypes.bool,

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
     * Amount of digits after the decimal point
     */
    precision: PropTypes.number,

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
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

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
     * Determines when the component should update its value property. If mouseup (the default) then the slider will only trigger its value when the user has finished dragging the slider. If drag, then the slider will update its value continuously as it is being dragged.
     */
    updatemode: PropTypes.oneOf(["mouseup", "drag"]),

    /**
     * Current value for controlled slider
     */
    value: PropTypes.number,
};

export default Slider;

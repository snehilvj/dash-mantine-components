import React from "react";
import { SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import {
    MantineColors,
    NumberSizes,
    SimpleOptionsType,
    Sizes,
} from "../propTypes";

/** Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/ */
const SegmentedControl = (props) => {
    const { setProps } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineSegmentedControl
            onChange={updateProps}
            {...omit(["setProps"], props)}
        />
    );
};

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

SegmentedControl.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark */
    color: MantineColors,

    /** Data based on which controls are rendered */
    data: SimpleOptionsType.isRequired,

    /**	True if component should have 100% width */
    fullWidth: PropTypes.bool,

    /** Border-radius from theme or number to set border-radius in px */
    radius: NumberSizes,

    /**	Controls font-size, paddings and height */
    size: Sizes,

    /** Inline style override */
    style: PropTypes.object,

    /** Current selected value */
    value: PropTypes.string,
};

export default SegmentedControl;

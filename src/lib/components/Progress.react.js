import React from "react";
import { Progress as MantineProgress } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors, NumberSizes, Sizes } from "../propTypes";

/** Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/ */
const Progress = (props) => {
    return <MantineProgress {...omit(["setProps"], props)} />;
};

Progress.displayName = "Progress";

Progress.defaultProps = {};

Progress.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Progress color from theme */
    color: MantineColors,

    /** Predefined progress radius from theme.radius or number for height in px */
    radius: NumberSizes,

    /** Predefined progress height or number for height in px */
    size: Sizes,

    /** Replaces value if present, renders multiple sections instead of single one */
    sections: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.number,
            color: MantineColors,
        })
    ),

    /** Adds stripes */
    striped: PropTypes.bool,

    /** Current value for controlled slider */
    value: PropTypes.number,
};

export default Progress;

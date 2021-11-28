import React from "react";
import { RadioGroup as MantineRadioGroup, Radio } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors, SimpleOptionsType, Sizes } from "../propTypes";

/** Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/ */
const RadioGroup = (props) => {
    const { setProps, data } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineRadioGroup
            onChange={updateProps}
            {...omit(["setProps", "data"], props)}
        >
            {data.map((radio, index) => {
                return (
                    <Radio value={radio.value} key={index}>
                        {radio.label}
                    </Radio>
                );
            })}
        </MantineRadioGroup>
    );
};

RadioGroup.displayName = "RadioGroup";

RadioGroup.defaultProps = {};

RadioGroup.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** RadioGroup options */
    data: SimpleOptionsType,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	Active radio color from theme.colors */
    color: MantineColors,

    /** Input description, displayed after label */
    description: PropTypes.string,

    /**	Displays error message after input */
    error: PropTypes.string,

    /** Input label, displayed before input */
    label: PropTypes.string,

    /** Adds red asterisk on the right side of label */
    required: PropTypes.bool,

    /**	Predefined label fontSize, radio width, height and border-radius */
    size: Sizes,

    /** Spacing between radios in horizontal variant */
    spacing: Sizes,

    /** Inline style override */
    style: PropTypes.object,

    /** Value of currently selected radio (controlled) */
    value: PropTypes.string,

    /**	Radios position */
    variant: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default RadioGroup;

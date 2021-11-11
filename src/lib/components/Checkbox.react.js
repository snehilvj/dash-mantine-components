import React from "react";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors, Sizes } from "../propTypes";

/** Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/checkbox/ */
const Checkbox = (props) => {
    const { setProps } = props;

    const updateProps = (checked) => {
        setProps({ checked });
    };

    return (
        <MantineCheckbox
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...omit(["setProps"], props)}
        />
    );
};

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
    checked: false,
};

Checkbox.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** A checkbox can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** State of check box */
    checked: PropTypes.bool,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Checkbox color */
    color: MantineColors,

    /**	Checkbox label */
    label: PropTypes.string,

    /**	Predefined label font-size and checkbox width and height in px */
    size: Sizes,

    /** Inline style override */
    style: PropTypes.object,
};

export default Checkbox;

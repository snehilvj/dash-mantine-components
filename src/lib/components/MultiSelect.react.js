import React from "react";
import { MultiSelect as MatineMultiSelect } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { NumberSizes, OptionsType, Sizes } from "../propTypes";

/** Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/ */
const MultiSelect = (props) => {
    const { setProps, options } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MatineMultiSelect
            {...omit(["setProps", "options"], props)}
            data={options}
            onChange={updateProps}
        />
    );
};

MultiSelect.displayName = "MultiSelect";

MultiSelect.defaultProps = {
    searchable: true,
    placeholder: "Select items",
    options: [],
    nothingFound: "No match found",
};

MultiSelect.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Allow to clear value */
    clearable: PropTypes.bool,

    /** Select options used to renderer items in dropdown */
    options: OptionsType,

    /** Input description, displayed after label */
    description: PropTypes.string,

    /** The component can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** Displays error message after input */
    error: PropTypes.string,

    /** Input label, displayed before input */
    label: PropTypes.string,

    /** Limit amount of items displayed at a time for searchable select */
    limit: PropTypes.number,

    /** Maximum dropdown height in px */
    maxDropdownHeight: PropTypes.number,

    /**	Nothing found label */
    nothingFound: PropTypes.string,

    /** Placeholder, displayed when date is not selected */
    placeholder: PropTypes.string,

    /** Input border-radius from theme or number to set border-radius in px */
    radius: NumberSizes,

    /** Adds red asterisk on the right side of label */
    required: PropTypes.bool,

    /** Set to true to enable search */
    searchable: PropTypes.bool,

    /**	Input size */
    size: Sizes,

    /** Inline style override */
    style: PropTypes.object,

    /** Selected value */
    value: PropTypes.arrayOf(PropTypes.string),
};

export default MultiSelect;

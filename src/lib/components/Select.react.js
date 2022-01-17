import React from "react";
import { Select as MatineSelect } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Custom searchable select. For more information, see: https://mantine.dev/core/select/
 */
const Select = (props) => {
    const { setProps, data, class_name } = props;
    let nProps = omit(["setProps", "data", "class_name"], props);
    nProps = renderDashComponents(nProps, [
        "label",
        "description",
        "error",
        "icon",
        "rightSection",
    ]);

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MatineSelect
            {...nProps}
            className={class_name}
            data={data}
            onChange={updateProps}
        />
    );
};

Select.displayName = "Select";

Select.defaultProps = {
    data: [],
};

Select.propTypes = {
    /**
     * Allow deselecting items on click
     */
    allowDeselect: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Allow to clear value
     */
    clearable: PropTypes.bool,

    /**
     * Select options used to renderer items in dropdown
     */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * The option's label
             */
            label: PropTypes.string.isRequired,
            /**
             * Option's value
             */
            value: PropTypes.string.isRequired,
            /**
             * If true, this option is disabled and cannot be selected
             */
            disabled: PropTypes.bool,
        })
    ),

    /**
     * Input description, displayed after label
     */
    description: PropTypes.any,

    /**
     * The component can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Dropdown positioning behavior
     */
    dropdownPosition: PropTypes.oneOf(["bottom", "top", "flip"]),

    /**
     * Displays error message after input
     */
    error: PropTypes.any,

    /**
     * Adds icon on the left side of input
     */
    icon: PropTypes.any,

    /**
     * Width of icon section in px
     */
    iconWidth: PropTypes.number,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Initial dropdown opened state
     */
    initiallyOpened: PropTypes.bool,

    /**
     * Sets border color to red and aria-invalid=true on input element
     */
    invalid: PropTypes.bool,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.any,

    /**
     * Limit amount of items displayed at a time for searchable select
     */
    limit: PropTypes.number,

    /**
     * Maximum dropdown height in px
     */
    maxDropdownHeight: PropTypes.number,

    /**
     * Will input have multiple lines?
     */
    multiline: PropTypes.bool,

    /**
     * Nothing found label
     */
    nothingFound: PropTypes.string,

    /**
     * Placeholder, displayed when date is not selected
     */
    placeholder: PropTypes.string,

    /**
     * Input border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
     * Adds red asterisk on the right side of label
     */
    required: PropTypes.bool,

    /**
     * Right section of input, similar to icon but on the right
     */
    rightSection: PropTypes.any,

    /**
     * Width of right section, is used to calculate input padding-right
     */
    rightSectionWidth: PropTypes.number,

    /**
     * Set to true to enable search
     */
    searchable: PropTypes.bool,

    /**
     * Select highlighted item on blur
     */
    selectOnBlur: PropTypes.bool,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Dropdown shadow from theme or any value to set box-shadow
     */
    shadow: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Whether to switch item order and keyboard navigation on dropdown position flip
     */
    switchDirectionOnFlip: PropTypes.bool,

    /**
     * Dropdown appear/disappear transition
     */
    transition: PropTypes.oneOf([
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
     * Dropdown appear/disappear transition duration
     */
    transitionDuration: PropTypes.number,

    /**
     * Dropdown body transition timing function, defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Selected value
     */
    value: PropTypes.string,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    /**
     * Whether to render the dropdown in a Portal
     */
    withinPortal: PropTypes.bool,

    /**
     * Dropdown z-index
     */
    zIndex: PropTypes.number,
};

export default Select;

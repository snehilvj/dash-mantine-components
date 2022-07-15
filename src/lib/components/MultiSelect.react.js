import React from "react";
import { MultiSelect as MatineMultiSelect } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
 */
const MultiSelect = (props) => {
    const { setProps, data, class_name, creatable, createLabelPrefix } = props;
    const [createdData, setCreatedData] = React.useState([])

    let nProps = omit(
        [
            "setProps",
            "data",
            "class_name",
            "persistence",
            "persisted_props",
            "persistence_type",
            "createLabelPrefix",
        ],
        props
    );
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

    const getCreateLabel = creatable ? (query) => `${createLabelPrefix}${query}`: null

    return (
        <MatineMultiSelect
            {...nProps}
            data={[...data, ...createdData]}
            onChange={updateProps}
            className={class_name}
            getCreateLabel={getCreateLabel}
            onCreate={(query) => setCreatedData((current) => [...current, query])}
        />
    );
};

MultiSelect.displayName = "MultiSelect";

MultiSelect.defaultProps = {
    data: [],
    persisted_props: ["value"],
    persistence_type: "local",
};

MultiSelect.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Clear search field value on blur
     */
    clearSearchOnBlur: PropTypes.bool,

    /**
     * Clear search value when item is selected
     */
    clearSearchOnChange: PropTypes.bool,

    /**
     * Allow to clear value
     */
    clearable: PropTypes.bool,

    /**
     * Allow creatable option
     */
    creatable: PropTypes.bool,

    /**
     * Creatable option label prefix
     */
     createLabelPrefix: PropTypes.string,

    /**
     * Select options used to renderer items in dropdown
     */
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * The option's label
                 */
                label: PropTypes.string,
                /**
                 * Option's value
                 */
                value: PropTypes.string.isRequired,
                /**
                 * If true, this option is disabled and cannot be selected
                 */
                disabled: PropTypes.bool,
                /**
                 * Item Groups
                 */
                group: PropTypes.string,
            })
        ),
        PropTypes.arrayOf(PropTypes.string),
    ]),

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
     * Limit amount of items selected
     */
    maxSelectedValues: PropTypes.number,

    /**
     * Nothing found label
     */
    nothingFound: PropTypes.string,

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
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Set to true to enable search
     */
    searchable: PropTypes.bool,

    /**
     * Select highlighted item on blur
     */
    selectOnBlur: PropTypes.bool,

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
    value: PropTypes.arrayOf(PropTypes.string),

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    /**
     * Dropdown z-index
     */
    zIndex: PropTypes.number,
};

export default MultiSelect;

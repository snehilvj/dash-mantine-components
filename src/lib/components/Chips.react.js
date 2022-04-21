import React from "react";
import { Chips as MantineChips, Chip } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/
 */
const Chips = (props) => {
    const { setProps, data, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineChips
            onChange={updateProps}
            {...omit(["setProps", "data", "class_name"], props)}
            className={class_name}
        >
            {data.map((chip, index) => {
                return (
                    <Chip
                        disabled={chip.disabled}
                        value={chip.value}
                        key={index}
                    >
                        {chip.label}
                    </Chip>
                );
            })}
        </MantineChips>
    );
};

Chips.displayName = "Chips";

Chips.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

Chips.propTypes = {
    /**
     * Defines align-items css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Active chip color, defaults to theme.primaryColor
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
     * Chips
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
     * Defines flex-direction property, row for horizontal, column for vertical
     */
    direction: PropTypes.oneOf(["row", "column"]),

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    grow: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Allow multiple values to be picked
     */
    multiple: PropTypes.bool,

    /**
     * Defined flex-wrap property
     */
    noWrap: PropTypes.bool,

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
     * Defines justify-content property
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Chip border-radius from theme or number to set value in px
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
     * Predefined chip size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Spacing between chips from theme or number to set value in px
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controlled component value
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),

    /**
     * Controls chip appearance, defaults to filled with dark theme and to outline in light theme
     */
    variant: PropTypes.oneOf(["outline", "filled"]),
};

export default Chips;

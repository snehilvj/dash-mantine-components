import React from "react";
import { Chips as MantineChips, Chip } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/
 */
const Chips = (props) => {
    const { setProps, data } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineChips
            onChange={updateProps}
            {...omit(["setProps", "data"], props)}
        >
            {data.map((chip, index) => {
                return (
                    <Chip value={chip.value} key={index}>
                        {chip.label}
                    </Chip>
                );
            })}
        </MantineChips>
    );
};

Chips.displayName = "Chips";

Chips.defaultProps = {};

Chips.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Defines align-items css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

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
     * Defines flex-direction property, row for horizontal, column for vertical
     */
    direction: PropTypes.oneOf(["row", "column"]),

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    grow: PropTypes.bool,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Allow multiple values to be picked
     */
    multiple: PropTypes.bool,

    /**
     * Defined flex-wrap property
     */
    noWrap: PropTypes.bool,

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

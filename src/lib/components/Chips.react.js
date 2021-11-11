import React from "react";
import { Chips as MantineChips, Chip } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import {
    AlignContentProperty,
    Directions,
    OptionsType,
    MantineColors,
    NumberSizes,
    Positions,
    Sizes,
} from "../propTypes";

/** Alternative to Select and RadioGroup */
const Chips = (props) => {
    const { setProps, options } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineChips
            onChange={updateProps}
            {...omit(["setProps", "options"], props)}
        >
            {options.map((chip, index) => {
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Defines align-items css property */
    align: AlignContentProperty,

    /** Chips */
    options: OptionsType,

    /**	Active chip color, defaults to theme.primaryColor */
    color: MantineColors,

    /**	Defines flex-direction property, row for horizontal, column for vertical */
    direction: Directions,

    /**	Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow: PropTypes.bool,

    // /**	Allow multiple values to be picked */
    // multiple: PropTypes.bool,

    /**	Defined flex-wrap property */
    noWrap: PropTypes.bool,

    /**	Defines justify-content property */
    position: Positions,

    /** Chip border-radius from theme or number to set value in px */
    radius: NumberSizes,

    /** Predefined chip size */
    size: Sizes,

    /** Spacing between chips from theme or number to set value in px */
    spacing: NumberSizes,

    /** Inline style override */
    style: PropTypes.object,

    /** Controlled component value */
    value: PropTypes.string,

    /**	Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
    variant: PropTypes.oneOf(["outline", "filled"]),
};

export default Chips;

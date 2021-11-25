import React from "react";
import PropTypes from "prop-types";
import { NumberSizes, Sizes } from "../propTypes";
import { Card as MantineCard } from "@mantine/core";
import { omit } from "ramda";

/** Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. For more information, see: https://mantine.dev/core/card/ */
const Card = (props) => {
    return (
        <MantineCard {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineCard>
    );
};

Card.displayName = "Card";

Card.defaultProps = {};

Card.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Card content */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Predefined padding value from theme.spacing or number for padding in px */
    padding: NumberSizes,

    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius: NumberSizes,

    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow: Sizes,

    /** Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme */
    withBorder: PropTypes.bool,
};

export default Card;

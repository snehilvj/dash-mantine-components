import React from "react";
import PropTypes from "prop-types";
import { Card } from "@mantine/core";
import { omit } from "ramda";

/** Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. For more information, see: https://mantine.dev/core/card/ */
const CardSection = (props) => {
    return (
        <Card.Section {...omit(["children", "setProps"], props)}>
            {props.children}
        </Card.Section>
    );
};

CardSection.displayName = "CardSection";

CardSection.defaultProps = {};

CardSection.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Section content */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,
};

export default CardSection;

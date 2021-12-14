import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Title as MantineTitle } from "@mantine/core";

/**
 * h1-h6 headings. For more information, see: https://mantine.dev/core/title/
 */
const Title = (props) => {
    return (
        <MantineTitle {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineTitle>
    );
};

Title.displayName = "Title";

Title.defaultProps = {};

Title.propTypes = {
    /**
     * Sets text-align css property
     */
    align: PropTypes.oneOf(["left", "right", "center"]),

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Defines component and styles which will be used
     */
    order: PropTypes.number,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Title;

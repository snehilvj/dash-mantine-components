import React from "react";
import { Stack as MantineStack } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Compose elements and components in vertical flex container. For more information, see: https://mantine.dev/core/Stack/
 */
const Stack = (props) => {
    const { children, class_name } = props;

    return (
        <MantineStack
            className={class_name}
            {...omit(["setProps", "children", "class_name"], props)}
        >
            {React.Children.map(children, (child, index) => {
                return <div key={index}>{child}</div>;
            })}
        </MantineStack>
    );
};

Stack.displayName = "Stack";

Stack.defaultProps = {};

Stack.propTypes = {
    /**
     * 	Sets text-align css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Primary content inside the stack
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Set grid justify-content property
     */
    justify: PropTypes.oneOf([
        "space-between",
        "space-around",
        "center",
        "flex-end",
        "flex-start",
    ]),

    /**
     * Spacing between children
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style
     */
    style: PropTypes.object,
};

export default Stack;

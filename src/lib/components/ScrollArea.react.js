import React from "react";
import { ScrollArea as MantineScrollArea } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * A port of the ScrollArea component. For more information, see: https://mantine.dev/core/table/
 */
const ScrollArea = (props) => {
    const { class_name } = props;

    return (
        <MantineScrollArea
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineScrollArea>
    );
};

ScrollArea.displayName = "ScrollArea";

ScrollArea.defaultProps = {};

ScrollArea.propTypes = {
    /**
     * ScrollArea children
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Reading direction of the scroll area
     */
    dir: PropTypes.oneOf(["ltr", "rtl"]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Should scrollbars be offset with padding
     */
    offsetScrollbars: PropTypes.bool,

    /**
     * Scroll hide delay in ms, for scroll and hover types only
     */
    scrollHideDelay: PropTypes.number,

    /**
     * Scrollbar size in px
     */
    scrollbarSize: PropTypes.number,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Scrollbars type
     */
    type: PropTypes.oneOf(["auto", "scroll", "always", "hover"]),
};

export default ScrollArea;

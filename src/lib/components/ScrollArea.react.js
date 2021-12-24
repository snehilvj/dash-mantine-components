import React from "react";
import { ScrollArea as MantineScrollArea } from "@mantine/core";
import PropTypes from "prop-types";
import { pick } from "ramda";

/**
 * A port of the ScrollArea component. For more information, see: https://mantine.dev/core/table/
 */
const ScrollArea = (props) => {
    return (
        <MantineScrollArea
            {...pick(["dir", "offsetScrollbars", "scrollHideDelay", "scrollbarSize", "type"], props)}
        >
            {props.children}
        </MantineScrollArea>
    );
};

ScrollArea.displayName = "ScrollArea";

ScrollArea.defaultProps = {
    dir: "ltr",
    offsetScrollbars: false,
    scrollHideDelay: 1000,
    scrollbarSize: 12,
    type: "hover"
};

ScrollArea.propTypes = {
    /**
     * Reading direction of the scroll area
     */
     dir: PropTypes.oneOf(["ltr", "rtl"]),

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
     * Scrollbars type
     */
     type: PropTypes.oneOf(["auto", "scroll", "always", "hover"]),

    // /**
    //  * Get viewport ref
    //  */
    //  viewportRef: ForwardedRef<HTMLDivElement>,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Table children
     */
    children: PropTypes.node
};

export default ScrollArea;
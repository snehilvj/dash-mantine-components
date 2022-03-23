import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Affix as MantineAffix } from "@mantine/core";

/**
 * Render react node inside portal at fixed position. For more information, see: https://mantine.dev/core/affix/
 */
const Affix = (props) => {
    const class_name = { props };

    return (
        <MantineAffix
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineAffix>
    );
};

Affix.displayName = "Affix";

Affix.defaultProps = {
    position: { bottom: 0, right: 0 },
};

Affix.propTypes = {
    /**
     * Any react node that should trigger tooltip
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Fixed position in px
     */
    position: PropTypes.exact({
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /** Element where portal should be rendered, by default new div element is created and appended to document.body */
    target: PropTypes.string,

    /**
     * Root element z-index property
     */
    zIndex: PropTypes.string,
};

export default Affix;

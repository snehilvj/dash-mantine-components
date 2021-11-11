import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Affix as MantineAffix } from "@mantine/core";

/** Renders Affix at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/affix/ */
const Affix = (props) => {
    return (
        <MantineAffix {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineAffix>
    );
};

Affix.displayName = "Affix";

Affix.defaultProps = {};

Affix.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Any react node that should trigger tooltip */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Fixed position in px */
    position: PropTypes.exact({
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),

    /** Inline style override */
    style: PropTypes.object,
};

export default Affix;

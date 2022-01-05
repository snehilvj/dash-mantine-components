import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Header as MantineHeader } from "@mantine/core";

/**
 * Header. For more information, see: https://mantine.dev/core/app-shell/
 */
const Header = (props) => {
    const { class_name } = props;

    return (
        <MantineHeader
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineHeader>
    );
};

Header.displayName = "Header";

Header.defaultProps = {};

Header.propTypes = {
    /**
     *  Header content
     */
    children: PropTypes.string,

    /**
     *  Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     *  Header height
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     *  Header padding from theme.spacing or number to set padding in px
     */
    padding: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     *  Changes position to fixed, controlled by AppShell component if rendered inside
     */
    fixed: PropTypes.bool,

    /**
     *  Control top, left, right or bottom position values, controlled by AppShell component if rendered inside
     */
    position: PropTypes.exact({
        top: PropTypes.number,
        left: PropTypes.number,
        bottom: PropTypes.number,
        right: PropTypes.number,
    }),

    /**
     *  Inline style override
     */
    style: PropTypes.object,

    /**
     *  z-index
     */
    zIndex: PropTypes.number,
};

export default Header;

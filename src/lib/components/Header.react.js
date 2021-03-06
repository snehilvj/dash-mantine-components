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
    children: PropTypes.node,

    /**
     *  Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     *  Changes position to fixed, controlled by AppShell component if rendered inside
     */
    fixed: PropTypes.bool,

    /**
     *  Header height
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

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

    /**
     * Margin props
     */
    m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    my: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Header;

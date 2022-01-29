import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";

/**
 * Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
 */
const Breadcrumbs = (props) => {
    const { children, separator, class_name } = props;

    return (
        <MantineBreadcrumbs separator={separator} className={class_name}>
            {children}
        </MantineBreadcrumbs>
    );
};

Breadcrumbs.displayName = "Breadcrumbs";

Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
    /**
     * React nodes that should be separated
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
     * Separator between breadcrumbs
     */
    separator: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Breadcrumbs;

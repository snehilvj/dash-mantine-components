import React from "react";
import PropTypes from "prop-types";
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";

/**
 * Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
 */
const Breadcrumbs = (props) => {
    const { items, separator } = props;

    return (
        <MantineBreadcrumbs separator={separator}>
            {items.map((link, index) => {
                return (
                    <Anchor href={link.href} key={index}>
                        {link.title}
                    </Anchor>
                );
            })}
        </MantineBreadcrumbs>
    );
};

Breadcrumbs.displayName = "Breadcrumbs";

Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Separator between breadcrumbs
     */
    separator: PropTypes.string,

    /**
     * Link items
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};

export default Breadcrumbs;

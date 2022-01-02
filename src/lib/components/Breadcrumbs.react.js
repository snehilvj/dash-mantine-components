import React from "react";
import PropTypes from "prop-types";
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";

/**
 * Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
 */
const Breadcrumbs = (props) => {
    const { items, separator, class_name } = props;

    return (
        <MantineBreadcrumbs separator={separator} className={class_name}>
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
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

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
     * Separator between breadcrumbs
     */
    separator: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Breadcrumbs;

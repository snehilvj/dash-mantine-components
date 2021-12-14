import React from "react";
import { Tabs as MantineTabs, Tab } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Switch between different views. For more information, see: https://mantine.dev/core/tabs/
 */
const Tabs = (props) => {
    const { setProps, children } = props;

    const onTabChange = (active) => {
        setProps({ active });
    };

    return (
        <MantineTabs {...omit(["setProps"], props)} onTabChange={onTabChange}>
            {children.map((child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <Tab {...omit(["children"], childProps)} key={index}>
                        {child}
                    </Tab>
                );
            })}
        </MantineTabs>
    );
};

Tabs.displayName = "Tabs";

Tabs.defaultProps = {};

Tabs.propTypes = {
    /**
     * Index of active tab, overrides internal state
     */
    active: PropTypes.number,

    /**
     * <Tab /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Active tab color from theme.colors
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * True if tabs should take all available space
     */
    grow: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Controls tab orientation
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Tab controls position
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Controls tab content padding-top
     */
    tabPadding: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controls appearance
     */
    variant: PropTypes.oneOf(["default", "outline", "pills"]),
};

export default Tabs;

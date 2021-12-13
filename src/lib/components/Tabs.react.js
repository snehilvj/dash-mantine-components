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
                    <Tab
                        label={childProps.label}
                        disabled={childProps.disabled}
                        key={index}
                        className={childProps.className}
                    >
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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

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

    /**
     * Controls tab orientation
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Tab controls position
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Controls tab content padding-top
     */
    tabPadding: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Controls appearance
     */
    variant: PropTypes.oneOf(["default", "outline", "pills"]),

    /**
     * Index of active tab, overrides internal state
     */
    active: PropTypes.number,
};

export default Tabs;

import React from "react";
import { Tabs as MantineTabs, Tab } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Switch between different views. For more information, see: https://mantine.dev/core/tabs/
 */
const Tabs = (props) => {
    const { setProps, children, class_name } = props;

    const onTabChange = (active) => {
        setProps({ active });
    };

    return (
        <MantineTabs
            {...omit(["setProps", "class_name"], props)}
            onTabChange={onTabChange}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <Tab
                        key={index}
                        className={childProps.class_name}
                        icon={renderDashComponent(childProps.icon)}
                        disabled={childProps.disabled}
                        label={renderDashComponent(childProps.label)}
                        id={childProps.id}
                    >
                        {child}
                    </Tab>
                );
            })}
        </MantineTabs>
    );
};

Tabs.displayName = "Tabs";

Tabs.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

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
    class_name: PropTypes.string,

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
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(["value"])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(["local", "session", "memory"]),

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

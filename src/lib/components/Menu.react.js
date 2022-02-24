import { Menu as MantineMenu, Divider } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from 'react';
import { renderDashComponents } from "dash-extensions-js";

const Menu = (props) => {

    const { children } = props

    return (
        <MantineMenu
            {...omit(["children", "setProps"], props)}
        >
            {React.Children.map(children, (child, index) => {

                const childType = child.props._dashprivate_layout.type;
                const childProps = child.props._dashprivate_layout.props;
                // const renderedProps = renderDashComponents(
                //     omit(["children"], childProps),
                //     ["icon"]
                // );
                if (childType === "MenuItem") {
                    return (
                        <MantineMenu.Item {...omit(["children"], childProps)} key={index}>
                            {childProps.children}
                        </MantineMenu.Item>
                    );
                } else if (childType === "MenuLabel") {
                    return (
                        <MantineMenu.Label key={index}>
                            {childProps.children}
                        </MantineMenu.Label>
                    );
                } else if (childType === "Divider") {
                    return (
                        <Divider />
                    );
                };
                return (
                    <MantineMenu.Item  {...omit(["children"], childProps)} key={index}>
                        {childProps.children}
                    </MantineMenu.Item>
                );
            })}
        </MantineMenu>
    );
}

Menu.displayName = "Menu";

Menu.defaultProps = {};

Menu.propTypes = {

    /**
    * 	Arrow distance to the left/right * arrowSize
    */
    arrowDistance: PropTypes.number,
    /**
    * Arrow size in px
    */
    arrowSize: PropTypes.number,
    /**
    * dmc.MenuItem() and dmc.Divider() components only, children are passed to MenuBody component
    */
    children: PropTypes.node,
    /**
     * Should menu close on item click
    */
    closeOnItemClick: PropTypes.bool,
    /**
     * Close menu on scroll
    */
    closeOnScroll: PropTypes.bool,
    /**
     * Control prop to get element ref
    */
    controlRefProp: PropTypes.string,
    /**
     * Close delay for hover trigger
    */
    delay: PropTypes.number,
    /**
     * Unmount transition duration in ms
    */
    exitTransitionDuration: PropTypes.number,
    /**
     * Spacing between element and popper in px
    */
    gutter: PropTypes.number,
    /**
     * 	Menu button aria-label and title props
    */
    menuButtonLabel: PropTypes.string,
    /**
     * Id attribute of menu
    */
    menuId: PropTypes.string,
    /**
     * Called every time menu is closed
    */
    onClose: PropTypes.func,
    /**
     * 	Called every time menu is opened
    */
    onOpen: PropTypes.func,
    /**
     * Use opened and onClose props to setup controlled menu
    */
    opened: PropTypes.bool,
    /**
     * Placement relative to reference element
    */
    placement: PropTypes.oneOf(["center", "end", "start"]),
    /**
     * Position relative to reference element
    */
    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),
    /**
     * Menu body and items border-radius
    */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
     * Predefined shadow from theme or box-shadow value
    */
    shadow: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.string
    ]),
    /**
     * Predefined menu width or number for width in px
    */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["auto", "xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
     * Mount transition duration in ms
    */
    transitionDuration: PropTypes.number,
    /**
     * Mount/unmount transition timing function,
     *  defaults to theme.transitionTimingFunction
    */
    transitionTimingFunction: PropTypes.string,
    /**
     * 	Should focus be trapped when menu is opened
    */
    trapFocus: PropTypes.bool,
    /**
     * Event which should open menu
    */
    trigger: PropTypes.oneOf(["hover", "click"]),
    /**
     * Renders arrow if true
    */
    withArrow: PropTypes.bool,
    /**
     * Whether to render the dropdown in a Portal
    */
    withinPortal: PropTypes.bool,
    /**
     * 	Menu body z-index
    */
    zIndex: PropTypes.number,
    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,
}

export default Menu;



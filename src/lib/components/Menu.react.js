import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from 'react';
import { renderDashComponents } from "dash-extensions-js";

const Menu = (props) => {

    const { children } = props
    // console.log(children)
    return (
        <MantineMenu
            {...omit(["children"], props)}
        >
            {React.Children.map(children, (child, index) => {
                const childType = child.props._dashprivate_layout.type;
                const childProps = child.props._dashprivate_layout.props;
                console.log(childProps, childType)
                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["label", "icon"]
                );
                if (childType === "MenuItem") {

                    return (
                        <MantineMenu.Item {...renderedProps} key={index}>
                            {child}
                        </MantineMenu.Item>
                    );
                } else if (childType === "MenuLabel") {

                    return (
                        <MantineMenu.Label key={index}>
                            {child}
                        </MantineMenu.Label>
                    );

                };

                return (
                    <MantineMenu.Item key={index}>
                        {child}
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
    * dmc.MenuItem() and dmc.Divider() components only, children are passed to MenuBody component
    */
    children: PropTypes.node,

    /**
    * 	Arrow distance to the left/right * arrowSize
    */
    arrowDistance: PropTypes.string,

    /**
    * Arrow size in px
    */
    arrowSize: PropTypes.any,

    /**
     * item label
    */
    closeOnItemClick: PropTypes.node,


    closeOnScroll: PropTypes.bool,
    controlRefProp: PropTypes.string,
    delay: PropTypes.number,

    exitTransitionDuration: PropTypes.number,

    gutter: PropTypes.number,

    menuButtonLabel: PropTypes.string,

    menuId: PropTypes.string,

    onClose: PropTypes.func,

    onOpen: PropTypes.func,

    opened: PropTypes.bool,

    placement: PropTypes.oneOf(["center", "end", "start"]),

    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),

    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    size: PropTypes.oneOfType([
        PropTypes.oneOf(["auto", "xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    // transition: PropTypes.bool,

    transitionDuration: PropTypes.number,

    transitionTimingFunction: PropTypes.string,

    trapFocus: PropTypes.bool,

    trigger: PropTypes.oneOf(["hover", "click"]),

    withArrow: PropTypes.bool,

    withinPortal: PropTypes.bool,

    zIndex: PropTypes.number,


}

export default Menu;


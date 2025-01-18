import { Box, Menu as MantineMenu } from "@mantine/core";
import { __PopoverProps } from "props/popover";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends __PopoverProps, StylesApiProps {
    variant?: string;
    /** Menu content */
    children?: React.ReactNode;
    /** Controlled menu opened state */
    opened?: boolean;
    /** Uncontrolled menu initial opened state */
    defaultOpened?: boolean;
    /** Determines whether dropdown should trap focus of keyboard events */
    trapFocus?: boolean;
    /** Determines whether Menu should be closed when item is clicked */
    closeOnItemClick?: boolean;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed */
    closeOnEscape?: boolean;
    /** Event which should open menu */
    trigger?: "click" | "hover" | "click-hover";
    /** Open delay in ms, applicable only to trigger="hover" variant */
    openDelay?: number;
    /** Close delay in ms, applicable only to trigger="hover" variant */
    closeDelay?: number;
    /** Determines whether dropdown should be closed on outside clicks */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Set the `tabindex` on all menu items. Defaults to -1 */
    menuItemTabIndex?: -1 | 0;
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
}

/** Use Menu to combine a list of secondary actions into single interactive area */
const Menu = (props: Props) => {
    const { children, setProps, ...others } = props;

    return (
        <MantineMenu {...others}>
            {React.Children.map(children, (child: any, index) => {
                const {type: childType, props: childProps} =
                    window.dash_clientside.get_layout(child.props.componentPath);
                if (childType === "MenuTarget") {
                    const { boxWrapperProps } = childProps;
                    return (
                        <MantineMenu.Target key={index}>
                            <Box w="fit-content" {...boxWrapperProps}>
                                {child}
                            </Box>
                        </MantineMenu.Target>
                    );
                }
                return child;
            })}
        </MantineMenu>
    );
};

export default Menu;

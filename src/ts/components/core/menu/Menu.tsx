import React from "react";
import { DashComponentProps, PopoverBaseProps } from "../../../props";
import { Menu as MantineMenu } from "@mantine/core";
import { MenuTriggerEvent } from "@mantine/core/lib/Menu/Menu.types";

type Props = {
    /** Menu content */
    children?: React.ReactNode;
    /** Controlled menu opened state */
    opened?: boolean;
    /** Determines whether Menu should be closed when item is clicked */
    closeOnItemClick?: boolean;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
    closeOnEscape?: boolean;
    /** Event which should open menu */
    trigger?: MenuTriggerEvent;
    /** Open delay in ms, applicable only to trigger="hover" variant */
    openDelay?: number;
    /** Close delay in ms, applicable only to trigger="hover" variant */
    closeDelay?: number;
    /** Determines whether dropdown should be closed on outside clicks, default to true */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
} & PopoverBaseProps &
    DashComponentProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const Menu = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineMenu {...other}>{children}</MantineMenu>;
};

Menu.defaultProps = {};

export default Menu;

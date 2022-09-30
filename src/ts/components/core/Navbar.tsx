import React from "react";
import { DefaultProps } from "../../props";
import { Navbar as MantineNavbar } from "@mantine/core";
import {
    HorizontalSectionPosition,
    HorizontalSectionWidth,
} from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection.styles";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Content */
    children?: React.ReactNode;
    /** Component width with breakpoints */
    width?: HorizontalSectionWidth;
    /** Component height */
    height?: string | number;
    /** Border */
    withBorder?: boolean;
    /** Set position to fixed */
    fixed?: boolean;
    /** Position for fixed variant */
    position?: HorizontalSectionPosition;
    /** Breakpoint at which component will be hidden if hidden prop is true */
    hiddenBreakpoint?: MantineNumberSize;
    /** Set to true to hide component at hiddenBreakpoint */
    hidden?: boolean;
    /** z-index */
    zIndex?: number;
} & DefaultProps;

/**
 * Navbar. For more information, see: https://mantine.dev/core/app-shell/
 */
const Navbar = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineNavbar {...other}>{children}</MantineNavbar>;
};

Navbar.defaultProps = {};

export default Navbar;

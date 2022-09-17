import React from "react";
import { DashComponentProps } from "../../props";
import { Header as MantineHeader } from "@mantine/core";
import { VerticalSectionPosition } from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection.styles";

type Props = {
    /** Section content */
    children?: React.ReactNode;
    /** Section height */
    height: number | string;
    /** Border */
    withBorder?: boolean;
    /** Changes position to fixed, controlled by AppShell component if rendered inside */
    fixed?: boolean;
    /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
    position?: VerticalSectionPosition;
    /** z-index */
    zIndex?: number;
} & DashComponentProps;

/**
 * Header. For more information, see: https://mantine.dev/core/app-shell/
 */
const Header = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineHeader {...other}>{children}</MantineHeader>;
};

Header.defaultProps = {};

export default Header;

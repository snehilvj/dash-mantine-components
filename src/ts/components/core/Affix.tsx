import React from "react";
import { Affix as MantineAffix } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** Determines whether component should be rendered within portal, defaults to true */
    withinPortal?: boolean;
    /** Affix position on screen, defaults to { bottom: 0, right: 0 } */
    position?: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
    };
    /** Content */
    children?: React.ReactNode;
    /** Root element z-index property */
    zIndex?: number;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render react node inside portal at fixed position */
const Affix = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAffix {...other}>{children}</MantineAffix>;
};

Affix.defaultProps = {};

export default Affix;

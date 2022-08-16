import React from "react";
import { DashComponentProps } from "../../props";
import { Affix as MantineAffix } from "@mantine/core";

type Props = {
    /** Content */
    children?: React.ReactNode;
    /** Root element z-index property */
    zIndex?: number;
    /** Fixed position in px, defaults to { bottom: 0, right: 0 } */
    position?: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
    };
} & DashComponentProps;

/**
 * Render react node inside portal at fixed position. For more information, see: https://mantine.dev/core/affix/
 */
const Affix = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAffix {...other}>{children}</MantineAffix>;
};

Affix.defaultProps = {};

export default Affix;

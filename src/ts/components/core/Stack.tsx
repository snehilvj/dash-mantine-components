import React from "react";
import {
    DashComponentProps,
    AlignContentProps,
    JustifyContentProps,
} from "../../props";
import { Stack as MantineStack } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Children */
    children?: React.ReactNode;
    /** Key of theme.spacing or number to set gap in px */
    spacing?: MantineSize;
    /** justify-content CSS property */
    justify?: JustifyContentProps;
    /** Defines align-items css property */
    align?: AlignContentProps;
} & DashComponentProps;

/**
 * Compose elements and components in vertical flex container. For more information, see: https://mantine.dev/core/stack/
 */
const Stack = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineStack {...other}>{children}</MantineStack>;
};

Stack.defaultProps = {};

export default Stack;

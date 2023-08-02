import React from "react";
import { ScrollArea as MantineScrollArea } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** Scrollbar size */
    scrollbarSize?: number | string;
    /** Scrollbars type */
    type?: "auto" | "always" | "scroll" | "hover" | "never";
    /** Scroll hide delay in ms, for scroll and hover types only */
    scrollHideDelay?: number;
    /** Reading direction of the scroll area */
    dir?: "ltr" | "rtl";
    /** Should scrollbars be offset with padding */
    offsetScrollbars?: boolean;
    /** Content of the scroll area */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** A port of the ScrollArea component */
const ScrollArea = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineScrollArea {...other}>{children}</MantineScrollArea>;
};

ScrollArea.defaultProps = {};

export default ScrollArea;

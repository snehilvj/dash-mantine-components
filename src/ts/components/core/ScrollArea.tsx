import React from "react";
import { DefaultProps } from "../../props";
import { ScrollArea as MantineScrollArea } from "@mantine/core";

type Props = {
    /** Scrollbar size in px */
    scrollbarSize?: number;
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
} & DefaultProps;

/**
 * A port of the ScrollArea component. For more information, see: https://mantine.dev/core/table/
 */
const ScrollArea = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineScrollArea {...other}>{children}</MantineScrollArea>;
};

ScrollArea.defaultProps = {};

export default ScrollArea;

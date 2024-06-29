import {
    MantineColor,
    Divider as MantineDivider,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Key of `theme.colors` or any valid CSS color value, by default value depends on color scheme */
    color?: MantineColor;
    /** Controls width/height (depends on orientation), `'xs'` by default */
    size?: MantineSize | number | (string & {});
    /** Divider label, visible only when `orientation` is `horizontal` */
    label?: React.ReactNode;
    /** Controls label position, `'left'` by default */
    labelPosition?: "left" | "center" | "right";
    /** Controls orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
}

/** Divider */
const Divider = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineDivider {...others} />;
};

Divider.defaultProps = {};

export default Divider;

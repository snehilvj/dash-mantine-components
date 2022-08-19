import React, { useCallback } from "react";
import { DashComponentProps } from "../../props";
import { ColorPicker as MantineColorPicker } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Controlled component value */
    value?: string;
    /** Color format */
    format?: "hex" | "rgba" | "rgb" | "hsl" | "hsla";
    /** Set to false to display swatches only */
    withPicker?: boolean;
    /** Predefined colors */
    swatches?: string[];
    /** Number of swatches displayed in one row */
    swatchesPerRow?: number;
    /** Predefined component size */
    size?: MantineSize;
    /** Force picker to take 100% width of its container */
    fullWidth?: boolean;
    /** Should interactive elements be focusable */
    focusable?: boolean;
    /** Saturation slider aria-label */
    saturationLabel?: string;
    /** Hue slider aria-label */
    hueLabel?: string;
    /** Alpha slider aria-label */
    alphaLabel?: string;
} & DashComponentProps;

/**
 * Inline color picker. For more information, see: https://mantine.dev/core/color-picker/
 */
const ColorPicker = (props: Props) => {
    const { setProps, value, ...other } = props;

    const onChange = useCallback(
        (value) => {
            setProps({ value });
        },
        [value]
    );

    return <MantineColorPicker onChange={onChange} {...other} />;
};

ColorPicker.defaultProps = {};

export default ColorPicker;

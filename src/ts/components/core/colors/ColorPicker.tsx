import { ColorPicker as MantineColorPicker } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    ColorPickerBaseProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React, { useState } from "react";

type Props = {
    /** Force picker to take 100% width of its container */ fullWidth?: boolean;
    /** Should interactive elements be focusable */
    focusable?: boolean;
    /** Saturation slider aria-label */
    saturationLabel?: string;
    /** Hue slider aria-label */
    hueLabel?: string;
    /** Alpha slider aria-label */
    alphaLabel?: string;
} & ColorPickerBaseProps &
    PersistenceProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Inline color picker */
const ColorPicker = (props: Props) => {
    const {
        setProps,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [color, setColor] = useState(value);

    useDidUpdate(() => {
        setProps({ value: color });
    }, [color]);

    useDidUpdate(() => {
        setColor(value);
    }, [value]);

    return <MantineColorPicker value={color} onChange={setColor} {...other} />;
};

ColorPicker.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ColorPicker;

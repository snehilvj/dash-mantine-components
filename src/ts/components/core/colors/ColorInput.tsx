import { ColorInput as MantineColorInput } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    ColorPickerBaseProps,
    InputComponentProps,
    MantineShadow,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    TransitionProps,
} from "props/mantine";
import React, { useState } from "react";

type Props = {
    /** Disallow free input */
    disallowInput?: boolean;
    /** call onChange with last valid value onBlur */
    fixOnBlur?: boolean;
    /** Dropdown element z-index */
    dropdownZIndex?: number;
    /** Display swatch with color preview on the left side of input */
    withPreview?: boolean;
    /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 0, transition: 'fade' } by default */
    transitionProps?: TransitionProps;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Dropdown box-shadow, key of theme.shadows */
    shadow?: MantineShadow;
    /** Determines whether eye dropper button should be displayed in the right section, true by default */
    withEyeDropper?: boolean;
    /** Replaces default eye dropper icon */
    eyeDropperIcon?: React.ReactNode;
    /** Determines whether the dropdown should be closed when color swatch is clicked, false by default */
    closeOnColorSwatchClick?: boolean;
    /** aria-label for eye dropper button */
    eyeDropperLabel?: string;
} & InputComponentProps &
    ColorPickerBaseProps &
    PersistenceProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Inline color picker */
const ColorInput = (props: Props) => {
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

    return <MantineColorInput value={color} onChange={setColor} {...other} />;
};

ColorInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ColorInput;

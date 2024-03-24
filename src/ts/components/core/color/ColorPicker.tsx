import { ColorPicker as MantineColorPicker } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { ColorPickerProps } from "props/color";
import { DashBaseProps, PersistenceProps } from "props/dash";
import React, { useState } from "react";

interface Props extends ColorPickerProps, PersistenceProps, DashBaseProps {}

/** ColorPicker */
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

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
        loading_state,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [color, setColor] = useState(value);

    useDidUpdate(() => {
        setProps({ value: color });
    }, [color]);

    useDidUpdate(() => {
        setColor(value);
    }, [value]);

    return (
        <MantineColorPicker
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            value={color}
            onChange={setColor}
            {...others}
        />
    );
};

ColorPicker.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ColorPicker;

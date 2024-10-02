import { ColorInput as MantineColorInput } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { ColorInputProps } from "props/color";
import { DashBaseProps, PersistenceProps } from "props/dash";
import React, { useState } from "react";

interface Props extends ColorInputProps, PersistenceProps, DashBaseProps {}

/** ColorInput */
const ColorInput = (props: Props) => {
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
        <MantineColorInput
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            value={color}
            onChange={setColor}
            {...others}
        />
    );
};

ColorInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ColorInput;

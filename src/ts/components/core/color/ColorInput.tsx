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

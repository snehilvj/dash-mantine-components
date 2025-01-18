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
        persisted_props = ["value"],
        persistence_type = "local",
        ...others
    } = props;

    const [color, setColor] = useState(value);

    useDidUpdate(() => {
        setProps({ value: color });
    }, [color]);

    useDidUpdate(() => {
        setColor(value);
    }, [value]);

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineColorInput
            data-dash-is-loading={loading || undefined}
            value={color}
            onChange={setColor}
            {...others}
        />
    );
};

export default ColorInput;

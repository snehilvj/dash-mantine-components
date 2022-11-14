import React, { useState } from "react";
import {
    DefaultProps,
    PersistenceProps,
    SliderSharedProps,
} from "../../../props";
import { Slider as MantineSlider } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Current value for controlled slider */
    value?: number;
} & SliderSharedProps &
    PersistenceProps &
    DefaultProps;

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const Slider = (props: Props) => {
    const {
        setProps,
        updatemode,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [val, setVal] = useState(value);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    return (
        <MantineSlider
            {...other}
            value={val}
            onChange={(value) => {
                setVal(value);
                if (updatemode === "drag") {
                    setProps({ value });
                }
            }}
            onChangeEnd={(value) => {
                if (updatemode === "mouseup") {
                    setProps({ value });
                }
            }}
        />
    );
};

Slider.defaultProps = {
    updatemode: "mouseup",
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Slider;

import React, { useState } from "react";
import { DefaultProps, InputComponentProps } from "../../props";
import { TimeInput as MantineTimeInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Controlled input value */
    value?: string;
    /** Display seconds input */
    withSeconds?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** Time format */
    format?: "12" | "24";
    /** Label for 'am' */
    amLabel?: string;
    /** Label for 'pm' */
    pmLabel?: string;
    /** Placeholder for hours/minutes/seconds inputs*/
    timePlaceholder?: string;
    /** Placeholder for am/pm input */
    amPmPlaceholder?: string;
} & Omit<InputComponentProps, "placeholder"> &
    DefaultProps;

/**
 * Capture time input from user. For more information, see: https://mantine.dev/dates/time-input/
 */
const TimeInput = (props: Props) => {
    const { setProps, value, ...other } = props;

    const [time, setTime] = useState(value && new Date(value));

    const onChange = (t: Date) => {
        setProps({ value: t && dayjs(t).format("YYYY-MM-DDTHH:mm:ss") });
    };

    useDidUpdate(() => {
        setTime(value && new Date(value));
    }, [value]);

    return <MantineTimeInput onChange={onChange} value={time} {...other} />;
};

TimeInput.defaultProps = {};

export default TimeInput;

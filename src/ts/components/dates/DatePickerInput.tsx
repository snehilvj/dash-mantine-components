import { DateValue, DatePickerInput as MantineDatePickerInput } from "@mantine/dates";
import { useDidUpdate } from "@mantine/hooks";
import { DateInputSharedProps, DatePickerProps } from "props/dates";
import React, { useState } from "react";
import {
    isDisabled,
    stringToDayjs,
    toDates,
    toStrings,
} from "../../utils/dates";

type Props = {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
} & DatePickerProps &
    DateInputSharedProps;

/** Inline date, multiple dates and dates range picker. */
const DatePickerInput = (props: Props) => {
    const {
        setProps,
        value,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [date, setDate] = useState(toDates(value));

    const onChange = (value: DateValue) => {
        setProps({ value: toStrings(value) });
    };

    useDidUpdate(() => {
        setDate(toDates(value));
    }, [value]);

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDatePickerInput
            onChange={onChange}
            value={date}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            excludeDate={isExcluded}
            {...other}
        />
    );
};

DatePickerInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default DatePickerInput;

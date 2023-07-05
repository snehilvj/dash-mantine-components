import {
    DateValue,
    DatePickerInput as MantineDatePickerInput,
} from "@mantine/dates";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DateInputSharedProps, DatePickerProps } from "props/dates";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React, { useState } from "react";
import {
    isDisabled,
    stringToDayjs,
    toDates,
    toStrings,
} from "../../utils/dates";

type Props = {
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
} & DatePickerProps &
    DateInputSharedProps &
    DashBaseProps &
    MantineStylesAPIProps &
    PersistenceProps &
    MantineStyleSystemProps;

/** Date, multiple dates and dates range picker input. */
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

    useDidUpdate(() => {
        setProps({ value: toStrings(date) });
    }, [date]);

    useDidUpdate(() => {
        setDate(toDates(value));
    }, [value]);

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDatePickerInput
            onChange={setDate}
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

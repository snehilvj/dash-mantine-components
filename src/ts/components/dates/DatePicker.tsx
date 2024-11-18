// DatePicker placeholder - name changed to DatePickerInput

// Need to define all the props from the old DatePicker component otherwise Dash will throw a TypeError for unexpected keywords
import { useDebouncedValue, useDidUpdate, useFocusWithin } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { DateInputSharedProps, DatePickerBaseProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';

interface Props extends DashBaseProps, PersistenceProps, BoxProps, DateInputSharedProps, DatePickerBaseProps, StylesApiProps {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default */
    valueFormat?: string;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** Determines whether today should be highlighted with a border, false by default */
    highlightToday?: boolean;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /**
     * (boolean | number; default False): If True, changes to input will be sent back to the Dash server only on enter or when losing focus.
     * If it's False, it will send the value back on every change. If a number, it will not send anything back to the Dash server until
     * the user has stopped typing for that number of milliseconds.
     */
    debounce?: boolean | number;
}

const DatePicker = ( props: Props) => {
    throw new Error(
        "The 'DatePicker' component has been renamed to 'DatePickerInput'. Please update your app to use 'DatePickerInput' instead."
    );
};

export default DatePicker;
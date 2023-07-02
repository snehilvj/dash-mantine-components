import { CalendarAriaLabels } from "@mantine/dates";
import {
    CalendarLevel,
    DatePickerType,
    DateValue,
} from "@mantine/dates/lib/types";
import { PersistenceProps } from "./dash";
import {
    InputComponentProps,
    MantineSize,
    ModalProps,
    PopoverProps,
} from "./mantine";

export type DateValueType = DateValue | [DateValue, DateValue] | Date[];

export type DatePickerProps = {
    /** Picker type: range, multiple or default */
    type?: DatePickerType;
    /** Value for controlled component */
    value?: string | string[] | [string, string] | null;
    /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
    allowDeselect?: boolean;
    /** Determines whether single year can be selected as range, applicable only when type="range" */
    allowSingleDateInRange?: boolean;
    /** Minimum possible date */
    minDate?: string;
    /** Maximum possible date */
    maxDate?: string;
    /** dayjs format for years list  */
    yearsListFormat?: string;
    /** Component size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
    /** dayjs label format to display decade label */
    decadeLabelFormat?: string;
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** dayjs label format to display year label */
    yearLabelFormat?: string;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string;
    /** Determines whether outside dates should be hidden, defaults to false */
    hideOutsideDates?: boolean;
    /** Determines whether weekdays row should be hidden, defaults to false */
    hideWeekdays?: boolean;
    /** dayjs label format to display month label */
    monthLabelFormat?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
} & PersistenceProps;

export type DateInputSharedProps = {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: "popover" | "modal";
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Props added to Modal component */
    modalProps?: Partial<Omit<ModalProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: object;
    /** Determines whether the user can modify the value */
    readOnly?: boolean;
    /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
    sortDates?: boolean;
    /** Separator between range value */
    labelSeparator?: string;
} & InputComponentProps;

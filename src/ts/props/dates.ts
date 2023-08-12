import { CalendarAriaLabels } from "@mantine/dates";
import {
    CalendarLevel,
    DatePickerType,
    DateValue,
    DayOfWeek,
} from "@mantine/dates/lib/types";
import {
    InputComponentProps,
    MantineSize,
    ModalProps,
    PopoverProps,
} from "./mantine";

export type DateValueType = DateValue | [DateValue, DateValue] | Date[];

type PickerBaseProps = {
    /** Picker type: range, multiple or default */
    type?: DatePickerType;
    /** Value for controlled component */
    value?: string | string[] | [string, string] | null;
    /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
    allowDeselect?: boolean;
    /** Determines whether single year can be selected as range, applicable only when type="range" */
    allowSingleDateInRange?: boolean;
};

type ControlsGroupSettings = {
    /** Minimum possible date */
    minDate?: string;
    /** Maximum possible date */
    maxDate?: string;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
};

type YearsListSettings = {
    /** dayjs format for years list  */
    yearsListFormat?: string;
    /** Component size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
} & ControlsGroupSettings;

type DecadeLevelBaseSettings = {
    /** dayjs label format to display decade label */
    decadeLabelFormat?: string;
} & YearsListSettings;

type MonthsListSettings = {
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
} & ControlsGroupSettings;

type YearLevelBaseSettings = {
    /** dayjs label format to display year label */
    yearLabelFormat?: string;
} & MonthsListSettings;

type MonthSettings = {
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string;
    /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
    weekendDays?: DayOfWeek[];
    /** Minimum possible date */
    minDate?: string;
    /** Maximum possible string */
    maxDate?: string;
    /** Determines whether outside dates should be hidden, defaults to false */
    hideOutsideDates?: boolean;
    /** Determines whether weekdays row should be hidden, defaults to false */
    hideWeekdays?: boolean;
    /** Controls size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
};
type MonthLevelBaseSettings = {
    /** dayjs label format to display month label */
    monthLabelFormat?: string;
} & MonthSettings;

type CalendarBaseProps = {
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
};

export type CalendarHeaderSettings = {
    /** Change next icon */
    nextIcon?: React.ReactNode;
    /** Change previous icon */
    previousIcon?: React.ReactNode;
    /** aria-label for next button */
    nextLabel?: string;
    /** aria-label for previous button */
    previousLabel?: string;
    /** Determines whether next control should be disabled, defaults to true */
    nextDisabled?: boolean;
    /** Determines whether previous control should be disabled, defaults to true */
    previousDisabled?: boolean;
    /** Determines whether next level button should be enabled, defaults to true */
    hasNextLevel?: boolean;
    /** Determines whether next control should be rendered, defaults to true */
    withNext?: boolean;
    /** Determines whether previous control should be rendered, defaults to true */
    withPrevious?: boolean;
    /** Component size */
    size?: MantineSize;
};

type DecadeLevelSettings = DecadeLevelBaseSettings & CalendarHeaderSettings;
type YearLevelSettings = YearLevelBaseSettings & CalendarHeaderSettings;
type MonthLevelSettings = MonthLevelBaseSettings & CalendarHeaderSettings;

type CalendarSettings = {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
} & DecadeLevelSettings &
    YearLevelSettings &
    MonthLevelSettings;

type DatePickerBaseProps = {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
} & PickerBaseProps &
    DecadeLevelBaseSettings &
    YearLevelBaseSettings &
    MonthLevelBaseSettings &
    CalendarBaseProps &
    CalendarSettings;

type CalendarSystemProps = {
    /** variant */
    variant?: string;
};

export type DatePickerProps = DatePickerBaseProps & CalendarSystemProps;

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

export type DateInputProps = {
    /** Value for controlled component */
    value?: string | null;
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: object;
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Determines whether input value should be reverted to last known valid value on blur, true by default */
    fixOnBlur?: boolean;
    /** Determines whether value can be deselected when the user clicks on the selected date in the calendar or erases content of the input, true if clearable prop is set, false by default */
    allowDeselect?: boolean;
    /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
    preserveTime?: boolean;
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
} & CalendarBaseProps &
    InputComponentProps &
    DecadeLevelSettings &
    YearLevelSettings &
    MonthLevelSettings;

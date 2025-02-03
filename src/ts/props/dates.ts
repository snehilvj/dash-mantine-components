import { MantineSize } from "@mantine/core";
import {
    CalendarAriaLabels,
    CalendarLevel,
    DatePickerType,
    DayOfWeek,
} from "@mantine/dates";
import { BoxProps } from "./box";
import { __BaseInputProps } from "./input";
import { __ClearButtonProps } from "./button";
import { ModalProps } from "./modal";
import { PopoverProps } from "./popover";
import { StylesApiProps } from "./styles";

interface CalendarHeaderSettings {
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
}

interface ControlsGroupSettings {
    /** Minimum possible date */
    minDate?: string;
    /** Maximum possible date */
    maxDate?: string;
}

export interface CalendarBaseProps {
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
}

interface YearsListSettings extends ControlsGroupSettings {
    /** dayjs format for years list, `'YYYY'` by default  */
    yearsListFormat?: string;
    /** Component size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}

interface DecadeLevelBaseSettings extends YearsListSettings {
    /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
    decadeLabelFormat?: string;
}

export interface DecadeLevelSettings
    extends DecadeLevelBaseSettings,
        Omit<CalendarHeaderSettings, "hasNextLevel"> {}

interface MonthsListSettings extends ControlsGroupSettings {
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}

interface YearLevelBaseSettings extends MonthsListSettings {
    /** dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
    yearLabelFormat?: string;
}

export interface YearLevelSettings
    extends YearLevelBaseSettings,
        CalendarHeaderSettings {}

interface MonthSettings {
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string;
    /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
    weekendDays?: DayOfWeek[];
    /** Minimum possible date */
    minDate?: string;
    /** Maximum possible date */
    maxDate?: string;
    /** Determines whether outside dates should be hidden, defaults to false */
    hideOutsideDates?: boolean;
    /** Determines whether weekdays row should be hidden, defaults to false */
    hideWeekdays?: boolean;
    /** Controls size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}

interface MonthLevelBaseSettings extends MonthSettings {
    /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
    monthLabelFormat?: string;
}

export interface MonthLevelSettings
    extends MonthLevelBaseSettings,
        CalendarHeaderSettings {}

export interface DateInputSharedProps extends Omit<__BaseInputProps, "size"> {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: "popover" | "modal";
    /** Props passed down to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Props passed down to Modal component */
    modalProps?: Partial<Omit<ModalProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props passed down to clear button */
    clearButtonProps?: __ClearButtonProps;
    /** Determines whether the user can modify the value */
    readOnly?: boolean;
    /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
    sortDates?: boolean;
    /** Separator between range value */
    labelSeparator?: string;
    /** Input placeholder */
    placeholder?: string;
}

type OmittedSettings =
    | "onNext"
    | "onPrevious"
    | "onLevelClick"
    | "withNext"
    | "withPrevious"
    | "nextDisabled"
    | "previousDisabled";

export interface CalendarSettings
    extends Omit<DecadeLevelSettings, OmittedSettings>,
        Omit<YearLevelSettings, OmittedSettings>,
        Omit<MonthLevelSettings, OmittedSettings> {
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
}

export interface TimeInputProps
    extends BoxProps,
        __BaseInputProps,
        StylesApiProps {
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
    /** Minimum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm */
    minTime?: string;
    /** Maximum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm */
    maxTime?: string;
}

interface PickerBaseProps {
    /** Picker type: range, multiple or default */
    type?: DatePickerType;
    /** Value for controlled component */
    value?: string | string[] | [string, string] | null;
    /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
    allowDeselect?: boolean;
    /** Determines whether single year can be selected as range, applicable only when type="range" */
    allowSingleDateInRange?: boolean;
}

export interface DatePickerBaseProps
    extends PickerBaseProps,
        DecadeLevelBaseSettings,
        YearLevelBaseSettings,
        MonthLevelBaseSettings,
        CalendarBaseProps,
        CalendarSettings {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
}

export interface MonthPickerBaseProps
    extends PickerBaseProps,
        DecadeLevelBaseSettings,
        YearLevelBaseSettings,
        CalendarBaseProps,
        CalendarSettings {
    /** Max level that user can go up to (decade, year), defaults to decade */
    maxLevel?: "year" | "decade";
    /** Current level displayed to the user (decade, year), used for controlled component */
    level?: "year" | "decade";
}

export interface YearPickerBaseProps
    extends PickerBaseProps,
        DecadeLevelBaseSettings,
        CalendarBaseProps,
        CalendarSettings {
}
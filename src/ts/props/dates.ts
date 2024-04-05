import { MantineSize } from "@mantine/core";
import { CalendarAriaLabels, DayOfWeek } from "@mantine/dates";

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

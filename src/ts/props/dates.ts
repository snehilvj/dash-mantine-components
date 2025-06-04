import { MantineSize, MantineRadius } from '@mantine/core';
import {
    CalendarAriaLabels,
    CalendarLevel,
    DatePickerType,
    DayOfWeek,
} from '@mantine/dates';
import { BoxProps } from './box';
import { __BaseInputProps } from './input';
import { __ClearButtonProps } from './button';
import { ModalProps } from './modal';
import { PopoverProps } from './popover';
import { StylesApiProps } from './styles';

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
        Omit<CalendarHeaderSettings, 'hasNextLevel'> {}

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
    /**Determines whether week numbers should be displayed, false by default */
    withWeekNumbers?: boolean;
}

interface MonthLevelBaseSettings extends MonthSettings {
    /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
    monthLabelFormat?: string;
}

export interface MonthLevelSettings
    extends MonthLevelBaseSettings,
        CalendarHeaderSettings {}

export interface DateInputSharedProps extends Omit<__BaseInputProps, 'size'> {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: 'popover' | 'modal';
    /** Props passed down to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
    /** Props passed down to Modal component */
    modalProps?: Partial<Omit<ModalProps, 'children'>>;
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
    | 'onNext'
    | 'onPrevious'
    | 'onLevelClick'
    | 'withNext'
    | 'withPrevious'
    | 'nextDisabled'
    | 'previousDisabled';

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

type TimePickerFormat = '12h' | '24h';

interface TimePickerAmPmLabels {
    am: string;
    pm: string;
}

interface TimePickerPasteSplitInput {
    time: string;
    format: TimePickerFormat;
    amPmLabels: TimePickerAmPmLabels;
}

interface TimePickerPasteSplitReturnType {
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    amPm: string | null;
}

type TimePickerPasteSplit = (
    input: TimePickerPasteSplitInput
) => TimePickerPasteSplitReturnType;

interface TimePickerPresetGroup {
    label: React.ReactNode;
    values: string[];
}

export interface GetTimeRange {
    startTime: string;
    endTime: string;
    interval: string;
}

export type TimePickerPresets = string[] | TimePickerPresetGroup[];

export interface TimePickerProps
    extends BoxProps,
        __BaseInputProps,
        StylesApiProps {
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Determines whether the clear button should be displayed, `false` by default */
    clearable?: boolean;
    /** `name` prop passed down to the hidden input */
    name?: string;
    /** `form` prop passed down to the hidden input */
    form?: string;
    /** Min possible time value in `hh:mm:ss` format */
    min?: string;
    /** Max possible time value in `hh:mm:ss` format */
    max?: string;
    /** Time format, `'24h'` by default */
    format?: TimePickerFormat;
    /** Number by which hours are incremented/decremented, `1` by default */
    hoursStep?: number;
    /** Number by which minutes are incremented/decremented, `1` by default */
    minutesStep?: number;
    /** Number by which seconds are incremented/decremented, `1` by default */
    secondsStep?: number;
    /** Determines whether the seconds input should be displayed, `false` by default */
    withSeconds?: boolean;
    /** `aria-label` of hours input */
    hoursInputLabel?: string;
    /** `aria-label` of minutes input */
    minutesInputLabel?: string;
    /** `aria-label` of seconds input */
    secondsInputLabel?: string;
    /** `aria-label` of am/pm input */
    amPmInputLabel?: string;
    /** Labels used for am/pm values, `{ am: 'AM', pm: 'PM' }` by default */
    amPmLabels?: TimePickerAmPmLabels;
    /** Determines whether the dropdown with time controls list should be visible when the input has focus, `false` by default */
    withDropdown?: boolean;
    /** Props passed down to `Popover` component */
    popoverProps?: PopoverProps;
    /** Props passed down to clear button */
    clearButtonProps?: any;
    /** Props passed down to hours input */
    hoursInputProps?: any;
    /** Props passed down to minutes input */
    minutesInputProps?: any;
    /** Props passed down to seconds input */
    secondsInputProps?: any;
    /** Props passed down to am/pm select */
    amPmSelectProps?: any;
    /** If set, the value cannot be updated */
    readOnly?: boolean;
    /** If set, the component becomes disabled */
    disabled?: boolean;
    /** Props passed down to the hidden input */
    hiddenInputProps?: any;
    /** A function to transform paste values, by default time in 24h format can be parsed on paste for example `23:34:22` */
    pasteSplit?: TimePickerPasteSplit;
    /** Time presets to display in the dropdown */
    presets?: TimePickerPresets;
    /** Maximum height of the content displayed in the dropdown in px, `200` by default */
    maxDropdownContentHeight?: number;
    /** Props passed down to all underlying `ScrollArea` components */
    scrollAreaProps?: any;
    /**
     * Generates a range of time values for the `presets` prop.
     * Accepts a dictionary with `startTime`, `endTime`, and `interval` keys,
     * where all values are strings in `hh:mm:ss` format.
     * This overrides any values provided directly in the `presets` prop.
     */
    timeRangePresets?: GetTimeRange;
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
    maxLevel?: 'year' | 'decade';
    /** Current level displayed to the user (decade, year), used for controlled component */
    level?: 'year' | 'decade';
}

export interface YearPickerBaseProps
    extends PickerBaseProps,
        DecadeLevelBaseSettings,
        CalendarBaseProps,
        CalendarSettings {}

export interface TimeGridProps extends BoxProps, StylesApiProps {
    /** Time data in 24h format to be displayed in the grid, for example `['10:00', '18:30', '22:00']`. Time values must be unique. */
    data?: string[];
    /** Uncontrolled component default value */
    defaultValue?: string | null;
    /** Determines whether the value can be deselected when the current active option is clicked or activated with keyboard, `false` by default */
    allowDeselect?: boolean;
    /** Time format displayed in the grid, `'24h'` by default */
    format?: TimePickerFormat;
    /** Determines whether the seconds part should be displayed, `false` by default */
    withSeconds?: boolean;
    /** Labels used for am/pm values, `{ am: 'AM', pm: 'PM' }` by default */
    amPmLabels?: TimePickerAmPmLabels;
    /** Props passed down to the underlying `SimpleGrid` component, `{ cols: 3, spacing: 'xs' }` by default */
    simpleGridProps?: any;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Control `font-size` of controls, key of `theme.fontSizes` or any valid CSS value, `'sm'` by default */
    size?: MantineSize;
    /** All controls before this time are disabled */
    minTime?: string;
    /** All controls after this time are disabled */
    maxTime?: string;
    /** Array of time values to disable */
    disableTime?: string[];
    /** If set, all controls are disabled */
    disabled?: boolean;
    /**
     * Generates a range of time values for the `data` prop.
     * Accepts a dictionary with `startTime`, `endTime`, and `interval` keys,
     * where all values are strings in `hh:mm:ss` format.
     * This overrides any values provided directly in the `data` prop.
     */
    timeRangeData?: GetTimeRange;
}

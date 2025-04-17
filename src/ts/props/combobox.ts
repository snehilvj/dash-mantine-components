import { ComboboxData, MantineSize } from "@mantine/core";
import { __PopoverProps } from "./popover";
import { StylesApiProps } from "./styles";

interface ComboboxProps extends __PopoverProps, StylesApiProps {
    /** Combobox content */
    children?: React.ReactNode;
    /** Controls items `font-size` and `padding`, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Controls `padding` of the dropdown, `4` by default */
    dropdownPadding?: React.CSSProperties["padding"];
    /** Determines whether selection should be reset when option is hovered, `false` by default */
    resetSelectionOnOptionHover?: boolean;
    /** Determines whether Combobox value can be changed */
    readOnly?: boolean;
    /** Custom filter function as a string (JavaScript code) */
    filter?: string;
}

export interface ComboboxLikeProps {
    /** Data used to generate options */
    data?: ComboboxData;
    /** Controlled dropdown opened state */
    dropdownOpened?: boolean;
    /** Determines whether the first option should be selected when value changes, `false` by default */
    selectFirstOptionOnChange?: boolean;
    /** Props passed down to `Combobox` component */
    comboboxProps?: ComboboxProps;
    /** Maximum number of options displayed at a time, `Infinity` by default */
    limit?: number;
    /** Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default */
    withScrollArea?: boolean;
    /** `max-height` of the dropdown, only applicable when `withScrollArea` prop is `true`, `250` by default */
    maxDropdownHeight?: number | string;
}
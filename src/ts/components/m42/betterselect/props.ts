import { SelectItem } from "@mantine/core/lib/Select/";

export type ValueType = string | number;

export type SelectItemWithNumber = Omit<SelectItem, "value"> & {
    value?: ValueType;
};

export type ArrayValueType = string[] | number[];

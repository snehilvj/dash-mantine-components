import { SelectItem } from "@mantine/core/lib/Select/";

export type SelectItemWithNumber = Omit<SelectItem, "value"> & {
    value?: number | string;
};

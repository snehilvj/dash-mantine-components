import {
    Button,
    Flex,
    MultiSelect as MantineMultiSelect,
    Text,
} from "@mantine/core";
import {
    DefaultProps,
    PersistenceProps,
    SelectSharedProps,
} from "../../../props";
import React, { useEffect, useRef, useState } from "react";
import { snakeStringCompare, toArrayOfStrings } from "./utils";

import { SelectItem } from "@mantine/core/lib/Select/";
import { SelectItemWithNumber, ValueType, ArrayValueType } from "./props";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Select data used to renderer items in dropdown */
    data?: SelectItemWithNumber[];
    /** Controlled input value */
    value?: ArrayValueType;
    /** Value Label */
    valueLabel?: string[];
    addAllItem?: boolean;
    addAllItemLimit?: number;
    addFlag?: boolean;
    flagLabel?: string;
    flagOn?: boolean;
    dataValuesAvailable?: ArrayValueType;
} & PersistenceProps &
    DefaultProps &
    Omit<SelectSharedProps, "creatable" | "searchValue" | "data">;

const ALL_ITEM_VALUE = "(All)";

interface OptionsHandlerProps {
    options: SelectItem[];
    labelToValue: Map<string, string[]>;
    valueToLabel: Map<string, string>;
    isValueNumberType: boolean;
}

const initOptionsHandler = (
    data: SelectItemWithNumber[],
    dataValuesAvailable: ArrayValueType = []
): OptionsHandlerProps => {
    const options: SelectItem[] = [];
    const labelToValue: Map<string, string[]> = new Map();
    const valueToLabel: Map<string, string> = new Map();
    const dataValuesAvailableSet = new Set<ValueType>(dataValuesAvailable);
    let isValueNumberType = false;

    let obj: SelectItem;

    for (const item of data) {
        if (typeof item !== "object") {
            const v = String(item);
            if (dataValuesAvailableSet.size && !dataValuesAvailableSet.has(v)) {
                continue;
            }
            obj = { value: v, label: v };
            labelToValue.set(v, [v]);
            valueToLabel.set(v, v);
            options.push(obj);
        } else {
            const { label: lab, value: val, ...other } = item;
            isValueNumberType = typeof val === "number";

            if (
                dataValuesAvailableSet.size &&
                !dataValuesAvailableSet.has(val)
            ) {
                continue;
            }

            const value = String(val);
            const label = typeof lab === "undefined" ? value : lab;

            if (!labelToValue.has(label)) {
                labelToValue.set(label, [value]);
                options.push({ ...other, label: label, value: label }); // `value: label` — это не баг!!!
            } else {
                labelToValue.get(label).push(value);
            }

            valueToLabel.set(value, label);
        }
    }
    return { options, labelToValue, valueToLabel, isValueNumberType };
};

const shouldAddAllItem = (
    data: SelectItem[],
    currentValue: string[],
    addAllItem: boolean,
    addAllItemLimit: number
): SelectItem[] => {
    const picked = new Set(currentValue);

    if (
        addAllItem &&
        data.length <= addAllItemLimit &&
        data.length > 0 &&
        !(data.filter((i) => !picked.has(i.value)).length === 0)
    ) {
        return [{ value: ALL_ITEM_VALUE }, ...data];
    }
    return data;
};

/**
 * Чуть прокачанная версия Mantine MultiSelect:
 * 1. Опция (All)
 * 2. Улучшенная сортировка результатов поиска (по префиксу вначале)
 * 3. Дедубликация лейблов с сохранением всех value.
 *      Например, передаются опции [
 *          {value: "1", label: "Apple"},
 *          {value: "2", label: "Apple"}
 *      ]
 *      Отрисовывается только "Apple", но при клике в value пишется ["1", "2"]
 * 4. Дополнительный флаг справа от лейбла. Например, SUM
 * 5. Поддержка value с типом number
 */
const BetterMultiSelect = (props: Props) => {
    const {
        setProps,
        data,
        persistence,
        persisted_props,
        persistence_type,
        addAllItem = false,
        addAllItemLimit = 100,
        label,
        value: valueInitial,
        valueLabel,
        flagOn: flagOnInitial,
        addFlag,
        flagLabel,
        searchable,
        dataValuesAvailable,
        ...other
    } = props;

    const optionsHandlerRef = useRef<OptionsHandlerProps>(null);
    if (optionsHandlerRef.current === null) {
        optionsHandlerRef.current = initOptionsHandler(
            data,
            dataValuesAvailable
        );
    }
    const [options, setOptions] = useState<SelectItem[]>(
        optionsHandlerRef.current.options
    );

    useDidUpdate(() => {
        optionsHandlerRef.current = initOptionsHandler(
            data,
            dataValuesAvailable
        );
        setOptions(optionsHandlerRef.current.options);
    }, [data, dataValuesAvailable]);

    const transformValue = (
        value: ArrayValueType,
        valueToLabelMap = optionsHandlerRef.current.valueToLabel
    ): string[] => {
        return Array.from(
            new Set(toArrayOfStrings(value).map((v) => valueToLabelMap.get(v)))
        );
    };

    const [valueSelected, setValueSelected] = useState([]);

    useEffect(() => {
        const labels = transformValue(valueInitial);
        setValueSelected(labels);
        setProps({
            valueLabel: labels,
        });
    }, [valueInitial]);

    const [flagOn, setFlagOn] = useState(flagOnInitial);

    const mapLabelsToValues = (
        labels: string[],
        labelToValueMap = optionsHandlerRef.current.labelToValue
    ) => {
        const result: string[] = [];

        for (const lab of labels) {
            const d = labelToValueMap.get(lab);
            d.forEach((i: string) => result.push(i));
        }
        return result;
    };

    const handleValueChange = (
        valueSelected: string[],
        isValueNumberType = optionsHandlerRef.current.isValueNumberType
    ) => {
        let valueExpanded: string[];
        if (valueSelected.includes(ALL_ITEM_VALUE)) {
            valueExpanded = options.map((i) => i.value);
        } else {
            valueExpanded = valueSelected;
        }
        const valueNotLabel = mapLabelsToValues(valueExpanded);
        setProps({
            value: isValueNumberType
                ? valueNotLabel.map((x) => Number(x))
                : valueNotLabel,
            valueLabel: valueExpanded,
        });
    };

    const handleSearchChange = (
        query: string,
        value: string[],
        options: SelectItem[] = optionsHandlerRef.current.options
    ) => {
        if (query && searchable) {
            const result = options.filter((e) => {
                return (
                    e.label
                        .toLowerCase()
                        .trim()
                        .includes(query.toLowerCase().trim()) ||
                    value.includes(e.value) ||
                    e.value === ALL_ITEM_VALUE
                );
            });
            result.sort((a, b) => snakeStringCompare(a.value, b.value, query));
            setOptions(result);
        } else {
            setOptions(options);
        }
    };

    const handleFlagChange = () => {
        setFlagOn(!flagOn);
        setProps({ flagOn: !flagOn });
    };

    return (
        <MantineMultiSelect
            onChange={handleValueChange}
            getCreateLabel={(query) => `+ Create ${query}`}
            data={shouldAddAllItem(
                options,
                valueSelected,
                addAllItem,
                addAllItemLimit
            )}
            wrapperProps={{ autoComplete: "off" }}
            onSearchChange={(query) => handleSearchChange(query, valueSelected)}
            filter={(value, selected: boolean, item) => !selected}
            label={
                <Flex justify={"space-between"} style={{ flexGrow: "100" }}>
                    {label}
                    {addFlag && (
                        <Button
                            compact
                            size={other.size}
                            radius={other.radius}
                            color={flagOn ? "green" : "gray.4"}
                            onClick={handleFlagChange}
                            variant={flagOn ? "filled" : "light"}
                            h={"85%"}
                        >
                            <Text weight={flagOn ? 600 : 400} size={other.size}>
                                {flagLabel}
                            </Text>
                        </Button>
                    )}
                </Flex>
            }
            labelProps={{ display: "flex" }}
            value={valueSelected}
            searchable={searchable}
            {...other}
        />
    );
};

BetterMultiSelect.defaultProps = {
    data: [],
    persisted_props: ["value"],
    persistence_type: "local",
};

export default BetterMultiSelect;

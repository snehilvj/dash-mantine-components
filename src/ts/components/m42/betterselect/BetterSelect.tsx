import {
  DefaultProps,
  PersistenceProps,
  SelectSharedProps,
} from "../../../props";
import React, { useEffect, useRef, useState } from "react";

import { Select as MantineSelect } from "@mantine/core";
import { SelectItem } from "@mantine/core/lib/Select/";
import { SelectItemWithNumber } from "./props"
import { snakeStringCompare } from "./utils";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
  /** Allow deselecting items on click */
  allowDeselect?: boolean;
  /** Should data be filtered when search value exactly matches selected item */
  filterDataOnExactSearchMatch?: boolean;
  /** Select data used to renderer items in dropdown */
  data?: SelectItemWithNumber[];
  /** Controlled input value */
  value?: string | number;
  /** Value Label */
  valueLabel?: string;
} & PersistenceProps &
  DefaultProps &
  Omit<SelectSharedProps, "creatable" | "searchValue" | "data">;

interface OptionsHandlerProps {
  options: SelectItem[];
  valueToLabel: Map<string, string>;
  isValueNumberType: boolean;
}

const initOptionsHandler = (
  data: SelectItemWithNumber[]
): OptionsHandlerProps => {
  const options: SelectItem[] = [];
  const valueToLabel: Map<string, string> = new Map();
  let isValueNumberType = false;

  let obj: SelectItem;

  for (const item of data) {
    if (typeof item !== "object") {
      const v = String(item);
      obj = { value: v, label: v };
      valueToLabel.set(v, v);
      options.push(obj);
    } else {
      const { label: lab, value: val, ...other } = item;
      isValueNumberType = typeof val === "number";

      const value = String(val);
      const label = typeof lab === "undefined" ? value : lab;
      options.push({ ...other, label: label, value: value });
      valueToLabel.set(value, label);
    }
  }
  return { options, valueToLabel, isValueNumberType };
};

/**
 * Совсем чуть-чуть улучшенный Select
 * 1. Поддержка value с типом number
 * 2. Улучшенная сортировка результатов поиска (по префиксу вначале)
 */
const BetterSelect = (props: Props) => {
  const {
    setProps,
    data,
    persistence,
    persisted_props,
    persistence_type,
    valueLabel,
    searchable,
    value: valueInitial,
    ...other
  } = props;

  const optionsHandlerRef = useRef<OptionsHandlerProps>(null);
  if (optionsHandlerRef.current === null) {
    optionsHandlerRef.current = initOptionsHandler(data);
  }
  const [options, setOptions] = useState<SelectItem[]>(
    optionsHandlerRef.current.options
  );

  useDidUpdate(() => {
    optionsHandlerRef.current = initOptionsHandler(data);
    setOptions(optionsHandlerRef.current.options);
  }, [data]);

  const [valueSelected, setValueSelected] = useState<string>();

  useEffect(() => {
    const valueString = String(valueInitial);
    setValueSelected(valueString);
    setProps({
      valueLabel: optionsHandlerRef.current.valueToLabel.get(valueString),
    });
  }, [valueInitial]);

  const handleValueChange = (
    valueSelected: string,
    isValueNumberType = optionsHandlerRef.current.isValueNumberType,
    valueToLabelMap = optionsHandlerRef.current.valueToLabel
  ) => {
    setProps({
      value: isValueNumberType ? Number(valueSelected) : valueSelected,
      valueLabel: valueToLabelMap.get(valueSelected),
    });
  };

  const handleSearchChange = (
    query: string,
    value: string,
    optionsAvailable: SelectItem[] = optionsHandlerRef.current.options,
    valueToLabelMap = optionsHandlerRef.current.valueToLabel
  ) => {
    if (query && searchable && valueToLabelMap.get(value) !== query) {
      const result = options.filter((e) => {
        return (
          e.label.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
          value === e.value
        );
      });
      result.sort((a, b) => snakeStringCompare(a.label, b.label, query));
      setOptions(result);
    } else {
      setOptions(optionsAvailable);
    }
  };

  return (
    <MantineSelect
      value={valueSelected}
      onChange={handleValueChange}
      data={options}
      onSearchChange={(query) => handleSearchChange(query, valueSelected)}
      filter={() => true}
      wrapperProps={{ autoComplete: "off" }}
      searchable={searchable}
      {...other}
    />
  );
};

BetterSelect.defaultProps = {
    data: [],
    persisted_props: ["value"],
    persistence_type: "local",
};


export default BetterSelect;

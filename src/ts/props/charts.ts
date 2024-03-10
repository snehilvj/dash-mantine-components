import { ReactElement } from "react";
import { AxisDomain, AxisType, ScaleType } from "recharts/types/util/types";

export interface BaseAxisProps {
    type?: "number" | "category";
    dataKey?: string | number;
    hide?: boolean;
    scale?: ScaleType;
    tick?: boolean;
    tickCount?: number;
    axisLine?: boolean;
    tickLine?: boolean;
    tickSize?: number;
    allowDataOverflow?: boolean;
    allowDuplicatedCategory?: boolean;
    allowDecimals?: boolean;
    domain?: AxisDomain;
    includeHidden?: boolean;
    name?: string;
    unit?: string | number;
    axisType?: AxisType;
    range?: Array<number>;
    AxisComp?: any;
    label?: string | number | ReactElement | object;
    className?: string;
}

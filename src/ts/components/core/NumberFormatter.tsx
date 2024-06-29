import { NumberFormatter as MantineNumberFormatter } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends DashBaseProps {
    /** Value to format */
    value?: number | string;
    /** Determines whether negative values are allowed, `true` by default */
    allowNegative?: boolean;
    /** Limits the number of digits that are displayed after the decimal point, by default there is no limit */
    decimalScale?: number;
    /** Character used as a decimal separator, `'.'` by default */
    decimalSeparator?: string;
    /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
    fixedDecimalScale?: boolean;
    /** Prefix added before the value */
    prefix?: string;
    /** Suffix added after the value */
    suffix?: string;
    /** Defines the thousand grouping style */
    thousandsGroupStyle?: "thousand" | "lakh" | "wan" | "none";
    /** A character used to separate thousands, `','` by default */
    thousandSeparator?: string | boolean;
}

/** NumberFormatter */
const NumberFormatter = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineNumberFormatter {...others} />;
};

NumberFormatter.defaultProps = {};

export default NumberFormatter;

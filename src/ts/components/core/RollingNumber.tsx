import { RollingNumber as MantineRollingNumber } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Number value to display */
    value: number;
    /** Prefix added before the value */
    prefix?: string;
    /** Suffix added after the value */
    suffix?: string;
    /** Character used as a decimal separator, `'.'` by default */
    decimalSeparator?: string;
    /** Character used to separate thousands, set to `True` for `','`, `False` by default */
    thousandSeparator?: string | boolean;
    /** Number of decimal places to display */
    decimalScale?: number;
    /** If set, trailing zeros are added to match `decimalScale`, `False` by default */
    fixedDecimalScale?: boolean;
    /** Animation duration in milliseconds, `600` by default */
    animationDuration?: number;
    /** CSS timing function for animation, `'ease'` by default */
    timingFunction?: string;
    /** If set, use tabular (monospace) numbers, `True` by default */
    tabularNumbers?: boolean;
    /** If set, the root element acts as an `aria-live="polite"` region (`role="status"`) and screen readers announce every value change. When `False`, the root uses `role="img"` so the current value is still accessible but updates are not announced. `False` by default */
    withLiveRegion?: boolean;
}

/** RollingNumber - Animate value changes with rolling digits */
const RollingNumber = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineRollingNumber
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default RollingNumber;

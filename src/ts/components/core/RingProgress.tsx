import {
    MantineColor,
    RingProgress as MantineRingProgress,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';


interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Label displayed in the center of the ring */
    label?: React.ReactNode;
    /** Ring thickness */
    thickness?: number;
    /** Width and height of the progress ring */
    size?: number;
    /** Sets whether the edges of the progress circle are rounded */
    roundCaps?: boolean;
    /** Ring sections */
    sections: any;
    /** Color of the root section, key of theme.colors or CSS color value */
    rootColor?: MantineColor;
    /** Transition duration in milliseconds for section value and color changes default 0 */
    transitionDuration?: number;
    /** Gap between sections in degrees. Reduces the visual size of each section default 0 */
    sectionGap?: number;
    /** Starting angle in degrees. 0 = right, 90 = bottom, 180 = left, 270 = top default 270 */
    startAngle?: number;
}

/** RingProgress */
const RingProgress = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineRingProgress
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default RingProgress;

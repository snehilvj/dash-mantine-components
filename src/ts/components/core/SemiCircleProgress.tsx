import {
    MantineColor,
    SemiCircleProgress as MantineSemiCircleProgess,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
     /** Progress value from `0` to `100` */
      value: number;

      /** Diameter of the svg in px, `200` by default */
      size?: number;

      /** Circle thickness in px, `12` by default */
      thickness?: number;

      /** Orientation of the circle, `'up'` by default */
      orientation?: 'up' | 'down';

      /** Direction from which the circle is filled, `'left-to-right'` by default */
      fillDirection?: 'right-to-left' | 'left-to-right';

      /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
      filledSegmentColor?: MantineColor;

      /** Key of `theme.colors` or any valid CSS color value, by default the value is determined based on the color scheme value */
      emptySegmentColor?: MantineColor;

      /** Transition duration of filled section styles changes in ms, `0` by default */
      transitionDuration?: number;

      /** Label rendered inside the circle */
      label?: React.ReactNode;

      /** Label position relative to the circle center, `'bottom'` by default */
      labelPosition?: 'center' | 'bottom';
}

/** Use to represent progress with semi circle diagram */
const SemiCircleProgress = (props: Props) => {
    const { setProps, ...others } = props;

    return (
        <MantineSemiCircleProgess
            {...others}
        />
    );
};

export default SemiCircleProgress;

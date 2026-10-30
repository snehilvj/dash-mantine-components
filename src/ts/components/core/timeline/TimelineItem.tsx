import { MantineRadius, MantineColor } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Item title, displayed next to the bullet */
    title?: React.ReactNode;
    /** Content displayed below the title */
    children?: React.ReactNode;
    /** React node that should be rendered inside the bullet – icon, image, avatar, etc. By default, large white dot is displayed. */
    bullet?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: MantineRadius | number;
    /** Controls line border style, `'solid'` by default */
    lineVariant?: 'solid' | 'dashed' | 'dotted';
    /** Content displayed on the opposite side of the timeline item */
    opposite?: React.ReactNode;
    /** If set, switches the position of content and opposite @default false */
    alternate?: boolean;
    /** Key of `theme.colors` or any valid CSS color to control active item colors @default theme.primaryColor */
    color?: MantineColor;
}

/** TimelineItem */
const TimelineItem = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return <>{children}</>;
};

export default TimelineItem;

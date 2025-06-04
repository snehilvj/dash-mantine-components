import { MantineRadius } from '@mantine/core';
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
    radius?: MantineRadius;
    /** Controls line border style, `'solid'` by default */
    lineVariant?: 'solid' | 'dashed' | 'dotted';
}

/** TimelineItem */
const TimelineItem = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return <>{children}</>;
};

export default TimelineItem;

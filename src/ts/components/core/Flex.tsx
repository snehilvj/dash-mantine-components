import { Flex as MantineFlex, MantineSize, StyleProp } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** theme.spacing key, `gap` CSS property, or dict for responsive values */
    gap?: string | number | object;
    /** theme.spacing key, `row-gap` CSS property, or dict for responsive values */
    rowGap?: string | number | object;
    /** theme.spacing key, `column-gap` CSS property, or dict for responsive values*/
    columnGap?: string | number | object;
    /** `align-items` CSS property. Supports dict for responsive values */
    align?: React.CSSProperties['alignItems'] | object;
    /** `justify-content` CSS property.  Supports dict for responsive values */
    justify?:  React.CSSProperties['justifyContent'] | object;
    /** `flex-wrap` CSS property. Supports dict for responsive values */
    wrap?:  React.CSSProperties['flexWrap'] | object;
    /** `flex-direction` CSS property. Supports dict for responsive values */
    direction?:  React.CSSProperties['flexDirection'] | object;
}

/** Flex */
const Flex = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineFlex
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineFlex>
    );
};

export default Flex;

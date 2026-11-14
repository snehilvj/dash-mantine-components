import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../../utils/dash3';
import { Props }  from "../CarouselSlide"


/** CarouselSlide */
const CarouselSlide = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Carousel.Slide
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}{' '}
        </Carousel.Slide>
    );
};

export default CarouselSlide;

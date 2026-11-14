import { Carousel as MantineCarousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import React, { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';
import { getLoadingState } from '../../../../utils/dash3';
import { Props }  from "../Carousel"


/** Carousel */
const Carousel = ({
    children,
    active = 0,
    initialSlide = 0,
    setProps,
    loading_state,
    autoplay,
    autoScroll,
    ...others
}: Props) => {
    const autoplayPlugin =
        autoplay === true
            ? Autoplay()
            : autoplay && typeof autoplay === 'object'
              ? Autoplay(autoplay)
              : null;

    const autoScrollPlugin =
        autoScroll === true
            ? AutoScroll()
            : autoScroll && typeof autoScroll === 'object'
              ? AutoScroll(autoScroll)
              : null;

    useEffect(() => {
        setProps({ active: initialSlide });
    }, [initialSlide]);

    return (
        <MantineCarousel
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
            plugins={[autoplayPlugin, autoScrollPlugin].filter(Boolean)}
            onSlideChange={(a) => setProps({ active: a ?? initialSlide })}
            initialSlide={initialSlide}
        >
            {children}
        </MantineCarousel>
    );
};

export default Carousel;

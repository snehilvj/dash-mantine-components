import { MantineSpacing, StyleProp } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';


// eslint-disable-next-line no-inline-comments
const LazyCarousel = React.lazy(() => import(/* webpackChunkName: "Carousel" */ './fragments/Carousel'));

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** <Carousel.Slide /> components */
    children?: React.ReactNode;
    /** The index of the current slide. Read only.  Use initialSlide to set the current slide */
    active?: number;
    /** Controls size of the next and previous controls, `26` by default */
    controlSize?: React.CSSProperties['width'];
    /** Controls position of the next and previous controls, key of `theme.spacing` or any valid CSS value, `'sm'` by default */
    controlsOffset?: MantineSpacing;
    /** Controls slide width based on viewport width, `'100%'` by default */
    slideSize?: StyleProp<string | number>;
    /** Key of theme.spacing or number to set gap between slides */
    slideGap?: StyleProp<MantineSpacing>;
    /** Carousel orientation, `'horizontal'` by default */
    orientation?: 'horizontal' | 'vertical';
    /** Slides container `height`, required for vertical orientation */
    height?: React.CSSProperties['height'];
    /** Determines whether gap between slides should be treated as part of the slide size, `true` by default */
    includeGapInSize?: boolean;
    /** Index of initial slide */
    initialSlide?: number;
    /** Determines whether next/previous controls should be displayed, true by default */
    withControls?: boolean;
    /** Determines whether indicators should be displayed, `false` by default */
    withIndicators?: boolean;
    /** Icon of the next control */
    nextControlIcon?: React.ReactNode;
    /** Icon of the previous control */
    previousControlIcon?: React.ReactNode;
    /** Determines whether arrow key should switch slides, `true` by default */
    withKeyboardEvents?: boolean;
    /** Enables autoplay with optional configuration */
    autoplay?: boolean | Record<string, any>;
    /** Enables autoScroll with optional configuration */
    autoScroll?: boolean | Record<string, any>;
    /** Determines typeof of queries that are used for responsive styles, 'media' by default */
    type?: 'media' | 'container';
    /** options to pass to the embla component */
    emblaOptions?: object;
}

/** Carousel */
const Carousel = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyCarousel {...props} />
      </Suspense>
    );
}

export default Carousel;

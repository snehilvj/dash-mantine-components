import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';


// eslint-disable-next-line no-inline-comments
const LazyCarouselSlide = React.lazy(() => import(/* webpackChunkName: "CarouselSlide" */ './fragments/CarouselSlide'));

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** CarouselSlide */
const CarouselSlide = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyCarouselSlide {...props} />
      </Suspense>
    );
}

export default CarouselSlide;

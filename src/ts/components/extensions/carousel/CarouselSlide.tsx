import { Carousel } from "@mantine/carousel";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** CarouselSlide */
const CarouselSlide = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Carousel.Slide {...others}>{children} </Carousel.Slide>;
};

CarouselSlide.defaultProps = {};

export default CarouselSlide;

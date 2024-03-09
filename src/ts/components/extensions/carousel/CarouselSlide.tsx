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
    const { children, setProps, ...other } = props;

    return <Carousel.Slide {...other}>{children} </Carousel.Slide>;
};

CarouselSlide.defaultPtops = {};

export default CarouselSlide;

import { Carousel } from "@mantine/carousel";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** CarouselSlide */
const CarouselSlide = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Carousel.Slide
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}{" "}
        </Carousel.Slide>
    );
};

export default CarouselSlide;

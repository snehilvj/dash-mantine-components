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
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Carousel.Slide
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}{" "}
        </Carousel.Slide>
    );
};

CarouselSlide.defaultProps = {};

export default CarouselSlide;

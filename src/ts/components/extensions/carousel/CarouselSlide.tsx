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

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();


    return (
        <Carousel.Slide
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}{" "}
        </Carousel.Slide>
    );
};

export default CarouselSlide;

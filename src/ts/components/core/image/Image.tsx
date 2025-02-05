import { Image as MantineImage, MantineRadius } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useMemo } from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `0` by default */
    radius?: MantineRadius;
    /** Controls `object-fit` style, `'cover'` by default */
    fit?: React.CSSProperties["objectFit"];
    /** Image url that will be used as a fallback in case `src` prop is not set or image cannot be loaded */
    fallbackSrc?: string;
    /** Image url */
    src?: any;
    /** Image alt text, used as title for placeholder if image was not loaded */
    alt?: string;
}

/** Image  */
const Image = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineImage
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

Image.defaultProps = {};

export default Image;

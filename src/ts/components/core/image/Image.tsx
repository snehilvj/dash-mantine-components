import React from "react";
import { Image as MantineImage } from "@mantine/core";
import { ObjectFit } from "props/css";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Image src */
    src?: string | null;
    /** Image alt text, used as title for placeholder if image was not loaded */
    alt?: string;
    /** Image object-fit property */
    fit?: ObjectFit;
    /** Image width, defaults to 100%, cannot exceed 100% */
    width?: number | string;
    /** Image height, defaults to original image height adjusted to given width */
    height?: number | string;
    /** Key of theme.radius or any valid CSS value to set border-radius, 0 by default */
    radius?: MantineNumberSize;
    /** Enable placeholder when image is loading and when image fails to load */
    withPlaceholder?: boolean;
    /** Customize placeholder content */
    placeholder?: React.ReactNode;
    /** Props spread to img element */
    imageProps?: object;
    /** Image figcaption, displayed below image */
    caption?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Image with optional placeholder for loading and error state */
const Image = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineImage {...other} />;
};

Image.defaultProps = {};

export default Image;

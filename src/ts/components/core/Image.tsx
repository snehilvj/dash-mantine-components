import React from "react";
import { DefaultProps } from "../../props";
import { Image as MantineImage } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Image src */
    src?: string;
    /** Image alt text, used as title for placeholder if image was not loaded */
    alt?: string;
    /** Image object-fit property */
    fit?: "contain" | "cover";
    /** Image width, defaults to 100%, cannot exceed 100% */
    width?: number | string;
    /** Image height, defaults to original image height adjusted to given width */
    height?: number | string;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Enable placeholder when image is loading and when image fails to load */
    withPlaceholder?: boolean;
    /** Customize placeholder content */
    placeholder?: React.ReactNode;
    /** Image figcaption, displayed bellow image */
    caption?: React.ReactNode;
} & DefaultProps;

/**
 * Image with optional placeholder for loading and error state. For more information, see: https://mantine.dev/core/image/
 */
const Image = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineImage {...other} />;
};

Image.defaultProps = {};

export default Image;
